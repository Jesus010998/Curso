from fastapi import FastAPI, HTTPException
from database import get_connection


app = FastAPI(
    title="Clase CSR",
    description="Primera conexion entre FASTAPI y Postgres",
    version="1.0"
)

@app.get("/db-test")
def probar_base_datos():
    try:
        with get_connection() as connection:
            with connection.cursor() as cursor:
                # Se corrige 'Curso' a 'cursor' y la sintaxis de la consulta SQL
                cursor.execute("""
                    SELECT current_database() AS base_datos,
                    current_user AS usuario,
                    NOW() AS fecha_hora;
                """)
                resultado = cursor.fetchone() 
        return {
            "conexion": "Correcta",
            "informacion": resultado
        }
    except Exception as error:
        # Se corrige 'Status_Code' por 'status_code'
        raise HTTPException(
            status_code=500,
            detail=f"No fue posible conectarse con postgres: {error}"
        )

@app.get("/estudiantes")
def obtener_estudiantes():
    try:
        with get_connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute("""
                    SELECT 
                    id,
                    nombre,
                    correo,
                    creado_en
                    FROM estudiantes
                    ORDER BY id;
                """)
                # Se trae el resultado dentro del bloque del cursor para evitar que se cierre antes
                estudiantes = cursor.fetchall()
        return estudiantes
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=f"Error al consultar estudiantes: {error}"
        )



@app.get("/maestros")
def obtener_maestros():
    try:
        with get_connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute("""
                    SELECT id, nombre, correo, turno 
                    FROM Maestros 
                    ORDER BY id;
                """)
                maestros = cursor.fetchall()
        return maestros
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=f"Error al consultar maestros: {error}"
        )

@app.get("/personal")
def obtener_personal():
    try:
        with get_connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute("""
                    SELECT id, nombre, area, turno 
                    FROM Personal 
                    ORDER BY id;
                """)
                personal = cursor.fetchall()
        return personal
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=f"Error al consultar personal: {error}"
        )