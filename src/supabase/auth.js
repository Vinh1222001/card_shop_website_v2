import supabase from "./init";

export const signInWithGoogle = async ()=>{
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider : 'google',
        options: {
          redirectTo: 'http://example.com/auth/callback',
        },
      })
      
      if (data.url) {
        console.log(data);
        
        // redirect(data.url) // use the redirect API for your server framework
      }
      
} 