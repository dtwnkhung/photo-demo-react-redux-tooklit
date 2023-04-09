import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Fragment, Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import NotFound from './components/NotFound'
import AddEditPhoto from './features/Photo/pages/AddEdit'
import MainPage from './features/Photo/pages/Main'
import productApi from './api/productApi'
import SignIn from './features/Auth/pages/SignIn'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const Photo = React.lazy(() => import('./features/Photo'))


// Configure Firebase.
const config = {
  // apiKey: "AIzaSyC0hCyt5wByt97AEcSVuyTggBXgRDrv7zg",
  apiKey: import.meta.env.VITE_REACT_FIREBASE_API,
  // authDomain: "photo-app-611af.firebaseapp.com",
  authDomain: import.meta.env.VITE_REACT_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

function App() {
  const [tokenValue, setTokenValue] = useState("")
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _pages: 1,
          _limit: 10,
        }
        const response = await productApi.getAll(params);
        console.log('%cApp.jsx line:18 object', 'color: #007acc;', response);
      } catch (error) {
        console.log('Failed to fetch product', error);
      }
    }
    fetchProductList();
  }, [])

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      const token = async () => {
        const tokenValue = await user.getIdToken();
        setTokenValue(tokenValue);
        return tokenValue;
      }
      token();
      console.log('%cApp.jsx line:54 object', 'color: #007acc;', tokenValue);
      // console.log('%cApp.jsx line:52 object', 'color: #007acc;', object);
      console.log('%cApp.jsx line:48 object', 'color: #007acc;', user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <Fragment>
      <div className='photo-app'>
        <Suspense fallback={<div>Loading ...</div>}>
          {/* <ul>
            <li><Link to="/photos">Go to photo page</Link></li>
            <li><Link to="/photos/add">Go to add new photo page</Link></li>
            <li><Link to="/photos/123">Go to edit photo page</Link></li>
          </ul> */}
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to='/photos' />} />
            <Route path='/photos' element={<Photo />} >
              <Route index element={<MainPage />} />
              <Route path='add' element={<AddEditPhoto />} />
              <Route path=':photoId' element={<AddEditPhoto />} />
            </Route>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Fragment >
  )
}

export default App
