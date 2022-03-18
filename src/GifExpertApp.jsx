import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

function GifExpertApp() {
    //const categories = ['one punch', 'lolita', 'nevin'] //map sirve para transformar cada elemento que esta dentro del arreglo, map recibe dos argumentos por defecto
    const [categories, setCategories] = useState(['one punch'])

    /*  const handleAdd = () => {
         //setcategories([...categories, 'teamo']);
         setcategories(cats => [...cats, 'teamo']);
 
     } */
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>

        </>

    )
}

export default GifExpertApp