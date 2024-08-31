import supabase from "./init"

export const getAllHotNews = async () =>{

    let { data: hotNews, error } = await supabase
    .from('hotNews')
    .select('*')
    .order('index', { ascending: true })
    

    if(!error){
        return hotNews
    }
    
    return error
}