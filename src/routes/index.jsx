import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Form from '../pages/Form';
import List from '../pages/List';

import Login from '../pages/login';
import { TemplatePrivado } from './TemplatePrivado';



function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />


                    <Route path='/form' element={<Form />} />
                    <Route path='/form/:id' element={<Form />} />
                    <Route path='/listagem' element={<List />} />


            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;