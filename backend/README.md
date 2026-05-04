# The Daily Akash - Backend API

This is the asynchronous backend API for "The Daily Akash" news portal, built to guarantee high performance during traffic spikes using **FastAPI** and **SQLAlchemy**.

## Tech Stack Requirements
*   **FastAPI**: Core Python framework.
*   **SQLAlchemy / aiosqlite**: Asynchronous ORM mappings hooked into a local SQLite database (`newsportal.db`).
*   **Pydantic**: Robust data validation and serialization schemas.
*   **Uvicorn**: Lightning-fast ASGI server for running the code block natively.

## Getting Started

### 1. Install Dependencies
Ensure you have activated your preferred virtual environment (if using one). Make sure your terminal is inside the `backend/` directory, then run:
```bash
pip install -r requirements.txt
```

### 2. Start the Server
Spin up the local development server with auto-reload enabled:
```bash
uvicorn main:app --reload
```
*Note: Because we are using an async engine, SQLite automatically creates the necessary `newsportal.db` tables upon server initialization!*

### 3. Accessing the API Sandbox
Once the server is running on `http://localhost:8000`, FastAPI automatically provides an interactive documentation environment. 
- You can test endpoints using the **Swagger UI Sandbox**: [http://localhost:8000/docs](http://localhost:8000/docs)
- For cleaner static endpoint documentation, view **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)

### 4. Database Content Management (SQLAdmin)
We have integrated a full-featured admin dashboard utilizing `sqladmin` for easy CRUD operations directly onto your SQLite Database. No need to write complex SQL or raw API payloads!

1. Go to **[http://localhost:8000/admin](http://localhost:8000/admin)** in your browser.
2. On the left sidebar, click the **Article** tab to view your current dummy articles.
3. Click **+ New Article** to inject breaking news directly to the site without touching the code. The Next.js frontend will automatically fetch it!
