import supabase from "./init";

const checkError = (data, error) =>{
  if (data) {
    // console.log(data);
    return data

  }else{
    // console.log(error);
    return error
  }
}

export const PROVIDER_LIST = {
  FACEBOOK: "facebook",
  GOOGLE:   "google"
}

export const signInWithThirdProvider = async (providerName)=>{
  const { data, error } = await supabase.auth.signInWithOAuth({
      provider : providerName,
      role: "client",
      options: {
        redirectTo: 'http://localhost:3000',
        
      },
    })
    
  return checkError(data, error)
      
} 


export const signIn = async (userEmail, userPassword) =>{
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  })

  return checkError(data, error)
}

export const signUp = async (userEmail, userPassword) =>{
  const { data, error } = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
  })

  return checkError(data, error)
}

export const signOut = async()=>{
  const { data, error } = await supabase.auth.signOut({
    options:{
      redirectTo: 'http://localhost:3000'
    }
  })

  return checkError(data, error)

}