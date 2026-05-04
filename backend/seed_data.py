import asyncio
from datetime import date
from sqlalchemy.ext.asyncio import AsyncSession
from database import SessionLocal, engine
from models import Category, Region, Article, Base

async def seed_data():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with SessionLocal() as session:
        from sqlalchemy import select
        existing = await session.execute(select(Category))
        if existing.scalars().first():
            print("Database is already seeded!")
            return

        print("Seeding database...")
        cat_national = Category(name="জাতীয়")
        cat_sports = Category(name="খেলা")
        session.add_all([cat_national, cat_sports])
        await session.commit()
        await session.refresh(cat_national)
        await session.refresh(cat_sports)

        reg_dhaka = Region(division="ঢাকা", district="ঢাকা", upazila="মিরপুর")
        session.add(reg_dhaka)
        await session.commit()
        await session.refresh(reg_dhaka)

        articles = [
            Article(title="আগামীকাল থেকে সারা দেশে ভারী বৃষ্টির সম্ভাবনা", content="আবহাওয়া অধিদপ্তরের সর্বশেষ পূর্বাভাসে জানানো হয়েছে, আগামীকাল সকাল থেকে দেশের সকল বিভাগে মাঝারি থেকে ভারী বৃষ্টিপাত হতে পারে।", published_date=date.today(), category_id=cat_national.id, region_id=reg_dhaka.id),
            Article(title="বিশ্বকাপ ফুটবলে নতুন চমক, ফাইনালে উঠলো তরুণরা!", content="খেলার মাঠে এক নতুন ইতিহাস সৃষ্টি হয়েছে। এক শ্বাসরুদ্ধকর ম্যাচে প্রতিপক্ষকে ২-১ গোলে হারিয়ে ফাইনালে স্থান করে নিয়েছে খেলোয়াড়রা।", published_date=date.today(), category_id=cat_sports.id, region_id=None),
            Article(title="ঢাকায় নতুন মেট্রো রেল রুটের উদ্বোধন", content="রাজধানী ঢাকার যানজট নিরসনে নতুন মেট্রো রেল রুটের উদ্বোধন করা হয়েছে।", published_date=date.today(), category_id=cat_national.id, region_id=reg_dhaka.id),
            Article(title="স্থানীয় বাজারে চালের দাম স্থিতিশীল", content="গত এক সপ্তাহের তুলনায় এই সপ্তাহে চালের দাম বাজারে বেশ স্থিতিশীল। ব্যবসায়ীরা জানিয়েছেন সরবরাহ স্বাভাবিক।", published_date=date.today(), category_id=cat_national.id, region_id=reg_dhaka.id)
        ]
        session.add_all(articles)
        await session.commit()
        print("Successfully inserted Seed data!")

if __name__ == "__main__":
    asyncio.run(seed_data())
