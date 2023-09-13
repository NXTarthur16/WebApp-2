import React from 'react';
import axios from 'axios';

import './Navbar.css';
import Cidades from '../../utils/cities';

interface Props{
// Quem cria os tipos de dados e os nomes das variaveis (objeto)
    item1: string;
    item2: number;
    ok?: boolean;
    teste?: boolean; // Para ele ser opcional ( usar ?) 
}

async function AxiosTeste(){
    // toda função async precisa ter o await
    const { data } = await axios.get(
        'https://pokeapi.co/api/v2/pokemon',

        {
            headers: {
                Accept: "application/json",
            }
        }
    );

            const pokemon = data.results.map((pokemon: {name: string}) => 
            pokemon.name)

    return console.log(pokemon);
}

AxiosTeste();

// var teste: any;

// teste = 1;

// if (teste != 0){

//     for (teste = 1; teste < 7; teste++ ) {

//         console.log(teste);
//     }
// } else {

// }

function Navbar(props: Props){
    return(
        <div>
            {props.item1} <br/>
            {props.item2} <br/>
            {
                Object.keys(Cidades()).map((key) =>{ 
                    return(
                    <h1 key={key}>
                        {Cidades()[key as keyof typeof Cidades]}
                    </h1>
                    )
                })
            }
        </div>
    );
}

export default Navbar;

// Metodo = função
// Parametro = propriedade