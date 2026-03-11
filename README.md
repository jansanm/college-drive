# 🎓 PlacementAI: Smart Career Prediction System

A state-of-the-art predictive analytics platform that uses Machine Learning to estimate a student's placement probability and expected salary package based on academic, technical, and soft skill metrics.

---

## 🌟 Key Features

### 1. **5-Page Premium Experience**
- **Home**: Dynamic landing page with hero, features, and success stories.
- **Login**: Secure mock authentication flow (works with any user/pass).
- **Interactive Dashboard**: Real-time hiring demand heatmaps, skills proficiency tracking, and live activity feeds.
- **Student Profile**: Professional showcase of academic status and technical endorsements.
- **About**: Explainer on the tech behind our AI prediction engine.

### 2. **AI-Powered Prediction**
- **Dataset Integration**: One-click **"Load Dataset Row"** to fetch real student records from the CSV.
- **High Sensitivity**: Model processes 21 different student parameters including CGPA, Internships, and Mock Interviews.
- **Predictive Analytics**: Instant calculation of placement status and probability percentage.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), React Router, Lucide-React, Axios.
- **Backend**: Flask, Flask-CORS.
- **Machine Learning**: Scikit-Learn, Pandas, NumPy, Joblib.
- **Styling**: Vanilla CSS with a Custom Glassmorphism Design System.

---

## 🏃 Quick Start Guide

Follow these steps to set up and run the project locally.

### 1. Prerequisites
- **Python 3.8+**
- **Node.js & npm**

### 2. Backend Setup (Flask Server)
The backend handles the ML model execution and serves dataset statistics.

1. Open a terminal in the **root directory**.
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the Flask server:
   ```bash
   python3 app.py
   ```
   *The backend will run on `http://127.0.0.1:5001`*

### 3. Frontend Setup (React App)
1. Open a **new terminal** window in the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   **`http://localhost:5173`**

---

## 📊 Dataset Preview
The system is trained on `project_dataset.csv`, containing historical records of:
- **Academic Score**: CGPA, Backlogs, Attendance.
- **Technical Competency**: Programming, DSA, Core Subjects.
- **Soft Skills**: Communication, Leadership, Teamwork.
- **Experience**: Internships, Certifications, Projects.
