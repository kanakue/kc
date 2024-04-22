const dia_semana = new Date().getDay(); // 0 (domingo) al 6 (sabado)
const numero_mes = new Date().getMonth(); // 0 (enero) al 11
const numero_dia = new Date().getDate(); //1 al 31

var dia // day + numero + elemento
var day; // domingo, lunes, martes, miércoles, jueves, iernes, sábado
var element = ["tierra","fuego","movimiento","viento","agua"]; // 0 (tiankispan), 1 (achto), 2 (okkan), 3 (ikei), 4 (iknawi)
var mestli = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII"];
var shiwitl = "año 49";
var fecha_macro = "... " + shiwitl + " - atado del águila - 5ª era ..."

// dÃ­a semana
if (dia_semana == 0) {day = 'día'}
else if (dia_semana == 1) {day = "día"}
else if (dia_semana == 2) {day = 'día'}
else if (dia_semana == 3) {day = 'día'}
else if (dia_semana == 4) {day = 'día'}
else if (dia_semana == 5) {day = 'día'}
else if (dia_semana == 6) {day = 'día'}

// I
if (numero_mes == 0 && numero_dia == 1) {dia = day + ' 1 ' + element[1];}
else if (numero_mes == 0 && numero_dia == 2) {dia = day + ' 2 ' + element[2] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 3) {dia = day + ' 3 ' + element[3] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 4) {dia = day + ' 4 ' + element[4] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 5) {dia = day + ' 5 ' + element[0] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 6) {dia = day + ' 6 ' + element[1] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 7) {dia = day + ' 7 ' + element[2] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 8) {dia = day + ' 8 ' + element[3] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 9) {dia = day + ' 9 ' + element[4] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 10) {dia = day + ' 10 ' + element[0] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 11) {dia = day + ' 11 ' + element[1] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 12) {dia = day + ' 12 ' + element[2] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 13) {dia = day + ' 13 ' + element[3] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 14) {dia = day + ' 14 ' + element[4] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 15) {dia = day + ' 15 ' + element[0] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 16) {dia = day + ' 16 ' + element[1] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 17) {dia = day + ' 17 ' + element[2] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 18) {dia = day + ' 18 ' + element[3] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 19) {dia = day + ' 19 ' + element[4] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 20) {dia = day + ' 20 ' + element[0] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 21) {dia = day + ' 21 ' + element[1] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 22) {dia = day + ' 22 ' + element[2] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 23) {dia = day + ' 23 ' + element[3] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 24) {dia = day + ' 24 ' + element[4] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 25) {dia = day + ' 25 ' + element[0] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 26) {dia = day + ' 26 ' + element[1] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 27) {dia = day + ' 27 ' + element[2] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 28) {dia = day + ' 28 ' + element[3] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 29) {dia = day + ' 29 ' + element[4] + ' - mes ' + mestli [0];}
else if (numero_mes == 0 && numero_dia == 30) {dia = day + ' 30 ' + element[0] + ' - mes ' + mestli [0];}
// II
else if (numero_mes == 0 && numero_dia == 31) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 1) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 2) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 3) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 4) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 5) {dia = day + ' 6 '+ element[1] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 6) {dia = day + ' 7 '+ element[2] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 7) {dia = day + ' 8 '+ element[3] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 8) {dia = day + ' 9 '+ element[4] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 9) {dia = day + ' 10 '+ element[0] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 10) {dia = day + ' 11 '+ element[1] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 11) {dia = day + ' 12 '+ element[2] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 12) {dia = day + ' 13 '+ element[3] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 13) {dia = day + ' 14 '+ element[4] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 14) {dia = day + ' 15 '+ element[0] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 15) {dia = day + ' 16 '+ element[1] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 16) {dia = day + ' 17 '+ element[2] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 17) {dia = day + ' 18 '+ element[3] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 18) {dia = day + ' 19 '+ element[4] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 19) {dia = day + ' 20 '+ element[0] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 20) {dia = day + ' 21 '+ element[1] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 21) {dia = day + ' 22 '+ element[2] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 22) {dia = day + ' 23 '+ element[3] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 23) {dia = day + ' 24 '+ element[4] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 24) {dia = day + ' 25 '+ element[0] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 25) {dia = day + ' 26 '+ element[1] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 26) {dia = day + ' 27 '+ element[2] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 27) {dia = day + ' 28 '+ element[3] + ' - mes ' + mestli [1];}
else if (numero_mes == 1 && numero_dia == 28) {dia = day + ' 29 '+ element[4] + ' - mes ' + mestli [1];}
else if (numero_mes == 2 && numero_dia == 1) {dia = day + ' 30 '+ element[0] + ' - mes ' + mestli [1];}
// III
else if (numero_mes == 2 && numero_dia == 2) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 3) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 4) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 5) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 6) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 7) {dia = day + ' 6 '+ element[1] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 8) {dia = day + ' 7 '+ element[2] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 9) {dia = day + ' 8 '+ element[3] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 10) {dia = day + ' 9 '+ element[4] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 11) {dia = day + ' 10 '+ element[0] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 12) {dia = day + ' 11 '+ element[1] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 13) {dia = day + ' 12 '+ element[2] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 14) {dia = day + ' 13 '+ element[3] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 15) {dia = day + ' 14 '+ element[4] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 16) {dia = day + ' 15 '+ element[0] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 17) {dia = day + ' 16 '+ element[1] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 18) {dia = day + ' 17 '+ element[2] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 19) {dia = day + ' 18 '+ element[3] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 20) {dia = day + ' 19 '+ element[4] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 21) {dia = day + ' 20 '+ element[0] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 22) {dia = day + ' 21 '+ element[1] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 23) {dia = day + ' 22 '+ element[2] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 24) {dia = day + ' 23 '+ element[3] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 25) {dia = day + ' 24 '+ element[4] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 26) {dia = day + ' 25 '+ element[0] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 27) {dia = day + ' 26 '+ element[1] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 28) {dia = day + ' 27 '+ element[2] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 29) {dia = day + ' 28 '+ element[3] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 30) {dia = day + ' 29 '+ element[4] + ' - mes ' + mestli [2];}
else if (numero_mes == 2 && numero_dia == 31) {dia = day + ' 30 '+ element[0] + ' - mes ' + mestli [2];}
// IV
else if (numero_mes == 3 && numero_dia == 1) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 2) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 3) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 4) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 5) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 6) {dia = day + ' 6 '+ element[1] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 7) {dia = day + ' 7 '+ element[2] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 8) {dia = day + ' 8 '+ element[3] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 9) {dia = day + ' 9 '+ element[4] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 10) {dia = day + ' 10 '+ element[0] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 11) {dia = day + ' 11 '+ element[1] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 12) {dia = day + ' 12 '+ element[2] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 13) {dia = day + ' 13 '+ element[3] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 14) {dia = day + ' 14 '+ element[4] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 15) {dia = day + ' 15 '+ element[0] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 16) {dia = day + ' 16 '+ element[1] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 17) {dia = day + ' 17 '+ element[2] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 18) {dia = day + ' 18 '+ element[3] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 19) {dia = day + ' 19 '+ element[4] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 20) {dia = day + ' 20 '+ element[0] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 21) {dia = day + ' 21 '+ element[1] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 22) {dia = day + ' 22 '+ element[2] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 23) {dia = day + ' 23 '+ element[3] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 24) {dia = day + ' 24 '+ element[4] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 25) {dia = day + ' 25 '+ element[0] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 26) {dia = day + ' 26 '+ element[1] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 27) {dia = day + ' 27 '+ element[2] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 28) {dia = day + ' 28 '+ element[3] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 29) {dia = day + ' 29 '+ element[4] + ' - mes ' + mestli [3];}
else if (numero_mes == 3 && numero_dia == 30) {dia = day + ' 30 '+ element[0] + ' - mes ' + mestli [3];}
// V
else if (numero_mes == 4 && numero_dia == 1) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 2) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 3) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 4) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 5) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 6) {dia = day + ' 6 '+ element[1] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 7) {dia = day + ' 7 '+ element[2] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 8) {dia = day + ' 8 '+ element[3] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 9) {dia = day + ' 9 '+ element[4] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 10) {dia = day + ' 10 '+ element[0] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 11) {dia = day + ' 11 '+ element[1] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 12) {dia = day + ' 12 '+ element[2] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 13) {dia = day + ' 13 '+ element[3] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 14) {dia = day + ' 14 '+ element[4] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 15) {dia = day + ' 15 '+ element[0] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 16) {dia = day + ' 16 '+ element[1] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 17) {dia = day + ' 17 '+ element[2] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 18) {dia = day + ' 18 '+ element[3] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 19) {dia = day + ' 19 '+ element[4] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 20) {dia = day + ' 20 '+ element[0] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 21) {dia = day + ' 21 '+ element[1] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 22) {dia = day + ' 22 '+ element[2] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 23) {dia = day + ' 23 '+ element[3] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 24) {dia = day + ' 24 '+ element[4] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 25) {dia = day + ' 25 '+ element[0] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 26) {dia = day + ' 26 '+ element[1] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 27) {dia = day + ' 27 '+ element[2] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 28) {dia = day + ' 28 '+ element[3] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 29) {dia = day + ' 29 '+ element[4] + ' - mes ' + mestli [4];}
else if (numero_mes == 4 && numero_dia == 30) {dia = day + ' 30 '+ element[0] + ' - mes ' + mestli [4];}
// VI
else if (numero_mes == 4 && numero_dia == 31) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 1) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 2) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 3) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 4) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 5) {dia = day + ' 6 '+ element[1] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 6) {dia = day + ' 7 '+ element[2] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 7) {dia = day + ' 8 '+ element[3] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 8) {dia = day + ' 9 '+ element[4] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 9) {dia = day + ' 10 '+ element[0] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 10) {dia = day + ' 11 '+ element[1] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 11) {dia = day + ' 12 '+ element[2] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 12) {dia = day + ' 13 '+ element[3] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 13) {dia = day + ' 14 '+ element[4] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 14) {dia = day + ' 15 '+ element[0] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 15) {dia = day + ' 16 '+ element[1] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 16) {dia = day + ' 17 '+ element[2] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 17) {dia = day + ' 18 '+ element[3] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 18) {dia = day + ' 19 '+ element[4] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 19) {dia = day + ' 20 '+ element[0] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 20) {dia = day + ' 21 '+ element[1] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 21) {dia = day + ' 22 '+ element[2] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 22) {dia = day + ' 23 '+ element[3] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 23) {dia = day + ' 24 '+ element[4] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 24) {dia = day + ' 25 '+ element[0] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 25) {dia = day + ' 26 '+ element[1] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 26) {dia = day + ' 27 '+ element[2] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 27) {dia = day + ' 28 '+ element[3] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 28) {dia = day + ' 29 '+ element[4] + ' - mes ' + mestli [5];}
else if (numero_mes == 5 && numero_dia == 29) {dia = day + ' 30 '+ element[0] + ' - mes ' + mestli [5];}
// VII
else if (numero_mes == 5 && numero_dia == 30) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 1) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 2) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 3) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 4) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 5) {dia = day + ' 6 '+ element[1] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 6) {dia = day + ' 7 '+ element[2] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 7) {dia = day + ' 8 '+ element[3] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 8) {dia = day + ' 9 '+ element[4] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 9) {dia = day + ' 10 '+ element[0] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 10) {dia = day + ' 11 '+ element[1] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 11) {dia = day + ' 12 '+ element[2] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 12) {dia = day + ' 13 '+ element[3] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 13) {dia = day + ' 14 '+ element[4] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 14) {dia = day + ' 15 '+ element[0] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 15) {dia = day + ' 16 '+ element[1] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 16) {dia = day + ' 17 '+ element[2] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 17) {dia = day + ' 18 '+ element[3] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 18) {dia = day + ' 19 '+ element[4] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 19) {dia = day + ' 20 '+ element[0] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 20) {dia = day + ' 21 '+ element[1] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 21) {dia = day + ' 22 '+ element[2] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 22) {dia = day + ' 23 '+ element[3] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 23) {dia = day + ' 24 '+ element[4] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 24) {dia = day + ' 25 '+ element[0] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 25) {dia = day + ' 26 '+ element[1] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 26) {dia = day + ' 27 '+ element[2] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 27) {dia = day + ' 28 '+ element[3] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 28) {dia = day + ' 29 '+ element[4] + ' - mes ' + mestli [6];}
else if (numero_mes == 6 && numero_dia == 29) {dia = day + ' 30 '+ element[0] + ' - mes ' + mestli [6];}
// VIII
else if (numero_mes == 6 && numero_dia == 30) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [7];}
else if (numero_mes == 6 && numero_dia == 31) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 1) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 2) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 3) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 4) {dia = day + ' 6 '+ element[1] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 5) {dia = day + ' 7 '+ element[2] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 6) {dia = day + ' 8 '+ element[3] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 7) {dia = day + ' 9 '+ element[4] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 8) {dia = day + ' 10 '+ element[0] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 9) {dia = day + ' 11 '+ element[1] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 10) {dia = day + ' 12 '+ element[2] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 11) {dia = day + ' 13 '+ element[3] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 12) {dia = day + ' 14 '+ element[4] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 13) {dia = day + ' 15 '+ element[0] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 14) {dia = day + ' 16 '+ element[1] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 15) {dia = day + ' 17 '+ element[2] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 16) {dia = day + ' 18 '+ element[3] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 17) {dia = day + ' 19 '+ element[4] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 18) {dia = day + ' 20 '+ element[0] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 19) {dia = day + ' 21 '+ element[1] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 20) {dia = day + ' 22 '+ element[2] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 21) {dia = day + ' 23 '+ element[3] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 22) {dia = day + ' 24 '+ element[4] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 23) {dia = day + ' 25 '+ element[0] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 24) {dia = day + ' 26 '+ element[1] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 25) {dia = day + ' 27 '+ element[2] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 26) {dia = day + ' 28 '+ element[3] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 27) {dia = day + ' 29 '+ element[4] + ' - mes ' + mestli [7];}
else if (numero_mes == 7 && numero_dia == 28) {dia = day + ' 30 '+ element[0] + ' - mes ' + mestli [7];}
// IX
else if (numero_mes == 7 && numero_dia == 29) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [8];}
else if (numero_mes == 7 && numero_dia == 30) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [8];}
else if (numero_mes == 7 && numero_dia == 31) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 1) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 2) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 3) {dia = day + ' 6 '+ element[1] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 4) {dia = day + ' 7 '+ element[2] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 5) {dia = day + ' 8 '+ element[3] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 6) {dia = day + ' 9 '+ element[4] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 7) {dia = day + ' 10 '+ element[0] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 8) {dia = day + ' 11 '+ element[1] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 9) {dia = day + ' 12 '+ element[2] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 10) {dia = day + ' 13 '+ element[3] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 11) {dia = day + ' 14 '+ element[4] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 12) {dia = day + ' 15 '+ element[0] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 13) {dia = day + ' 16 '+ element[1] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 14) {dia = day + ' 17 '+ element[2] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 15) {dia = day + ' 18 '+ element[3] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 16) {dia = day + ' 19 '+ element[4] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 17) {dia = day + ' 20 '+ element[0] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 18) {dia = day + ' 21 '+ element[1] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 19) {dia = day + ' 22 '+ element[2] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 20) {dia = day + ' 23 '+ element[3] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 21) {dia = day + ' 24 '+ element[4] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 22) {dia = day + ' 25 '+ element[0] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 23) {dia = day + ' 26 '+ element[1] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 24) {dia = day + ' 27 '+ element[2] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 25) {dia = day + ' 28 '+ element[3] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 26) {dia = day + ' 29 '+ element[4] + ' - mes ' + mestli [8];}
else if (numero_mes == 8 && numero_dia == 27) {dia = day + ' 30 '+ element[0] + ' - mes ' + mestli [8];}
// X
else if (numero_mes == 8 && numero_dia == 28) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [9];}
else if (numero_mes == 8 && numero_dia == 29) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [9];}
else if (numero_mes == 8 && numero_dia == 30) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 1) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 2) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 3) {dia = day + ' 6 '+ element[1] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 4) {dia = day + ' 7 '+ element[2] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 5) {dia = day + ' 8 '+ element[3] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 6) {dia = day + ' 9 '+ element[4] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 7) {dia = day + ' 10 '+ element[0] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 8) {dia = day + ' 11 '+ element[1] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 9) {dia = day + ' 12 '+ element[2] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 10) {dia = day + ' 13 '+ element[3] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 11) {dia = day + ' 14 '+ element[4] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 12) {dia = day + ' 15 '+ element[0] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 13) {dia = day + ' 16 '+ element[1] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 14) {dia = day + ' 17 '+ element[2] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 15) {dia = day + ' 18 '+ element[3] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 16) {dia = day + ' 19 '+ element[4] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 17) {dia = day + ' 20 '+ element[0] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 18) {dia = day + ' 21 '+ element[1] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 19) {dia = day + ' 22 '+ element[2] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 20) {dia = day + ' 23 '+ element[3] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 21) {dia = day + ' 24 '+ element[4] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 22) {dia = day + ' 25 '+ element[0] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 23) {dia = day + ' 26 '+ element[1] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 24) {dia = day + ' 27 '+ element[2] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 25) {dia = day + ' 28 '+ element[3] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 26) {dia = day + ' 29 '+ element[4] + ' - mes ' + mestli [9];}
else if (numero_mes == 9 && numero_dia == 27) {dia = day + ' 30 '+ element[0] + ' - mes ' + mestli [9];}
// XI
else if (numero_mes == 9 && numero_dia == 28) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [10];}
else if (numero_mes == 9 && numero_dia == 29) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [10];}
else if (numero_mes == 9 && numero_dia == 30) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [10];}
else if (numero_mes == 9 && numero_dia == 31) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 1) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 2) {dia = day + ' 6 '+ element[1] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 3) {dia = day + ' 7 '+ element[2] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 4) {dia = day + ' 8 '+ element[3] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 5) {dia = day + ' 9 '+ element[4] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 6) {dia = day + ' 10 '+ element[0] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 7) {dia = day + ' 11 '+ element[1] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 8) {dia = day + ' 12 '+ element[2] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 9) {dia = day + ' 13 '+ element[3] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 10) {dia = day + ' 14 '+ element[4] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 11) {dia = day + ' 15 '+ element[0] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 12) {dia = day + ' 16 '+ element[1] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 13) {dia = day + ' 17 '+ element[2] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 14) {dia = day + ' 18 '+ element[3] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 15) {dia = day + ' 19 '+ element[4] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 16) {dia = day + ' 20 '+ element[0] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 17) {dia = day + ' 21 '+ element[1] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 18) {dia = day + ' 22 '+ element[2] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 19) {dia = day + ' 23 '+ element[3] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 20) {dia = day + ' 24 '+ element[4] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 21) {dia = day + ' 25 '+ element[0] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 22) {dia = day + ' 26 '+ element[1] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 23) {dia = day + ' 27 '+ element[2] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 24) {dia = day + ' 28 '+ element[3] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 25) {dia = day + ' 29 '+ element[4] + ' - mes ' + mestli [10];}
else if (numero_mes == 10 && numero_dia == 26) {dia = day + ' 30 '+ element[0] + ' - mes ' + mestli [10];}
// XII
else if (numero_mes == 10 && numero_dia == 27) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [11];}
else if (numero_mes == 10 && numero_dia == 28) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [11];}
else if (numero_mes == 10 && numero_dia == 29) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [11];}
else if (numero_mes == 10 && numero_dia == 30) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 1) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 2) {dia = day + ' 6 '+ element[1] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 3) {dia = day + ' 7 '+ element[2] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 4) {dia = day + ' 8 '+ element[3] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 5) {dia = day + ' 9 '+ element[4] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 6) {dia = day + ' 10 '+ element[0] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 7) {dia = day + ' 11 '+ element[1] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 8) {dia = day + ' 12 '+ element[2] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 9) {dia = day + ' 13 '+ element[3] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 10) {dia = day + ' 14 '+ element[4] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 11) {dia = day + ' 15 '+ element[0] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 12) {dia = day + ' 16 '+ element[1] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 13) {dia = day + ' 17 '+ element[2] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 14) {dia = day + ' 18 '+ element[3] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 15) {dia = day + ' 19 '+ element[4] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 16) {dia = day + ' 20 '+ element[0] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 17) {dia = day + ' 21 '+ element[1] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 18) {dia = day + ' 22 '+ element[2] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 19) {dia = day + ' 23 '+ element[3] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 20) {dia = day + ' 24 '+ element[4] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 21) {dia = day + ' 25 '+ element[0] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 22) {dia = day + ' 26 '+ element[1] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 23) {dia = day + ' 27 '+ element[2] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 24) {dia = day + ' 28 '+ element[3] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 25) {dia = day + ' 29 '+ element[4] + ' - mes ' + mestli [11];}
else if (numero_mes == 11 && numero_dia == 26) {dia = day + ' 30 '+ element[0] + ' - mes ' + mestli [11];}
// XIII
else if (numero_mes == 11 && numero_dia == 27) {dia = day + ' 1 '+ element[1] + ' - mes ' + mestli [12];}
else if (numero_mes == 11 && numero_dia == 28) {dia = day + ' 2 '+ element[2] + ' - mes ' + mestli [12];}
else if (numero_mes == 11 && numero_dia == 29) {dia = day + ' 3 '+ element[3] + ' - mes ' + mestli [12];}
else if (numero_mes == 11 && numero_dia == 30) {dia = day + ' 4 '+ element[4] + ' - mes ' + mestli [12];}
else if (numero_mes == 11 && numero_dia == 31) {dia = day + ' 5 '+ element[0] + ' - mes ' + mestli [12];}

document.getElementById('fecha_micro').innerHTML = '... ' + dia + ' ...';
document.getElementById('fecha_macro').innerHTML = fecha_macro;