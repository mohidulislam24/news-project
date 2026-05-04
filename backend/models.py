from sqlalchemy import Column, Integer, String, Text, ForeignKey, Date, DateTime
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime

class Category(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)

class Region(Base):
    __tablename__ = "regions"
    id = Column(Integer, primary_key=True, index=True)
    division = Column(String, index=True)
    district = Column(String, index=True)
    upazila = Column(String, index=True)

class Article(Base):
    __tablename__ = "articles"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    content = Column(Text)
    published_date = Column(Date, index=True)
    thumbnail_url = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    category_id = Column(Integer, ForeignKey("categories.id"))
    region_id = Column(Integer, ForeignKey("regions.id"), nullable=True)
    
    category = relationship("Category")
    region = relationship("Region")
