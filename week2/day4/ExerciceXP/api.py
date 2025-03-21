from flask import Flask, request, jsonify

import psycopg2

app = Flask(__name__)

def get_connection():
    return psycopg2.connect(
        dbname="DAY4",
        user="postgres",
        password="M53073607",
        host="localhost",
        port="5432"
    )

@app.route('/menu', methods=['GET'])
def get_all_items():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Menu_Items")
    rows = cursor.fetchall()
    items = [{'id': row[0], 'name': row[1], 'price': row[2]} for row in rows]
    cursor.close()
    conn.close()
    return jsonify(items)


@app.route('/menu', methods=['POST'])
def add_item():
    data = request.get_json()
    name = data.get('name')
    price = data.get('price')
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (name, price))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Item added successfully!'}), 201


@app.route('/menu/<string:name>', methods=['DELETE'])
def delete_item(name):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM Menu_Items WHERE item_name = %s", (name,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': f'{name} deleted successfully!'})


@app.route('/menu/pasta', methods=['PUT'])
def update_item(old_name):
    data = request.get_json()
    new_name = data.get('name')
    new_price = data.get('price')

    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", (new_name, new_price, old_name))
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'message': f'{old_name} updated successfully to {new_name}'})


if __name__ == '__main__':
    app.run(debug=True)
