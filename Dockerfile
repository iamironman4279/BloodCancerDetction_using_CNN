# /flask_mongo_auth/Dockerfile

# Use Python 3.8 as base image
FROM python:3.7

# Set working directory
WORKDIR /app

# Copy requirements.txt and install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project directory into the container
COPY . /app/

# Set the command to run the Flask application
CMD ["python", "app.py"]
