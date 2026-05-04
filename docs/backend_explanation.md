# Backend Coding Explanation

This document explains the architecture and coding structure of the backend for the News Portal.

## Technology Stack
- **Framework:** FastAPI (Python)
- **Server:** Uvicorn
- **Admin Dashboard:** SQLAdmin
- **Database:** Relational database (e.g., PostgreSQL/SQLite) mapped via SQLAlchemy

## Project Structure
The backend is structured to handle API requests efficiently and provide an administrative interface for content management.

### Key Components

1. **Main Application (`main.py`)**
   - Initializes the FastAPI app instance.
   - Configures CORS middleware.
   - Includes API routers for different endpoints.
   - Sets up the SQLAdmin dashboard and attaches it to the FastAPI application for administrative tasks.

2. **Database Configuration (`database.py`)**
   - Sets up the database engine and session maker using SQLAlchemy.
   - Defines the `Base` declarative class for models.

3. **Models (`models.py`)**
   - Contains SQLAlchemy ORM models representing the database tables (e.g., Articles, Categories, Users, Tags).
   - These models are used by both the API and the SQLAdmin dashboard.

4. **Schemas (`schemas.py`)**
   - Pydantic models used for data validation and serialization/deserialization.
   - Defines how data should look when being sent to or received from the API (e.g., `ArticleCreate`, `ArticleResponse`).

5. **Routers/API Endpoints (`routers/` or `api/`)**
   - Defines the FastAPI route handlers.
   - Handles incoming HTTP requests, interacts with the database (usually via CRUD utility functions), and returns responses based on the Pydantic schemas.

6. **Admin Dashboard (`admin.py` or integrated in `main.py`)**
   - Configuration for SQLAdmin views.
   - Defines how models are presented in the admin UI (columns to display, search fields, form fields).

## Running the Backend
To start the development server, you typically run:
```bash
uvicorn main:app --reload
```
The API is then available at `http://localhost:8000`, the interactive API documentation at `http://localhost:8000/docs`, and the admin dashboard at `http://localhost:8000/admin`.
