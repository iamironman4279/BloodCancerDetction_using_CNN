# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install necessary dependencies
RUN apt-get update && apt-get install -y libgl1-mesa-glx && \
    pip install --no-cache-dir flask pymongo opencv-python-headless tensorflow==2.15.0

# Expose port 5000 to the outside world
EXPOSE 5000

# Define environment variable
ENV FLASK_APP=app.py

# Run the Flask application
CMD ["flask", "run", "--host=0.0.0.0"]
