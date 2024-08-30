
import { userSlice } from '../redux/slices/userSlice';
import store from '../redux/store';
import { localStorageHandler, defaultPersistAuth, localStorageList } from './localStorage';
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://jhaukacezyclslzmlkwv.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

supabase.auth.onAuthStateChange((event, session) => {  

    if (event === 'INITIAL_SESSION') {
        // handle initial session
        if(session && session.access_token){
            let currentPersistAuth = localStorageHandler.getItem(localStorageList.persist_auth);

            // console.log(currentPersistAuth);
            
            currentPersistAuth = {
                ...currentPersistAuth,
    
                state:{
                  isAuthenticated: true,
                  user: {
                      id: session.user.id,
                      name: session.user.user_metadata.full_name,
                      email: session.user.email,
                      avatar: session.user.user_metadata.avatar_url,
                      role: session.user.role,
                      last_sign_in_at: session.user.last_sign_in_at,
                      provider: session.user.app_metadata.provider
                  },
                },
                token: session.access_token,
                refreshToken: session.refresh_token
                
            }

            localStorageHandler.setItem(
                localStorageList.persist_auth,
                currentPersistAuth
            )
            
            store.dispatch(userSlice.actions.setUserInfo(currentPersistAuth.state))
            // store.getState()
        }
                
    } else if (event === 'SIGNED_IN') {

        if(localStorage.getItem(localStorageList.persist_auth)===null) localStorageHandler.setItem(localStorageList.persist_auth, defaultPersistAuth); 
      
    } else if (event === 'SIGNED_OUT') {
      // handle sign out event
      localStorageHandler.setItem(
        localStorageList.persist_auth,
        defaultPersistAuth
      )

      store.dispatch(userSlice.actions.setUserInfo(defaultPersistAuth.state))
      
    } else if (event === 'PASSWORD_RECOVERY') {
      // handle password recovery event
    } else if (event === 'TOKEN_REFRESHED') {
      // handle token refreshed event
    } else if (event === 'USER_UPDATED') {
      // handle user updated event
    }
})