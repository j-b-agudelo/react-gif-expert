import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setinputValue ] = useState('');

    const onInputChange = ( { target } ) => {
        setinputValue( target.value );
    }

    // Cuando se le de enter hace el cambio

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return; // Para que si hay menos de 2 caracteres no los inserte

        //setCategories( categories => [ inputValue, ...categories ]);
        setinputValue('');  // Pra limpiar el input despues de insertar algo
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type = "text"
                placeholder = "Buscar gifs"
                value={ inputValue }
                onChange = { onInputChange }
             />    
        </form>
        
    )
}
