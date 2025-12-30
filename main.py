"""
train_model.py - Complete ML Pipeline for Training
This script trains multiple models and saves the best performer
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.metrics import (accuracy_score, precision_score, recall_score, 
                             f1_score, confusion_matrix, classification_report, roc_auc_score)
import matplotlib.pyplot as plt
import seaborn as sns
import joblib
import warnings
warnings.filterwarnings('ignore')

class PlacementMLPipeline:
    def __init__(self, data_path):
        self.data_path = data_path
        self.df = None
        self.X_train = None
        self.X_test = None
        self.y_train = None
        self.y_test = None
        self.scaler = None
        self.models = {}
        self.results = {}
        
    def load_data(self):
        """Load and display dataset info"""
        print("📥 Loading data...")
        self.df = pd.read_csv(self.data_path)
        print(f"✅ Dataset loaded: {self.df.shape[0]} rows, {self.df.shape[1]} columns")
        print("\n📊 Dataset Info:")
        print(self.df.info())
        print("\n📈 Statistical Summary:")
        print(self.df.describe())
        print("\n❓ Missing Values:")
        print(self.df.isnull().sum())
        return self.df
    
    def preprocess_data(self):
        """Data preprocessing and feature engineering"""
        print("\n🔧 Preprocessing data...")
        
        # Handle missing values
        # For numeric columns
        numeric_cols = self.df.select_dtypes(include=[np.number]).columns
        self.df[numeric_cols] = self.df[numeric_cols].fillna(self.df[numeric_cols].median())
        
        # For categorical columns
        categorical_cols = self.df.select_dtypes(include=['object']).columns
        for col in categorical_cols:
            self.df[col] = self.df[col].fillna(self.df[col].mode()[0])
            le = LabelEncoder()
            self.df[col] = le.fit_transform(self.df[col])
            # Save label encoders for later Use
            joblib.dump(le, f'models/le_{col}.pkl')
        
        # Remove any remaining missing values
        self.df = self.df.dropna()
        
        print(f"✅ Data cleaned: {self.df.shape[0]} rows remaining")
        
    def prepare_features_and_target(self):
        """Prepare X and y for modeling"""
        print("\n🎯 Preparing features and target...")
        
        # Use lowercase column names as per dataset
        self.df.columns = [col.lower() for col in self.df.columns]
        
        feature_cols = [col for col in self.df.columns if col not in 
                       ['student_id', 'placement_status', 'package_lpa']]
        
        X = self.df[feature_cols]
        y = self.df['placement_status']
        
        print(f"✅ Features: {X.shape[1]} | Target classes: {y.unique()}")
        print(f"   Class distribution:\n{y.value_counts()}")
        
        return X, y
    
    def train_test_split_data(self, X, y, test_size=0.2, random_state=42):
        """Split data into train and test sets"""
        print(f"\n📊 Splitting data (80-20)...")
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(
            X, y, test_size=test_size, random_state=random_state, stratify=y
        )
        
        print(f"✅ Train set: {self.X_train.shape}")
        print(f"✅ Test set: {self.X_test.shape}")
        
    def scale_features(self):
        """Scale numerical features"""
        print("\n⚖️ Scaling features...")
        self.scaler = StandardScaler()
        self.X_train = self.scaler.fit_transform(self.X_train)
        self.X_test = self.scaler.transform(self.X_test)
        print("✅ Features scaled using StandardScaler")
        
    def train_models(self):
        """Train multiple ML models"""
        print("\n🤖 Training models...")
        
        models_config = {
            'Logistic Regression': LogisticRegression(max_iter=1000, random_state=42),
            'K-Nearest Neighbors': KNeighborsClassifier(n_neighbors=5),
            'SVM': SVC(kernel='rbf', probability=True, random_state=42),
            'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
            'Gradient Boosting': GradientBoostingClassifier(n_estimators=100, random_state=42)
        }
        
        for name, model in models_config.items():
            print(f"\n   Training {name}...", end=" ")
            model.fit(self.X_train, self.y_train)
            self.models[name] = model
            print("✅")
            
    def evaluate_models(self):
        """Evaluate all models"""
        print("\n📊 Evaluating models...")
        print("=" * 80)
        
        for name, model in self.models.items():
            y_pred = model.predict(self.X_test)
            
            accuracy = accuracy_score(self.y_test, y_pred)
            precision = precision_score(self.y_test, y_pred, average='weighted', zero_division=0)
            recall = recall_score(self.y_test, y_pred, average='weighted', zero_division=0)
            f1 = f1_score(self.y_test, y_pred, average='weighted', zero_division=0)
            
            self.results[name] = {
                'accuracy': accuracy,
                'precision': precision,
                'recall': recall,
                'f1_score': f1,
                'predictions': y_pred
            }
            
            print(f"\n{name}:")
            print(f"  Accuracy:  {accuracy:.4f}")
            print(f"  Precision: {precision:.4f}")
            print(f"  Recall:    {recall:.4f}")
            print(f"  F1-Score:  {f1:.4f}")
            
        print("\n" + "=" * 80)
        
    def get_best_model(self):
        """Get model with highest accuracy"""
        best_model_name = max(self.results, key=lambda x: self.results[x]['accuracy'])
        best_accuracy = self.results[best_model_name]['accuracy']
        print(f"\n🏆 Best Model: {best_model_name}")
        print(f"   Accuracy: {best_accuracy:.4f}")
        return best_model_name
    
    def save_models(self, best_model_name):
        """Save best model and scaler"""
        print("\n💾 Saving models...")
        joblib.dump(self.models[best_model_name], 'models/best_model.pkl')
        joblib.dump(self.scaler, 'models/scaler.pkl')
        
        # Save all model results for comparison
        for name, model in self.models.items():
            joblib.dump(model, f'models/{name.replace(" ", "_").lower()}.pkl')
        
        print("✅ Models saved to models/ directory")
        
    def generate_report(self, best_model_name):
        """Generate detailed classification report"""
        print("\n📋 Detailed Classification Report:")
        print("=" * 80)
        y_pred = self.results[best_model_name]['predictions']
        print(classification_report(self.y_test, y_pred))
        
    def visualize_results(self, best_model_name):
        """Create visualization plots"""
        print("\n📊 Creating visualizations...")
        
        y_pred = self.results[best_model_name]['predictions']
        cm = confusion_matrix(self.y_test, y_pred)
        
        # Confusion Matrix
        plt.figure(figsize=(8, 6))
        sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', cbar=False)
        plt.title(f'Confusion Matrix - {best_model_name}')
        plt.ylabel('True Label')
        plt.xlabel('Predicted Label')
        plt.tight_layout()
        plt.savefig('results/confusion_matrix.png', dpi=300, bbox_inches='tight')
        print("✅ Confusion Matrix saved")
        
        # Model Comparison
        plt.figure(figsize=(12, 6))
        models = list(self.results.keys())
        accuracies = [self.results[m]['accuracy'] for m in models]
        f1_scores = [self.results[m]['f1_score'] for m in models]
        
        x = np.arange(len(models))
        width = 0.35
        
        plt.bar(x - width/2, accuracies, width, label='Accuracy', alpha=0.8)
        plt.bar(x + width/2, f1_scores, width, label='F1-Score', alpha=0.8)
        
        plt.xlabel('Models')
        plt.ylabel('Score')
        plt.title('Model Comparison')
        plt.xticks(x, models, rotation=45, ha='right')
        plt.legend()
        plt.tight_layout()
        plt.savefig('results/model_comparison.png', dpi=300, bbox_inches='tight')
        print("✅ Model Comparison saved")
        
    def run_pipeline(self):
        """Execute complete pipeline"""
        print("\n" + "="*80)
        print("🚀 COLLEGE PLACEMENT PREDICTION - ML PIPELINE")
        print("="*80)
        
        try:
            # Load and preprocess
            self.load_data()
            self.preprocess_data()
            
            # Prepare features
            X, y = self.prepare_features_and_target()
            self.train_test_split_data(X, y)
            self.scale_features()
            
            # Train and evaluate
            self.train_models()
            self.evaluate_models()
            
            # Save and report
            best_model = self.get_best_model()
            self.save_models(best_model)
            self.generate_report(best_model)
            self.visualize_results(best_model)
            
            print("\n" + "="*80)
            print("✅ PIPELINE COMPLETED SUCCESSFULLY!")
            print("="*80 + "\n")
            
        except Exception as e:
            print(f"\n❌ Error in pipeline: {str(e)}")
            raise

# Run the pipeline
if __name__ == "__main__":
    import os
    
    # Create directories if they don't exist
    os.makedirs('models', exist_ok=True)
    os.makedirs('results', exist_ok=True)
    
    # Initialize and run pipeline
    pipeline = PlacementMLPipeline('project_dataset.csv')
    pipeline.run_pipeline()