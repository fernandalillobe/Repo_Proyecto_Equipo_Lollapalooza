# Ficha Técnica y diccionario de datos

## Fuente de los datos
En el proceso de la construcción de esta base de datos, las fuentes de información pública que se utilizaron fueron la enciclopedia Wikipedia para recolectar y comletar información sobre los artistas, páginas web de noticias como Rock&Pop, Radio Futuro, AS Chile, entre otros,   respecto al Lollapalooza de cada edición para rectificar información y corroborar si es que sucedía algún reemplazo de artista o escenario y otros sitios web dedicados a la música como SunderBeats y Last.fm.  

## Metodología
Al ser una base construida desde cero por el grupo, se tuvo que crear cada columna con su respectivo titular y filtro, y se empezaron a rellenar las filas a partir de la recopilación manual de los artistas que participaron en cada edición del festival. Para ello se identificaron y clasificaron todos los artistas por año, por variables como el género musical, nacionalidad, integrantes, si es headliner, escenario donde se presentó y cantidad de veces que han estado en el festival en el país.

## Alcance de datos

El análisis se hizo en base a todas las ediciones del Lollapalooza Chile que se alcanzaron a recopilar a la fecha, desde el año 2011 hasta el 2026, reuniendo información respecto a cada artista que formaba parte de los lineups, su género musical, nacionalidad, escenarios de presentación y cantidad de presentaciones en el festival hasta la fecha de edición.

## Características de los datos

Los tipos de datos que se recolectaron los podemos clasificar en base a su naturaleza cualitativa (artista, el género musical, la nacionalidad y escenario) y cuantitativa (año de edición,número de integrantes y número de presentaciones). Además, se obtuvieron inicialmente datos en bruto de Wikipedia y otros sitios web para luego procesarlos, de forma de organizarlos, simplificarlos y clasificarlos en sus respectivas categorías, donde fueron estructurados y organizados en un Excel colaborativo donde cada una escribió su parte.

## Diccionario de datos

| Variable | Descripción | Tipo de dato | Valores posibles |
|----------|-------------|--------------|------------------|
| Año de edición | Año en que se realiza el festival | Cuantitativo | 2011 a 2026 |
| Artista | Nombre de la banda o cantante | Cualitativo | Diversidad de nombres |
| Género musical | Estilo de música de la banda o cantante | Cualitativo | Rock, pop, R&B, electrónica, etc |
| Nacionalidad | Nación a la que pertenece | Cualitativo | Estadounidense, Neerlandesa, Argentina, Chilena, etc |
| Escenario | Nombre del escenario en que se presentó | Cualitativo | Diversidad de escenarios |
| Cantidad de presentaciones | Veces que se presentó en el festival hasta la fecha | Cuantitativo | 1, 2, 3, 4, etc |
| Integrantes | Cantidad de integrantes de la banda | Cuantitativo | 1, 2, 3, 4, etc |