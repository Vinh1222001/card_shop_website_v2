import supabase from "./init"

export const getAllProducts = async () =>{
    let { data: products, error } = await supabase
  .from('products')
  .select(`
    *,
    statuses!products_status_fkey(
      value
    ),
    images!products_avatarId_fkey(
      imgSrc
    )
  
  `)
  .order('createdAt', {ascending: false})

  if (!error) {
    return products
  }

  return []
}