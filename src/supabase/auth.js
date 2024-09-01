import supabase from "./init";

export const signInWithGoogle = async ()=>{
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider : 'google',
        options: {
          redirectTo: 'http://localhost:3000',
          
        },
      })
      
      if (data.url) {
        console.log(data);
        
        // redirect(data.url) // use the redirect API for your server framework
      }else{
        console.log(error);
        
      }
      
} 

export const signOut = async()=>{
  const { error } = await supabase.auth.signOut({
    options:{
      redirectTo: 'http://localhost:3000'
    }
  })

  console.log(error);

}