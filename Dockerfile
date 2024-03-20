# Use the official TensorFlow image as the base image
FROM tensorflow/tensorflow:2.15.0

# Set the working directory within the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install required Python packages
RUN pip install Flask opencv-python-headless pymongo && \
    pip uninstall -y blinker  # Uninstall blinker to avoid conflicts

# Expose the port on which your Flask app will run
EXPOSE 5000

# Command to run the Flask application
CMD ["python", "app.py"]
