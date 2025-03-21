import psycopg2

class MenuManager:
    DATABASE_CONFIG = {
        'dbname': 'DAY4',
        'user': 'postgres',
        'password': 'M53073607',
        'host': 'localhost',
        'port': '5432'
    }

    @classmethod
    def get_connection(cls):
        return psycopg2.connect(**cls.DATABASE_CONFIG)

    @classmethod
    def get_by_name(cls, item_name):
        connection = cls.get_connection()
        cursor = connection.cursor()
        query = "SELECT * FROM Menu_Items WHERE item_name = %s;"
        cursor.execute(query, (item_name,))
        result = cursor.fetchone()
        cursor.close()
        connection.close()
        if result:
            return {"item_id": result[0], "item_name": result[1], "item_price": result[2]}
        return None

    @classmethod
    def all_items(cls):
        connection = cls.get_connection()
        cursor = connection.cursor()
        query = "SELECT * FROM Menu_Items;"
        cursor.execute(query)
        results = cursor.fetchall()
        cursor.close()
        connection.close()
        return [{"item_id": row[0], "item_name": row[1], "item_price": row[2]} for row in results]
