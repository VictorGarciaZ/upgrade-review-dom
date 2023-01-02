/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ull$$ = document.createElement("ul");

for (const contry of countries) {

    //crear elemento
    const li$$ = document.createElement("li");

    //meterle contenido
    li$$.textContent = country

    //hacerlo realidad
    ull$$.appendChild(li$$);

}

document.body.appendChild(ull$$)


/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/

//seleccionarlo y luego borrarlo
const eliminable$$ = document.querySelector(".fn-remove-me")

eliminable$$.remove()


/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ul2$$ = document.createElement("ul")
const div$$ = document.querySelector("[data-funciton='printHere']")

for (const car of cars) {

    const li$$ = document.createElement("li");

    li$$.textContent = car

    ul2$$.appendChild(li$$)
    
}

div$$.appendChild(ul2$$)

/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const contry of countries2) {

    const div$$ = document.createElement("div");

    const h4$$ = document.createElement ("h4");

    const img$$ = document.createElement ("img");

    
}

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.*/


/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/
