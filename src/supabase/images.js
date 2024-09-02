import supabase from "./init"

export const getAllImages = async ()=>{

    let { data: images, error } = await supabase
    .from('images')
    .select('*')

    if (!error) {
        return images
    }

    return error
        
}