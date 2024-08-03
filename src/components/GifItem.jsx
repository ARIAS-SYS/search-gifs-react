
export const GifItem = ({ title, url }) => {
    return (
        <div className="bg-slate-900 rounded-lg">
            <img 
                className="h-32 w-full object-cover rounded-t-lg"
                src={ url } 
                alt={ title } 
            />
            <p className="p-3">{ title }</p>
        </div>
    )
}
