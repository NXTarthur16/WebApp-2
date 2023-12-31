import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './componentes/app/App';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';
import Imagem from './componentes/imagem/Imagem'
import Card from './componentes/card/Card';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
     {/* <App />  */}

    <Navbar 
    item1 = 'Hello world'
    item2 = {5}           // numero sempre dentro de chaves
    />

    <Footer
    item1 = 'Apoiadores'
    item2 = 'Senac'
    item3 = 'Sesc'
    item4 = 'Equipe Rafael'
    /> 

    <Imagem/>

     <Card />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
