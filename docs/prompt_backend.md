# Backend Implementation Prompt for Local LLM

*Copy and paste the prompt below into your local LLM:*

***

**System Role:** 
Act as an expert Python backend developer. We are building the backend for a high-performance Bengali news portal using FastAPI, SQLite, and SQLAlchemy.

**Core Requirements:**
1. **Database:** Use SQLite with async SQLAlchemy or SQLModel.
2. **Schema & Categories:** Create models for an `Article` which has relationships to `Category` (e.g., Sports, Politics) and `Region` (Division > District > Upazila).
3. **Archive Retrieval:** Create an endpoint to fetch articles strictly filtered by an exact `published_date` for the "পুরাতন খবর" (Archive) feature.
4. **Live Ticker:** Implement an endpoint using Server-Sent Events (SSE) via FastAPI's `StreamingResponse` to continuously push breaking news alerts instantly to clients.
5. **Media:** Endpoints to manage and serve image URLs for photo galleries.

**Deliverables:**
1. Provide the complete project directory structure.
2. Write the `models.py` (SQLAlchemy) and `schemas.py` (Pydantic).
3. Write `main.py` containing the FastAPI application, CORS configuration, and the async REST endpoints (`/api/articles/`, `/api/regions/`, and `/api/live-ticker/`).
4. Provide the exact terminal commands (e.g., `pip install ...` and `uvicorn ...`) required to run this API locally on port 8000.
5. Return the response purely in properly formatted markdown code blocks.
