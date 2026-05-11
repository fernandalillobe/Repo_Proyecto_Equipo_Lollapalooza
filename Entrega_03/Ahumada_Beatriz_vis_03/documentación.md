## Historial de procesos y decisiones

Para efectos de este trabajo, se tuvo que completar en su totalidad la base de datos 1, creada desde cero en un Excel que contempla cada columna con su filtro y respectivo titular: edicion lolla, artista, genero musical 01, genero musical 02, genero musical 03, integrantes, nacionalidad, headliner, escenario y cantidad de veces que se presentó el artista en el festival hasta la fecha. La información se obtuvo de fuentes como Wikipedia, sitios web de noticias y sitios web dedicados a la música.

Mantuvimos la decisión de dividirnos la cantidad de ediciones, donde yo me preocupe de hacer la base de datos del año 2016 al 2019.

Para hacer la visualización utilicé la plataforma Google Colab, donde seguí los pasos que se presentaron en clases para la elaboración del gráfico en Altair. Hice 5 puntos de la clase de Pandas para visualizar esta entrega, las que dividí en "Abrir la base", "Tamaño y estructura de la base", "Columnas individuales", "Contar categorías", "Ordenar datos" y "Gráfico con Altair". 

Cabe destacar que para hacer los códigos en Google Colab, tuve que recurrir a la inteligencia artificial Claude para resolver dudas puntuales. Por ejemplo para entender cómo usar "melt" para combinar las tres columnas de géneros musicales en una sola y que el gráfico mostrara esa diversidad, cómo usar "groupby" para contar géneros por edición y también para entender por qué me salía "error" cuando ejecutaba ciertos códigos. Además, me ayudó a tomar la decisión de qué tipo de gráfico construir (barras) y a exportarlo en HTML y JPG porque no entendía cómo hacerlo. Para ello me dió códigos que copié y pegué. 

## Acerca de la Base de datos

Hacer una base de datos desde cero sin duda que es un trabajo arduo y exhaustivo, puesto que había que buscar la información manualmente y colocarla en cada una de las cientas de casillas que contempla nuestra base. Una vez armada, se creó una tabla dinámica que permitió poder verificar de forma más rápida lo que andabamos buscando para la creación de nuestros gráficos. 

Se eligió esta base de datos puesto que es con la única que contamos hasta la fecha y porque la profesora nos autorizó a hacer las gráficas en base a esta. 

Como es la base de datos principal, no fue dificil definir los parámetros para cada gráfico, ya que contempla una gran diversidad de datos y así nuestras gráficas pueden contemplar también la diversidad de variables que se toman en cuenta para el proyecto. Sin embargo, para la próxima entrega podremos entregar visualizacione más  guiadas al tema que nos convoca: los shows performáticos.

## Preguntas que se pueden responder con la visualización de datos

Las preguntas que se pueden responder en base al gráfico que construí son: 

1. ¿Cuál es el género musical predominante por edición?
2. ¿Cuántas veces se repite la música electrónica en la edición de 2018?
3. ¿Cuántas veces se repite la música pop en la edición de 2026?