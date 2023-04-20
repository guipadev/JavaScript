/*
Buclear un triangulo
Escribe un bucle que haga siete llamadas a console.log para mostrar el siguiente
triangulo:
#
##
###
####
#####
######
#######
*/

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);