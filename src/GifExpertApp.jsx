// Para crear el funcional component: rafc + tab y nos aparece lo siguiente.

// Despues de la version 17 no se uriliza import React

// ------------------------------------------------------
//KB6fxBvIO4B19AHgHCUOGnN7lf4RRQzj

import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']); // One Punch es el nombre de la categoria

    const onAddCategory = ( newCategory) => {

        if ( categories.includes(newCategory) ) return; // Si la categoria existe, no la deja insertar
        //categories.push(newCategory);
        setCategories( [ newCategory, ...categories ] );
        //setCategories( cat => [ ...cat, 'Valorant' ] ); // Esta es equivalente a la anterior
    }

  return (
    <>
        {/* Titulo */}

        <h1>GifExpertApp</h1> 

        {/*input*/}

        < AddCategory 
            onNewCategory = { (value) => onAddCategory(value) }
        />

        { /* Listado de Gif */} 
        
        { 
            categories.map( ( category ) => (
                <GifGrid
                    key = { category } 
                    category = { category }
                />   
            ) ) 
        }
    </>  
  )
}
