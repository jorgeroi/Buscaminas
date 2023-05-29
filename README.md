# Buscaminas

## 1. Introducción

En este informe se mostrar ́an los avances realizados en la propuesta para
crear el videojuego buscaminas desarrollados en la libreria de Javascript P5 y
aplicando los temas vistos en clase relaciononados con la API p5.quadrille a las
luces de la programaci ́on orientada a objetos.

## 2. Detalles Clave de la implementación

Para empezar, el juego utiliza 4 cuadr ́ıculas; una que contiene las bombas,
otra que contiene los n ́umeros, una que cubre todo el tablero y una para adi-
cionar las banderas, todas las cuadr ́ıculas est ́an relacionadas entre ellas y las
afectaciones en una tiene consecuencias en otras. El c ́odigo se basa principal-
mente en la aplicaci ́on de los m ́etodos relacionados con cuadr ́ıculas (fill, isEmpty,
read, clear, etc...) y la aplicaci ́on de funciones existentes como draw o setup y
funciones propias como reiniciar2  ̧celdaNula”.

## 3. Resultados

Para el buscaminas logramos desarrollar un c ́odigo funcional donde el usua-
rio puede jugar como lo hace usualmente siguiendo las reglas del buscaminas
tradicional. Para empezar a jugar se debe hacer click en el tablero y en caso de
poner una bandera en el lugar donde se cree que hay una mina se debe activar el
ckeckbox que se encuentra en la parte inferior izquierda del tablero, el n ́umero
que aparece en cada celda tras la inicializaci ́on representa la cantidad de minas
que hay alrededor de esa celda (en caso de que no haya minas alrededor de la
celda, esta se mostrar ́a en un color gris oscuro) . Si se hace click en una mina el
juego lanza una se ̃nal de ”perdiste2 se reinicia automaticamente

## 4. Conclusiones

A partir de la aplicaci ́on de los temas vistos en la clase y la investigaci ́on
adicional por parte del grupo conluimos que:
En el  ́ambito personal: Usuando las herramientas vistas y usando nuestra
capacidad de creatividad y abstracci ́on, podemos llegar a implementar el
conocimiento adquirido de formas muy interesantes y  ́utiles.
En el contexto de nuestra carrera: Dado que el uso de herramientas in-
form ́aticas es cada vez m ́as extendido en el contexto empresarial, se hace
obligatorio para nosotros como futuros ingenieros industriales darle la im-
portancia que merecen a los conceptos fundamentales de la programaci ́on
orientada a objetos que es uno de los paradigmas m ́as importantes en la
actualidad; y en la ejecuci ́on de este proyecto logramos obtener conoci-
miento tanto conceptual como pr ́actico de dichos conceptos
