import AdminLogin from 'components/AdminLogin';
import Calendar from 'components/Calendar';
import Main from 'components/Main';
import SlideBar from 'components/Slidebar';
import firebase from 'firebase';
import { Route } from 'react-router';
import './App.css';

const config = {
  apiKey: 'AIzaSyA3MK179kMkK1ztHbeMier8K31MDJ30sn0',
  authDomain: 'demofirebase-378b9.firebaseapp.com',
  databaseURL: 'https://demofirebase-378b9-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'demofirebase-378b9',
  storageBucket: 'demofirebase-378b9.appspot.com',
  messagingSenderId: '775182740406',
  appId: '1:775182740406:web:d07633a4954defee16ef17',
  measurementId: 'G-F46G0VJJJY',
};
firebase.initializeApp(config);
firebase.analytics();

export const realtimeDB = firebase.database();

function App() {
  return (
    <div className="app">
      <Route path="/" component={AdminLogin} exact />
      <Route path="/admin" component={SlideBar} />
      <Route path="/admin" component={Main} />
      <Route path="/admin" component={Calendar} />
    </div>
  );
}

export default App;
