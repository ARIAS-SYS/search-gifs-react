import { useState } from "react"

export const InputSearchGif = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ( { target } ) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if(newInputValue.length === 0) return;

        onAddCategory( newInputValue );
        setInputValue("");

    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                className="block mx-auto my-5 w-full max-w-md px-5 py-2 bg-transparent border rounded-full"
                type="text"
                placeholder="Busca un gif..."
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
