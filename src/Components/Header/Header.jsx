import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Inicio from '../../Pages/Inicio/Inicio.jsx';
import Curiosidade from '../../Pages/Curiosidade/Curiosidade.jsx';
import Galeria from '../../Pages/Galeria/Galeria.jsx';
import arvoreNatalLogo from '../../assets/arvore-icone-nav.png';
import s from './header.module.scss';

export default function Header() {
    return (
        <BrowserRouter>
        <header>
            <section className={s.logoHeader} >
                <img src={arvoreNatalLogo} alt="Imagem de uma logo de arvore de natal com presentes" />
                <h1>Feliz Natal</h1>
            </section>
            <nav className={s.navHeader} >
                <ul>
                    <li>
                        <Link className={s.linkHeader} to="/" >Inicio</Link>
                    </li>
                    <li>
                        <Link className={s.linkHeader} to="/Curiosidade">Curiosidade</Link>
                    </li>
                    <li>
                        <Link className={s.linkHeader} to="/Galeria" >Galeria</Link>
                    </li>
                </ul>
            </nav>
        </header>

        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Curiosidade" element={<Curiosidade/>} />
            <Route path="/Galeria" element={<Galeria/>} />
        </Routes> 
        </BrowserRouter>
    );
}