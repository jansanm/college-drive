from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib
import os

app = Flask(__name__)
CORS(app)

# Load the model and scaler once
MODEL_PATH = 'models/best_model.pkl'
SCALER_PATH = 'models/scaler.pkl'

try:
    model = joblib.load(MODEL_PATH)
    scaler = joblib.load(SCALER_PATH)
    
    # Pre-load label encoders
    label_encoders = {}
    for col in ['gender', 'department']:
        le_path = f'models/le_{col}.pkl'
        if os.path.exists(le_path):
            label_encoders[col] = joblib.load(le_path)
except Exception as e:
    print(f"Error loading model files: {e}")

def get_prediction(data):
    try:
        # Convert data to DataFrame
        df = pd.DataFrame([data])
        
        # List of expected features (must match training)
        feature_cols = [
            'gender', 'age', 'department', 'cgpa', 'backlogs', 
            'attendance_percentage', 'programming_skills', 'dsa_skills', 
            'core_subjects', 'projects_completed', 'internships', 
            'certifications', 'communication_skills', 'leadership', 
            'teamwork', 'hackathons', 'extracurricular_score', 
            'aptitude_score', 'interview_score', 'resume_score', 
            'mock_interview_score'
        ]
        
        # Fill missing features with defaults to avoid KeyErrors
        for col in feature_cols:
            if col not in df.columns:
                df[col] = 0 # Default for numeric
        
        # Preprocess categorical features
        for col, le in label_encoders.items():
            if col in df.columns:
                val = df[col].iloc[0]
                if isinstance(val, str):
                    try:
                        df[col] = le.transform([val])[0]
                    except:
                        df[col] = 0 # Fallback
        
        # Ensure correct column order
        X = df[feature_cols]
        
        # Scale features
        X_scaled = scaler.transform(X)
        
        # Predict
        prediction = model.predict(X_scaled)[0]
        probability = model.predict_proba(X_scaled)[0][1] if hasattr(model, 'predict_proba') else None
        
        return {
            'placement_status': int(prediction),
            'probability': float(probability) if probability is not None else None
        }
    except Exception as e:
        import traceback
        traceback.print_exc()
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

@app.route('/random_student', methods=['GET'])
def random_student():
    try:
        df = pd.read_csv('project_dataset.csv')
        random_row = df.sample(1).iloc[0].to_dict()
        # Ensure we return types that JSON likes
        clean_row = {}
        for k, v in random_row.items():
            if pd.isna(v):
                clean_row[k] = None
            elif isinstance(v, (int, float)):
                clean_row[k] = float(v) if isinstance(v, float) else int(v)
            else:
                clean_row[k] = str(v)
        return jsonify(clean_row)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
