# coRegistros-test

CASO PRÁCTICO
Se tiene como base un cliente que cuenta con una API propia para la recepción de leads en
su servidor, él requiere que los datos del lead sean enviados a su API por medio de un código
jSON el cual ejecutará y generará un resultado. Este envío hacia la API del cliente, requiere
que tengamos una API propia que ejecute todo el proceso, desde la definición de los
parámetros y construcción del código jSON, hasta el envío de este código a la API del cliente.

EJERCICIO
Crear una API con estas características:
· La API recibirá por medio de la URL (Vía GET) las siguientes variables:
- firstname
- lastname
- email
- zipcode
- phone

· Se debe generar un código JSON con los parámetros recibidos
· Se debe añadir un parámetro extra al JSON:
  - storeID: Este valor se consigue de acuerdo a la variable zipcode que se ha
  recibido por medio de GET, para este ejercicio puede usar uno de estos 3
  posibles zipcode y cada uno tiene un ID asignado, el cual debe ir como valor
  del parámetro storeID:
ZIPCODE STORE ID
08456   CO1234
09789   CO5678
04536   ES345


 · Se debe enviar a una URL externa vía POST con el JSON generado dentro del body
enviado, utilizando por ejemplo https://beeceptor.com/
