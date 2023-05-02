import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Principal from './pages/principal';

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