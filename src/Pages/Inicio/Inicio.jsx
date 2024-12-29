import globoNatal from '../../assets/globo-arvore-natal.png';
import cidadeViajar from '../../assets/cidades-para-viajar-no-natal5 1.png';
import atracoesNatal from '../../assets/atracoes-do-natal-luz-em-gramado 1.png';
import cidadeIluminada from '../../assets/cidades-para-viajar-no-natal6 1.png';
import santa from '../../assets/santa-with-elfs.png';
import s from './inicio.module.scss';

export default function Inicio() {
    return (
        <main>
            <section className={s.picmain} >
                <img src={santa} alt="Desenho do Papai noel e 2 elfos montando um biscoito de natal com uma arvore atras" />
            </section>
            <section className={s.globoNeve} >
                <img src={globoNatal} alt="Imagem de um globo de neve com uma arvore de natal dentro" />
                <p>A origem do globo de neve é incerta, mas acredita-se que tenha surgido na Europa no século XIX, tornando-se um símbolo de magia, afeto e encantamento, especialmente no Natal, trazendo um toque de nostalgia e maravilha para as celebrações e encantando gerações ao redor do mundo.</p>
            </section>
            <section className={s.imgs} >
                <img src={cidadeViajar} alt="Imagem de uma cidade com os galhos das arvores decoradas" />
                <img src={atracoesNatal} alt="Imagem da rua de gramado toda decorada com luzes e arvore de natal iluminada a noite" />
                <img src={cidadeIluminada} alt="Imagem da beira do rio iluminada apartir das decorações das casas" />
            </section>
        </main>
    )
}