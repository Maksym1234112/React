import './App.css';
import React from 'react';

import { Lesson10 } from './pages/Lesson10.js';

import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Lesson10/>}>Home</Route>
    )
  );
 
  return (
    <div>
      <RouterProvider fallback="<div>sdfsdf</div>" router={router}/>
    </div>
  );
}

export default App;
