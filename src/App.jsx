import React, { Fragment, Suspense, useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import AddEditPhoto from './features/Photo/pages/AddEdit'
import MainPage from './features/Photo/pages/Main'
const Photo = React.lazy(() => import('./features/Photo'))
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Banner from './components/Banner'
// import "./main.scss"


function App() {
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
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Fragment >
  )
}

export default App
