import style from './style.module.css'

export function Footer(){
    return(
        <footer className={style.container}>
            <span className={style.span}>Desenvolvido por: Thiago Monteiro</span>
            <span className={style.span}>Desafio para vaga de estágio na <br/> empresa AutoU</span>
        </footer>
    );
}