---
name: machine-learning-basics
description: >
  Explains and applies foundational machine learning concepts including model training, inference pipelines, and evaluation metrics. Use when someone asks "how do I train a model", wants to understand the difference between training and inference, needs help evaluating ML model performance, is confused about overfitting or underfitting, or wants to build a basic ML pipeline from scratch.
category: developer
tags: [machine-learning, AI, data-science, training, evaluation]
author: community
---

# Machine Learning Basics Skill

Guides users through core ML concepts and workflows — from data preparation and model training to inference and evaluation — with concrete code examples and practical explanations.

## ML Workflow Steps

1. **Define the Problem**
   - Identify task type: classification, regression, clustering, or generation
   - Clarify supervised vs. unsupervised vs. reinforcement learning
   - Confirm input/output shape and data availability

2. **Prepare the Data**
   - Split data into train, validation, and test sets (e.g., 70/15/15)
   - Apply normalization or standardization to numerical features
   - Encode categorical variables (one-hot, label encoding, embeddings)
   - Handle missing values explicitly — impute or drop with justification

3. **Choose and Build a Model**
   - Recommend a model appropriate to the task and data size:
     - Small tabular data → logistic regression, decision tree, XGBoost
     - Images → CNN or pretrained vision model
     - Text → pretrained transformer (BERT, GPT variants)
   - Show the model definition in code (scikit-learn, PyTorch, or TensorFlow based on user context)

4. **Train the Model**
   - Define a loss function appropriate to the task (CrossEntropy, MSE, etc.)
   - Select an optimizer (Adam as default; explain SGD tradeoffs)
   - Show a training loop or `.fit()` call with epochs and batch size
   - Add early stopping or validation loss tracking to prevent overfitting

5. **Evaluate Performance**
   - Classification: accuracy, precision, recall, F1, ROC-AUC, confusion matrix
   - Regression: MAE, RMSE, R²
   - Always evaluate on the held-out test set, never the training set
   - Diagnose overfitting (high train accuracy, low val accuracy) vs. underfitting (both low)

6. **Run Inference**
   - Show how to load a trained model and run predictions on new data
   - Clarify the difference: training updates weights; inference uses frozen weights
   - Include preprocessing steps required before inference (must match training pipeline)

7. **Iterate**
   - Suggest next steps: hyperparameter tuning, more data, feature engineering, or a more complex model
   - Recommend tools: Optuna for tuning, MLflow for experiment tracking

## Output Format

Responses must include:

- **Concept explanation** (2–4 sentences): plain-language definition of the ML concept asked about
- **Code example** (always): a working, minimal snippet in Python using scikit-learn, PyTorch, or TensorFlow — chosen based on user context or defaulting to scikit-learn for beginners
- **Labeled sections**: use headers like `### Training`, `### Evaluation`, `### Inference` to organize multi-step answers
- **Metric table** (when evaluating): a small markdown table showing metric name, value, and interpretation
- **Pitfall callout** (1–2 bullets): common mistakes relevant to the current step (e.g., data leakage, wrong loss function)
- Length: concise but complete — no truncated code, no unexplained magic numbers
