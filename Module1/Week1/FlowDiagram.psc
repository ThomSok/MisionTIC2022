Algoritmo PorcentajeInversion
	Definir inversor1,inversor2,inversor3,total,porinversor1,porinversor2,porinversor3 Como Real;
	Escribir 'Inversor 1: Escribe la cantidad de dinero que invertiste';
	Leer inversor1;
	Escribir 'Inversor 2: Escribe la cantidad de dinero que invertiste';
	Leer inversor2;
	Escribir 'Inversor 3: Escribe la cantidad de dinero que invertiste';
	Leer inversor3;
	total <- (inversor1+inversor2+inversor3);
	porinversor1 <- ((inversor1*100)/total);
	porinversor2 <- ((inversor2*100)/total);
	porinversor3 <- ((inversor3*100)/total);
	Escribir 'El porcentaje invertido por el Inversor 1 es: ',porinversor1,'%';
	Escribir 'El porcentaje invertido por el inversor 2 es: ',porinversor2,'%';
	Escribir 'El porcentaje invertido por el inversor 3 es: ',porinversor3,'%';
FinAlgoritmo
