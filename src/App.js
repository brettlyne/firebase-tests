import './App.css';
import { signInWithGoogle } from "./services/firebase";

import React from 'react';

const App = () => {
  return (
    <div>
      <h3>Hello.</h3>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default App;



