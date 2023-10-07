import React from "react";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import HomePage from "./pages/Home";
import LayoutPage from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App(){
  
  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<LayoutPage/>}>
             <Route index element={<HomePage/>}/>
           </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}