export const localStorage = window.localStorage;

export const localStorageList = {
    persist_auth: "persist:auth"
}

export const defaultPersistAuth = {
    version: 1, 
    rehydrated: false,
    state: {
      isAuthenticated: false,
      user: {
        id: "",
        name: "",
        email: "",
        avatar:"",
        role: "",
        last_sign_in_at:"",
        provider: ""
      }
    },
    token: "",
    refreshToken: ""
}
  

export const localStorageHandler = {
    getItem: (key) => {
      const serializedItem = localStorage.getItem(key);

      if (serializedItem === null) {
        return null;
      }

      return JSON.parse(serializedItem);
    },
    setItem: (key, item) => {
      localStorage.setItem(key, JSON.stringify(item));
    },
    removeItem: (key) => {
      localStorage.removeItem(key);
    },
};
  