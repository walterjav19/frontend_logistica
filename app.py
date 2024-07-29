from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)  # Permitir todas las solicitudes de todos los dominios

def load_orders():
    if os.path.exists('orders.json'):
        with open('orders.json') as f:
            return json.load(f)
    return []

def save_orders(orders):
    with open('orders.json', 'w') as f:
        json.dump(orders, f, indent=4)

@app.route('/orders', methods=['GET'])
def get_orders():
    orders = load_orders()
    return jsonify(orders)

@app.route('/orders', methods=['POST'])
def add_order():
    new_order = request.json
    orders = load_orders()
    orders.append(new_order)
    save_orders(orders)
    return jsonify(new_order), 201

if __name__ == '__main__':
    app.run(debug=True)
