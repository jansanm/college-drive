from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib
import os

app = Flask(__name__)
CORS(app)

# Load the model and scaler
MODEL_PATH = 'models/best_model.pkl'
SCALER_PATH = 'models/scaler.pkl'

def get_prediction(data):
    try:
        model = joblib.load(MODEL_PATH)
        scaler = joblib.load(SCALER_PATH)
        
        # Convert data to DataFrame
        df = pd.DataFrame([data])
        
        # List of expected features (must match training)
        # We need to make sure we match the order and names
        feature_cols = [
            'gender', 'age', 'department', 'cgpa', 'backlogs', 
            'attendance_percentage', 'programming_skills', 'dsa_skills', 
            'core_subjects', 'projects_completed', 'internships', 
            'certifications', 'communication_skills', 'leadership', 
            'teamwork', 'hackathons', 'extracurricular_score', 
            'aptitude_score', 'interview_score', 'resume_score', 
            'mock_interview_score'
        ]
        
        # Preprocess categorical features if they are strings
        for col in ['gender', 'department']:
            le_path = f'models/le_{col}.pkl'
            if os.path.exists(le_path):
                le = joblib.load(le_path)
                if isinstance(df[col].iloc[0], str):
                    df[col] = le.transform(df[col])
        
        # Scale features
        X = scaler.transform(df[feature_cols])
        
        # Predict
        prediction = model.predict(X)[0]
        probability = model.predict_proba(X)[0][1] if hasattr(model, 'predict_proba') else None
        
        return {
            'placement_status': int(prediction),
            'probability': float(probability) if probability is not None else None
        }
    except Exception as e:
        return {'error': str(e)}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    result = get_prediction(data)
    return jsonify(result)

@app.route('/stats', methods=['GET'])
def stats():
    try:
        df = pd.read_csv('project_dataset.csv')
        # Simple stats for the dashboard
        stats_data = {
            'total_students': len(df),
            'placed_count': int(df['placement_status'].sum()),
            'avg_cgpa': float(df['cgpa'].mean()),
            'avg_package': float(df[df['placement_status'] == 1]['package_lpa'].mean())
        }
        return jsonify(stats_data)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
