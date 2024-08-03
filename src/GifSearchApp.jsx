import { useState } from "react"
import { InputSearchGif } from "./components/InputSearchGif"
import { GifGrid } from "./components/GifGrid";

export const GifSearchApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ])
    }

    return (
        <div className="min-h-[100vh] text-[rgb(148,148,148)] p-5 lg:p-20 w-full max-w-7xl mx-auto">
            
            <h1 className="text-2xl font-bold text-center my-5 text-white">Buscador de Gif</h1>

            <InputSearchGif onAddCategory={ onAddCategory } />


            {
                categories.map( category => (
                    <GifGrid key={ category } category={ category } />
                ))
            }


        </div>
    )
}
