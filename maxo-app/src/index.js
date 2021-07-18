import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseAppProvider } from 'reactfire'
import {firebaseConfig} from './Firebase/firebase'


ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>
  )
  ,
  document.getElementById('root')
);


