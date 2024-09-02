import supabase from "./init"

export const getAllBannerSlides = async () =>{

    let { data: imageSliders, error } = await supabase
    .from('imageSliders')
    .select(`
        *,
        images!imageSliders_imgId_fkey(
            imgSrc
        )
    `)

    if(!error) return imageSliders

    return error
        
}