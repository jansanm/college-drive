# 🎓 College Placement Prediction System

A state-of-the-art predictive analytics platform that uses Machine Learning to estimate a student's placement probability and expected salary package based on academic, technical, and soft skill metrics.

## 🚀 Features

- **ML Pipeline**: Automated data cleaning, feature engineering, and training of 5 different models.
- **High Accuracy**: Achieving 99.75% accuracy using Logistic Regression.
- **Real-time Prediction**: Interactive UI to input student data and get instant results.
- **Premium UI**: Modern SaaS-style dashboard with dark mode and glassmorphism.
- **Dataset Insights**: Live statistics derived from the historical placement dataset.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Lucide-React, Axios
- **Backend**: Flask, Flask-CORS
- **Machine Learning**: Scikit-Learn, Pandas, NumPy, Joblib
- **Styling**: Vanilla CSS (Custom Design System)

---

## 🏃 How to Run the Project

Follow these steps to set up and run the project locally.

### 1. Prerequisites

- Python 3.8+
- Node.js & npm

### 2. Backend Setup

1. Open a terminal in the root directory.
2. Create a virtual environment:
   ```bash
   python3 -m venv venv
   ```
3. Activate the virtual environment:
   - **MacOS/Linux**: `source venv/bin/activate`
   - **Windows**: `venv\Scripts\activate`
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. (Optional) Re-train the model:
   ```bash
   python3 main.py
   ```
6. Start the Flask server:
   ```bash
   python3 app.py
   ```
   _Note: The server runs on http://127.0.0.1:5001_

### 3. Frontend Setup

1. Open a new terminal window in the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser:
   ```text
   http://localhost:5173
   ```

---

## 📊 Dataset Schema

The model uses the following features for prediction:

- **Academic**: CGPA, Backlogs, Department, Attendance %
- **Technical**: Programming Skills, DSA Skills, Projects, Core Subjects
- **Soft Skills**: Communication, Leadership, Teamwork, Mock Interviews
- **Experience**: Internships, Certifications, Hackathons

---

## 📄 License

MIT License. Created for educational and placement preparation purposes.
