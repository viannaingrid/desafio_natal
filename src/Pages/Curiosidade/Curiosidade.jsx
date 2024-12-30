import s from './curiosidade.module.scss';

export default function Curiosidade(){
    return(
        <main>
            <section className={s.texto} >
                <h2>Curiosidades Sobre o Natal</h2>
            </section>
            <section className={s.listaCuriosidade} >
                <ul>
                    <li>Data de Nascimento de Jesus: Embora o Natal celebre o nascimento de Jesus Cristo, historiadores acreditam que ele não nasceu em 25 de dezembro, nem no ano 1 d.C. Estima-se que o nascimento tenha ocorrido entre 6 a.C. e 4 a.C</li>
                    <li>Origem da Árvore de Natal: A tradição de decorar árvores é anterior ao Cristianismo. Povos pagãos na Europa já adornavam árvores para celebrar o solstício de inverno.</li>
                    <li>Papai Noel: A figura do Papai Noel foi inspirada em São Nicolau, um bispo conhecido por sua generosidade, especialmente com crianças e necessitados.</li>
                    <li>Ceia de Natal: A tradição de realizar uma ceia na véspera do Natal tem raízes antigas e simboliza a união familiar e a celebração do nascimento de Cristo.</li>
                    <li>Natal na Idade Média: Durante a Idade Média, as celebrações natalinas se estendiam por 12 dias, do dia 25 de dezembro até o dia 6 de janeiro, conhecido como Dia de Reis.</li>
                </ul>
            </section>
            <section className="s.fotos">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </section>
            
        </main>
    )
}
