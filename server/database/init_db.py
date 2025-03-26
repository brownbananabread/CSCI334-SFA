import psycopg2
import os

# Get environment variables from inside docker
POSTGRES_USER = os.getenv('POSTGRES_USER')
POSTGRES_PASSWORD = os.getenv('POSTGRES_PASSWORD')
POSTGRES_DB = os.getenv('POSTGRES_DB')
POSTGRES_HOST = os.getenv('POSTGRES_HOST', 'localhost')
POSTGRES_PORT = os.getenv('POSTGRES_PORT', '5432')

try:
    with psycopg2.connect(
        dbname=POSTGRES_DB,
        user=POSTGRES_USER,
        password=POSTGRES_PASSWORD,
        host=POSTGRES_HOST,
        port=POSTGRES_PORT
    ) as conn:
        
        # Run schema.sql inside docker postgres database
        with conn.cursor() as cur:
            with open('schema.sql', 'r') as f:
                schema = f.read()

            cur.execute(schema)
            conn.commit()

            print("Database schema loaded successfully!")

except Exception as e:
    print(f"Error: {e}")
