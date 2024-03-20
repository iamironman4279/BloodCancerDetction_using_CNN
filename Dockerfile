# Use Python 3.8 slim image as the base
FROM python:3.8-slim

# Install TensorFlow version 2.15.0
RUN pip install tensorflow==2.15.0

# Set working directory
WORKDIR /app

# Copy requirements.txt and install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project directory into the container
COPY . /app/

# Set the command to run the Flask application
CMD ["python", "app.py"]
