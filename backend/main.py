import asyncio
from datetime import date
from typing import List

from fastapi import FastAPI, Depends, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload

import models
import schemas
from database import engine, get_db
from sqladmin import Admin, ModelView

app = FastAPI(title="The Daily Akash API", version="1.0.0")

class CategoryAdmin(ModelView, model=models.Category):
    column_list = [models.Category.id, models.Category.name]
    icon = "fa-solid fa-list"

class RegionAdmin(ModelView, model=models.Region):
    column_list = [models.Region.id, models.Region.division, models.Region.district]
    icon = "fa-solid fa-map-location-dot"

class ArticleAdmin(ModelView, model=models.Article):
    column_list = [models.Article.id, models.Article.title, models.Article.published_date]
    column_searchable_list = [models.Article.title, models.Article.content]
    column_sortable_list = [models.Article.published_date]
    icon = "fa-solid fa-newspaper"

admin = Admin(app, engine)
admin.add_view(CategoryAdmin)
admin.add_view(RegionAdmin)
admin.add_view(ArticleAdmin)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(models.Base.metadata.create_all)

@app.post("/api/articles/", response_model=schemas.ArticleResponse)
async def create_article(article: schemas.ArticleBase, db: AsyncSession = Depends(get_db)):
    db_article = models.Article(**article.model_dump())
    db.add(db_article)
    await db.commit()
    await db.refresh(db_article)
    
    result = await db.execute(
        select(models.Article)
        .options(selectinload(models.Article.category), selectinload(models.Article.region))
        .where(models.Article.id == db_article.id)
    )
    return result.scalars().first()

@app.get("/api/articles/", response_model=List[schemas.ArticleResponse])
async def get_articles(db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(models.Article)
        .options(selectinload(models.Article.category), selectinload(models.Article.region))
        .order_by(models.Article.published_date.desc())
    )
    return result.scalars().all()

@app.get("/api/articles/archive/", response_model=List[schemas.ArticleResponse])
async def get_archive(exact_date: date, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(models.Article)
        .options(selectinload(models.Article.category), selectinload(models.Article.region))
        .where(models.Article.published_date == exact_date)
    )
    return result.scalars().all()

@app.get("/api/regions/", response_model=List[schemas.RegionResponse])
async def get_regions(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.Region))
    return result.scalars().all()

async def event_generator():
    while True:
        # Dummy breaking news stream
        yield f"data: Breaking News update at {asyncio.get_event_loop().time()}\n\n"
        await asyncio.sleep(5)

@app.get("/api/live-ticker/")
async def live_ticker():
    return StreamingResponse(event_generator(), media_type="text/event-stream")
