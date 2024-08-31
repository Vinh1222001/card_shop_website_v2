import supabase from "./init";

export const getAllContacts = async()=>{
    
    let { data: contacts, error } = await supabase
    .from('contacts')
    .select('*')

    if(!error) return contacts

    return error;
        
}