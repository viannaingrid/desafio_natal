import globoNatal from '../../assets/globo-arvore-natal.png';
import cidadeViajar from '../../assets/cidades-para-viajar-no-natal5 1.png';
import atracoesNatal from '../../assets/atracoes-do-natal-luz-em-gramado 1.png';
import cidadeIluminada from '../../assets/cidades-para-viajar-no-natal6 1.png';
import santa from '../../assets/santa-with-elfs.png';
import presepio from '../../assets/presepio.jpg';
import luzesNatal from '../../assets/rua-luzes-natal.jpg';
import santaBR from '../../assets/santa-br.jpg';
import santaUS from '../../assets/santa-us.jpg';
import vitral from '../../assets/vitral.jpg';
import s from './galeria.module.scss'

export default function Galeria() {
    return (
        <main>
            <section>
                <h1>Aqui temos algumas fotos que utilizamos</h1>
            </section>
            <section className={s.imgs}>
                <img src={cidadeViajar} alt="Imagem de uma cidade com os galhos das arvores decoradas" />
                <img src={atracoesNatal} alt="Imagem da rua de gramado toda decorada com luzes e arvore de natal iluminada a noite" />
                <img src={cidadeIluminada} alt="Imagem da beira do rio iluminada apartir das decorações das casas" />
                <img src={presepio} alt="Imagem do presepio de jesus" />
                <img src={luzesNatal} alt="Imagem de uma rua cheia de luzes de natal penduradas pelas casas" />
                <img src={santaBR} alt="Desenho do papai noel com uma cerveja na mão e de shots, bem brasileiro" />
                <img src={santaUS} alt="Pintura do Papai Noel representado nos Estados Unidos, vestindo sua clássica roupa vermelha com blusa, calças, cinto e botas pretas." />
                <img src={vitral} alt="Imagem de um vitral pintado com jose, maria e jesus" />
            </section>
        </main>
    )
}