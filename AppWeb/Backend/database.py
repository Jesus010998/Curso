import os

import psycopg
from psycopg.rows import dict_row
from dotenv import load_dotenv


# Cargar las variables del archivo .env
load_dotenv()


# Variables de conexión
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")


def get_connection():
    """
    Crea y devuelve una conexión a PostgreSQL.
    """

    connection = psycopg.connect(
        host=DB_HOST,
        port=DB_PORT,
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        row_factory=dict_row,
        connect_timeout=5
    )

    return connection