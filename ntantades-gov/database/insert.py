from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Στοιχεία σύνδεσης με τη βάση δεδομένων
db_config = {
    'host': 'localhost',
    'user': 'root',  # Βάλε το username της βάσης σου
    'password': 'ntantades',  # Βάλε το password της βάσης σου
    'database': 'users_db'
}


def get_db_connection():
    return mysql.connector.connect(**db_config)


@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        query = """
            INSERT INTO users (first_name, last_name, birth_date, amka, afm, region, municipality, street, street_number)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        values = (
            data['first_name'], data['last_name'], data['birth_date'],
            data['amka'], data['afm'], data['region'],
            data['municipality'], data['street'], data['street_number']
        )
        cursor.execute(query, values)
        conn.commit()
        return jsonify({'message': 'User created successfully!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    finally:
        cursor.close()
        conn.close()


@app.route('/users', methods=['GET'])
def get_users():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()
        return jsonify(users), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    finally:
        cursor.close()
        conn.close()


if __name__ == '__main__':
    app.run(debug=True)
