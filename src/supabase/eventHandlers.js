import { userSlice } from '../redux/slices/userSlice';
import store from '../redux/store';
import { localStorageHandler, defaultPersistAuth, localStorageList } from './localStorage';

export const setPersistAuthLocalStorage = (session) =>{
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
                provider: session.user.app_metadata.provider, 
                role: session.user.user_metadata.role
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
}

export const createPersistAuthLocalStorage = () =>{
    if(localStorage.getItem(localStorageList.persist_auth)===null) localStorageHandler.setItem(localStorageList.persist_auth, defaultPersistAuth); 
}

export const resetPersistAuthLocalStorage = () => {
    localStorageHandler.setItem(
        localStorageList.persist_auth,
        defaultPersistAuth
      )
  
    store.dispatch(userSlice.actions.setUserInfo(defaultPersistAuth.state))
  
}