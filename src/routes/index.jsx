import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Form from '../pages/Form';
import List from '../pages/List';

function RoutesApp() {
    return (    
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Form />}/>
                <Route path='/listagem' element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;