from flask import Flask, jsonify, request

app = Flask(__name__)

# A dictionary to hold our JSON data (initially empty)
json_data = {}

@app.route('/get_json')
def get_json():
    data = json_data.copy()
    return jsonify(data)

@app.route('/set_json', methods=['POST'])
def set_json():
    global json_data
    json_data = {}  # Set empty JSON
    return 'JSON data set to empty', 200 

if __name__ == '__main__':
    app.run(debug=True)