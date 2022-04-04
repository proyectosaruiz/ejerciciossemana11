# Ejercicio subconsulta

Selecciona el nombre y la edad del/los usuario/s más mayores.

SELECT nombre FROM usuarios ORDER BY edad;

SELECT nombre , COUNT(DISTINCT id_usuario) DES "usuarios" FROM direcciones GROUP BY edad;
