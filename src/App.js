import supabase from './supabase/init';

import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { signInWithGoogle } from './supabase/auth';



function App() {

  useEffect(() => {
    const getCarts = async () => {
      let { data: products, error } = await supabase
  .from('products')
  .select('video')

      console.log(products);
    };

    getCarts();
  }, []);

  const handleSignInWithGG = async () =>{
    signInWithGoogle();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={handleSignInWithGG}>Sign in with GG</button>
      </header>
    </div>
  );
}

export default App;
