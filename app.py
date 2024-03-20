from flask import Flask, render_template, request, redirect, url_for
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import cv2
import io
import base64
from pymongo import MongoClient

app = Flask(__name__)

# Load the trained model
model = load_model('weights.hdf5')
model.compile(loss='binary_crossentropy',
              optimizer='rmsprop',
              metrics=['accuracy'])

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['userfeedback']
feedback_collection = db['feedback']

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        return redirect(url_for('upload'))
    return render_template('index.html')

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the uploaded image file
        img_file = request.files['file']
        if img_file:
            # Read the image file
            img_bytes = img_file.stream.read()
            # Convert bytes to numpy array
            img_np = np.frombuffer(img_bytes, np.uint8)
            # Decode numpy array to image
            img = cv2.imdecode(img_np, cv2.IMREAD_COLOR)
            # Resize the image to match the input shape expected by the model
            img_resized = cv2.resize(img, (150, 150))
            # Expand the dimensions to match the input shape expected by the model
            x = np.expand_dims(img_resized, axis=0)
            # Normalize the image data
            x = x / 255.0
            # Predict probabilities for each class
            probabilities = model.predict(x)
            # Find the index of the class with the highest probability
            predicted_class_index = np.argmax(probabilities)
            # Determine the class label
            if predicted_class_index == 1:
                prediction = "Cancer"
                # Swap red and violet colors
                img[:,:,0], img[:,:,2] = img[:,:,2], img[:,:,0].copy()
            else:
                prediction = "Normal"
                img[:,:,0], img[:,:,2] = img[:,:,2], img[:,:,0].copy()
                
            # Convert the swapped image to base64 format for HTML rendering
            _, img_encoded = cv2.imencode('.png', img)
            swapped_img_base64 = base64.b64encode(img_encoded).decode()
            # Render the result template with the prediction and swapped image
            return render_template('result.html', prediction=prediction, swapped_img_base64=swapped_img_base64)
    return render_template('upload.html')

@app.route('/submit', methods=['POST'])
def submit_feedback():
    if request.method == 'POST':
        feedback = request.form.get('feedback')
        if feedback:
            feedback_collection.insert_one({'feedback': feedback})
            # Show alert for successful submission
            return '''
                <script>
                    alert('Thank you for submitting your feedback!');
                    window.location.href = '/';
                </script>
            '''
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
