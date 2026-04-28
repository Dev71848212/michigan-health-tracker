from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

health_data = [
    {"id": 1, "disease": "Flu", "county": "Wayne", "cases": 120, "risk": "Medium"},
    {"id": 2, "disease": "COVID-19", "county": "Oakland", "cases": 85, "risk": "Low"},
    {"id": 3, "disease": "Measles", "county": "Macomb", "cases": 12, "risk": "High"},
]

@app.get("/")
def home():
    return {"message": "API is running"}

@app.get("/health-data")
def get_health_data():
    return health_data