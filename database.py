# database.py
from sqlmodel import SQLModel, create_engine, Session

# SQLite database file
DATABASE_URL = "sqlite:///./studyhub.db"

engine = create_engine(DATABASE_URL, echo=False)

def create_db_and_tables():
    # This will create the database file and tables based on our models
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session
