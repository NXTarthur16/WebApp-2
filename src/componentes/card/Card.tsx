import React from "react";
import axios from 'axios';

import './Card.css';

interface Props {
    name?: string;
    image?: string;
}

interface Pokemon{
    name: string;
    url: string;
}

var pokeNameReturn: string;
var pokeImgReturn: string;

async function GetPokemon(){
    const url: string = "https://pokeapi.co/api/v2/";

    await axios.get(
        url,
        {
            headers: {
                Accept: "application/json",
            }
        }
    ).then(
            async function (response){
                var pokemonUrl: string = response.data.pokemon;

                await axios.get(
                    pokemonUrl,
                    {
                        headers: {
                            Accept: "Application/json"
                        }
                    }
                ).then(
                    async function(response){
                        var pokeNameArray = [];
                        var pokeName = [];
                        var pokeUrl = [];

                        pokeNameArray = response.data.results;

                        pokeName = pokeNameArray.map((pokemon: Pokemon) =>{
                            return pokemon.name;
                        })

                        pokeNameReturn = pokeName[3]

                        pokeUrl = pokeNameArray.map((pokemon: Pokemon) => {
                            return pokemon.url;
                        })

                        await axios.get(
                            pokeUrl[3],
                            {
                                headers: {
                                    Accept:"application/json"
                                }
                            }
                        ).then (
                            function (response){
                                var pokeImgUrl: string

                                pokeImgUrl = response.data.sprites.front_default;

                                pokeImgReturn = pokeImgUrl;

                                return pokeImgUrl
                            }
                        ).catch()

                        // var pokeObject: Object

                        // pokeObject = {
                        //     name: pokeNameReturn,
                        //     img: pokeImgReturn
                        // }

                        // return pokeObject

                    }
                ).catch()

                // return console.log(pokemonUrl);

                // var pokeName: Object = response.data.pokemon

                // var logDoConsole = Object.keys(pokeName).map((key) =>{
                //     var pokeNameMap;

                //     pokeNameMap = pokeName[key as keyof typeof pokeName]
                    
                //     return pokeNameMap;
                // })
                 
                // console.log(logDoConsole)

            }
    ).catch();

    // const pokemon = data.results.map((pokemon: {name: string}) => 
    // pokemon.name)

    // return data;

}

GetPokemon()

function Card(props: Props){
    return(
        <div>
            <h1> {pokeNameReturn} </h1>
            <img src={pokeImgReturn} alt=""></img>
        </div>
    )

}

export default Card;