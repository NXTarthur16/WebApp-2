import React from "react";
import './Imagem.css';
import axios from 'axios';

var pokeImagemGlobal: string;

async function GetImg(){
const url: string = "https://pokeapi.co/api/v2/pokemon/6/";

    await axios.get(
        url,
        {
            headers: {
                Accept: "application/json"
            }
        }
    ).then(
        function (response) {
            var pokeImagem: string = response.data.sprites.front_default;

            pokeImagemGlobal = pokeImagem;

        }
    ).catch();
}

GetImg()

function Imagem(){
    return(
        <div>
            <h1>
            charizard
            </h1>
            <img src={pokeImagemGlobal} alt=""></img>
        </div>
    );
}

export default Imagem;