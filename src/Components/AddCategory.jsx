import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');//si se deja el estado vacio () es undefined
    const handleInpuntChange = (e) => {

        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();//prevenir el comportamiento por defecto del form
        // console.log('submit hecho');
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);//cats es categorias es el callback
            setInputValue('');
        }




    }
    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInpuntChange}
            />
        </form>


    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
