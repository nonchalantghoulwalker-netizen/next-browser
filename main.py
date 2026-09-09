# main.py
from fastapi import FastAPI, Request, Depends
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import uvicorn
from database import create_db_and_tables, get_session

app = FastAPI(title="StudyHub")

# Mount static files (for images, custom css, etc.)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Configure Jinja2 templates
templates = Jinja2Templates(directory="templates")

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

# --- ROUTES ---

@app.get("/", response_class=HTMLResponse)
async def dashboard(request: Request):
    # Later, we will pass user data and habits here
    return templates.TemplateResponse("dashboard.html", {
        "request": request, 
        "user_name": "Student"
    })

@app.get("/ai", response_class=HTMLResponse)
async def ai_hub(request: Request):
    return templates.TemplateResponse("placeholder.html", {
        "request": request, 
        "page_title": "AI Study Hub"
    })

@app.get("/files", response_class=HTMLResponse)
async def files(request: Request):
    return templates.TemplateResponse("placeholder.html", {
        "request": request, 
        "page_title": "My Files"
    })

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
