# Michigan Health Tracker

A simple full-stack web application that displays public health data by county.

## Project Overview

This project was built to practice full-stack development using a React frontend and a FastAPI backend. The app allows users to view disease case data and filter results by county.

## Tech Stack

- Frontend: React (Vite)
- Backend: FastAPI (Python)
- Tools: Git, VS Code

## Features

- Fetch data from a backend API
- Display health data in a card layout
- Filter results by county using a dropdown
- Simple and clean UI

## What I Learned

- How frontend and backend communicate using APIs
- How to use `fetch()` to get data in React
- Managing state using `useState`
- Running a backend server with FastAPI
- Structuring a full-stack project

## 🚀 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/Dev71848212/michigan-health-tracker.git
cd michigan-health-tracker
```

### 2 — Start Backend (API)

Open Terminal 1 and run:

cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install fastapi uvicorn
uvicorn main:app --reload

### Step 3 — Start Frontend (React App)

Open Terminal 2 and run:

cd frontend
npm install
npm run dev

### Step 4 — Open the App

👤 Author

Haitham Muhsin
Computer Science Student – Wayne State University
