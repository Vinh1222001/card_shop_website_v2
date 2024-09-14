import { createClient } from '@supabase/supabase-js'
import { createPersistAuthLocalStorage, resetPersistAuthLocalStorage, setPersistAuthLocalStorage } from './eventHandlers';

const supabaseUrl = 'https://jhaukacezyclslzmlkwv.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY

// console.log(supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

supabase.auth.onAuthStateChange((event, session) => {  

  if (event === 'INITIAL_SESSION') {
    
  } else if (event === 'SIGNED_IN') {

    // console.log("In Signed in session", event, session.user);
    createPersistAuthLocalStorage()

    if(session){      
      
      setPersistAuthLocalStorage(session)
    }
    
  } else if (event === 'SIGNED_OUT') {
    // handle sign out event
    resetPersistAuthLocalStorage()
    
  } else if (event === 'PASSWORD_RECOVERY') {
    // handle password recovery event
  } else if (event === 'TOKEN_REFRESHED') {
    // handle token refreshed event
  } else if (event === 'USER_UPDATED') {
    // handle user updated event
  }
})