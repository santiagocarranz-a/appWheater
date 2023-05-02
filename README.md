# <p align ="center">Wheater SC app</p>
<p align ="center">
  <img src="https://github.com/santiagocarranz-a/santiagocarranz-a.github.io/blob/6182f24b13fd441aed308f2c530448862ea37d9b/apcli.png" alt="appClima-img"/>
  <br>
</p>

Demo:
https://santiagocarranz-a.github.io/

Wheater SC app es un proyecto particular donde se podrá consultar el clima por medio de Geolocalización.
Ésta app fue creada gracias al aporte de datos climaticos de la API "https://openweathermap.org/".


## Secciones:
```
1. Como funciona
2. Tareas Realizadas
```

### 1° ¿Cómo funciona?
```
a. Solicitud al usuario para que brinde acceso a su ubicación
b. Conservación de las coordenadas geográficas (latitud y longitud)
c. Consumo de la API con los parametros que se obtuvieron previamente del usuario (coordenadas geográficas)
d. Manipulación de los datos que se ha recibido de la API 
e. Diseño para su visualización en el DOM
```

### 2° Tareas Realizadas

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




