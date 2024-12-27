import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Principal from './pages/principal/principal-component';

function Rotas (){
    return <>        
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Principal />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default Rotas;