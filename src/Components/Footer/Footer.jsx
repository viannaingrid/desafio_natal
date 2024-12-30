import logoGit from '../../assets/icon-github.png';
import logoInstagram from '../../assets/icon-instagram.png';
import logoLinkedin from '../../assets/icon-linkedin.png';
import presentes from '../../assets/presentes-footer.png';
import s from './footer.module.scss';

export default function Footer() {
    return (
        <footer>
            <section className={s.icons} >
            <a href="https://www.linkedin.com/in/ingrid-vianna/">
                <img src={logoLinkedin} alt="Logo linkedin" />
            </a>
            <a href="https://github.com/viannaingrid">
                <img src={logoGit} alt="Logo Github" />
            </a>
            <a href="">
                <img src={logoInstagram} alt="Logo Instagram" />
            </a>
            </section>
            <section className={s.textos} >
                <p>Ingrid Vianna de Oliveira</p>
                <p>Fernanda Corrêa</p>
                <p>João Pedro</p>
                <p>Layout criado para fins natalistícos na escola vai na web</p>
            </section>
            <section className={s.presentes} >
                <img src={presentes} alt="Imagem de presentes" />
            </section>
        </footer>
    )
}