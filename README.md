
<p align ="center">
  <img src="https://github.com/santiagocarranz-a/appWheater/blob/master/apcli.png"/>
</p>

<h1 align="center">Wheater SC App</h1>
<br>

**Demo:** [Wheater SC App](https://santiagocarranz-a.github.io/)

## Descripción

**Wheater SC app** es una aplicación sencilla que permite consultar el clima actual en tu ubicación a través de la geolocalización. La aplicación obtiene datos climáticos en tiempo real mediante la API de [OpenWeatherMap](https://openweathermap.org/).

## Secciones

1. [¿Cómo funciona?](#cómo-funciona)
2. [Tareas Realizadas](#tareas-realizadas)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)

## ¿Cómo funciona?

1. **Solicitud de ubicación:** Al abrir la aplicación, se solicita al usuario que permita el acceso a su ubicación.
2. **Obtención de coordenadas:** Se obtienen las coordenadas geográficas (latitud y longitud) del usuario utilizando `navigator.geolocation`.
3. **Consumo de API:** Con las coordenadas obtenidas, se realiza una solicitud a la API de OpenWeatherMap para obtener los datos climáticos.
4. **Manipulación de datos:** Los datos recibidos de la API se procesan para extraer y transformar la información relevante.
5. **Visualización en el DOM:** Los datos climáticos procesados se muestran en la interfaz de usuario de manera clara y visualmente atractiva.

## Tareas Realizadas

- **Consumo de API:** Obtención de datos desde el servidor externo de OpenWeatherMap.
- **Manipulación de JSON:** Extracción y transformación de datos para su uso en la aplicación.
- **Geolocalización:** Obtención de las coordenadas geográficas del usuario utilizando `navigator.geolocation`.
- **Manipulación de fechas y horas:** Uso del objeto `Date` para mostrar la fecha y hora actual en la interfaz.
- **Diseño dinámico:** Configuración de íconos y fondos dinámicos basados en los datos climáticos (día/noche, estado del clima).
- **Inserción en el DOM:** Inyección de contenido dinámico en la página utilizando JavaScript.
- **Responsive design:** Adaptación de la interfaz para diferentes dispositivos utilizando unidades de medida `em` y la etiqueta `@meta`.

## Tecnologías Utilizadas

- **HTML**
- **CSS**
- **JavaScript**

Esta aplicación ha sido desarrollada utilizando tecnologías puras, sin el uso de frameworks.
