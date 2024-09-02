import supabase from "./init"

export const getAllHotProducts = async () => {
    
    let { data: hotProducts, error } = await supabase
    .from('hotProducts')
    .select(`
        *,
        products!hotProducts_productId_fkey(
            id,
            name,
            seen,
            material,
            effect,
            size,
            images!products_avatarId_fkey(
                imgSrc
            )
        )
    `)
        
    if(!error) {
        return hotProducts
    }

    return error
}