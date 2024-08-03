import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( { category } ) => {

    const { images, isLoading} = useFetchGifs( category )
    
        
    return (
        <>
            <h3 className="text-2xl my-5">{ category }</h3> 
            {
                isLoading && <h4>Cargando...</h4>
            }
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {
                    images.map(({id, title, url}) => (
                        <GifItem key={ id } title={ title } url={ url } />
                    ))
                }
            </div>
        </>
    )
}
