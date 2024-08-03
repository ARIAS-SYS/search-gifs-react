
export const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ooUVLsgpLsL3TM82SA5BzqIpBfZRBb7R&q=${ category }&limit=5`;
    
    const request = await fetch( url );
    const { data } = await request.json();

    const gifs = data.map(( { id, title, images} ) => ({
        id,
        title,
        url: images.downsized_medium.url
    }))
        
    return gifs;

}