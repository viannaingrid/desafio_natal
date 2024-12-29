import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

export default function Header() {
    return (
        <BrowserRouter>
        <header>

        </header>

        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Curiosidade" element={<Curiosidade/>} />
            <Route path="/Galeria" element={<Galeria/>} />
        </Routes> 
        </BrowserRouter>
    )
}