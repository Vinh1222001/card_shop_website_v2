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
    })
    
  return checkError(data, error)
      
} 


export const signIn = async (user) =>{
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
    options: {
      redirectTo: process.env.REACT_APP_HOME_URL
    }
  })

  if(data){
    // window.location.href = process.env.REACT_APP_HOME_URL

    if(data.user.role !== "customer"){
      return signOut()
    }
    
  }

  return checkError(data, error)
}

export const signUp = async (user) =>{

  // console.log(user);

  const { data, error } = await supabase.auth.signUp(
    {
      email: user.email,
      password: user.password,
      options: {
        data: {
          full_name: user.name,
        }
      }
    }
  )
  
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

export const updateClientRole =  async () =>{

  const {data, error} = supabase.auth.updateUser({
    role: "client",
    data:{
      role: "client"
    }
  })

  checkError(data, error)
}

export const getUser = async () =>{
  const { data: { user } } = await supabase.auth.getUser()
  // console.log(user);
  return user
  
}