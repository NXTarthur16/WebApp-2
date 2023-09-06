import React from 'react';
import './Navbar.css';

interface Props{
// Quem cria os tipos de dados e os nomes das variaveis (objeto)
    item1: string;
    item2: number;
    ok?: boolean;
    teste?: boolean; // Para ele ser opcional ( usar ?) 
}

function Navbar(teste: Props){
    return(
        <div>
            {teste.item1}
            {teste.item2}
            
        </div>
    );
}

export default Navbar;

// Metodo = Classe
// Parametro = propriedade