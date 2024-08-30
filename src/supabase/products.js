import supabase from "./init"

export const getAllProducts = async () =>{
    let { data: products, error } = await supabase
  .from('products')
  .select('*')

  if (!error) {
    return products
  }

  return []
}