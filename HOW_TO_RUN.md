# How to Run The Daily Akash Platform

This application is split into two components: a `backend` API and a `frontend` web application. You must run both simultaneously in **two separate terminal windows** to properly boot out the platform.

---

## 1. Start the Backend API (Terminal 1)
Open your first terminal inside this root `news-portal` folder. Activate your virtual environment and start the Python server.

```powershell
# Activate the Virtual Environment
.venv\Scripts\Activate.ps1

# Change into the backend folder
cd backend

# Start the Uvicorn server
uvicorn main:app --reload
```
*This terminal must stay open. The backend API handles the SQLite database and will securely run at http://localhost:8000.*

---

## 2. Start the Frontend App (Terminal 2)
Open a completely **new** terminal window (also starting in the root `news-portal` folder). You do not need to activate the python environment here; just switch directories and run Node.

```powershell
# Change into the frontend folder
cd frontend

# Start the Next.js development server
npm run dev
```
*Keep this terminal open as well. It serves the visual website over http://localhost:3000.*

---

## 3. View the Complete Site
Once both commands have successfully booted in their respective terminals, open your web browser and navigate to **[http://localhost:3000](http://localhost:3000)**.

To view or directly test the backend endpoints manually in a Sandbox UI, go to **[http://localhost:8000/docs](http://localhost:8000/docs)**.
