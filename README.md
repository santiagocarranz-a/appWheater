# APP Wheater SC - Create By Santiago Carranza
-August 2022- <br><br>
Te agradezco el interes de leer este archivo informativo.

### Categorias:
1. ***Sobre la App***
2. ***Como funciona***
3. ***Tareas Realizadas***


**1° Sobre la App**

APP Wheater SC es un projecto particular donde se podrá consultar el clima via Geolocalización.

Ésta app fue creada gracias al aporte de datos climaticos de la API "https://openweathermap.org/".


**2° Como funciona**

1. Solicitud al usuario para que brinde acceso a su ubicación
2. Conservación de las coordenadas geográficas (latitud y longitud)
3. Consumo de la API con los parametros que se obtuvieron previamente del usuario (coordenadas geográficas)
4. Manipulación de los datos que se ha recibido de la API 
5. Diseño para su visualización en el DOM


**3° Tareas Realizadas**

* Obtension de datos de servidor externo (Consumo de API "https://openweathermap.org/").

* Manipulación de un objeto Json;<br>
*Extracción de datos.* <br>
*Transformación de datos en otro formato para su posible uso.*

* Obtension de coordenadas geográficas del usuario (latitud y longitud) por medio del llamado a navigator.geolocation y a travez de él acceder a la Api de geolocalización.

* Manipulación del objeto Date para obtener y pintar en el navegador datos como:<br>
*Fecha (año, mes, dia).* <br>
*Horario (hora, minutos, segundos).*

* Configuración de iconos y background dinamicos en función de los datos que se vayan obteniendo de la API:<br>
*Dia/noche* <br>
*Estado climatico (despejado, nublado, lluvioso, nieve, tormenta).*

* Inserción de contenido en el DOM desde Javacript.

* Configuración de manera responsive design. Utilizando unidades de medidas "em" y @meta







