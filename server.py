# Import necessary modules
from flask import Flask, request, render_template, redirect, url_for
import json
from flask_cors import CORS

# Create Flask app instance
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS) for handling requests from different origins
CORS(app)

# Define route for the home page ('/')
@app.route('/')
def home():
    # Read user data from a JSON file
    with open("user.json", 'r') as file:
        jObj = json.loads(file.read())
    # Render the 'menu.html' template and pass user image data to it
    return render_template('menu.html', img=jObj["img"])

# Define route for the 'butiker' page ('/butiker')
@app.route('/butiker')
def butiker():
    # Render the 'butiker.html' template
    return render_template('butiker.html')

# Define route for the 'id' page ('/id')
@app.route('/id')
def id():
    # Read user data from a JSON file
    with open("user.json", 'r') as file:
        jObj = json.loads(file.read())
    # Render the 'id.html' template and pass user information to it
    return render_template('id.html', Name=jObj["Firstname"] + " " + jObj["Surname"], SSN=jObj["SSN"], img=jObj["img"])

# Define route for the 'settings' page ('/settings')
@app.route('/settings')
def settings():
    # Render the 'settings.html' template
    return render_template('settings.html')

# Define route to get user profile data ('/get_profile')
@app.route('/get_profile')
def get_profile():
    # Read user data from a JSON file and return it
    with open("user.json", 'r') as file:
        return file.read()

# Define route to update user profile data ('/update_profile') with POST method
@app.route('/update_profile', methods=['POST'])
def update_profile():
    # Retrieve user data from the POST request
    firstname = request.json['Firstname']
    surname = request.json['Surname']
    ssn = request.json['SSN']
    img = request.json['img']
    # Construct user data dictionary
    user_data = {
        "Firstname": firstname,
        "Surname": surname,
        "SSN": ssn,
        "img": img
    }
    # Print updated user data
    print(user_data)
    # Write updated user data to the JSON file
    with open("user.json", 'w') as file:
        json.dump(user_data, file)
    # Redirect to the home page after updating the profile
    return redirect(url_for('/'))

# Main block to run the Flask app
if __name__ == '__main__':
    # Run the app on specified host and port
    app.run(host="0.0.0.0", port=5555) # You can use app.run(debug=True) for debugging mode
