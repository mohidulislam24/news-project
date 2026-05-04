from pydantic import BaseModel
from typing import Optional
from datetime import date, datetime

class CategoryBase(BaseModel):
    name: str

class CategoryResponse(CategoryBase):
    id: int
    class Config:
        from_attributes = True

class RegionBase(BaseModel):
    division: str
    district: str
    upazila: str

class RegionResponse(RegionBase):
    id: int
    class Config:
        from_attributes = True

class ArticleBase(BaseModel):
    title: str
    content: str
    published_date: date
    thumbnail_url: Optional[str] = None
    category_id: int
    region_id: Optional[int] = None

class ArticleResponse(ArticleBase):
    id: int
    created_at: datetime
    category: Optional[CategoryResponse] = None
    region: Optional[RegionResponse] = None
    class Config:
        from_attributes = True
