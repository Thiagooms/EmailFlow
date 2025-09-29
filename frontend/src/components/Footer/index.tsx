import style from './style.module.css'

export function Footer(){
    return(
        <footer className={style.container}>
            <span className={style.span}>Desenvolvido por: Thiago Monteiro</span>

            <div className={style.socialLinks}>
                <a 
                    href="https://www.linkedin.com/in/thiago-monteiro-4531b4234/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={style.socialLink}
                >
                    LinkedIn
                </a>
                <a 
                    href="https://github.com/Thiagooms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={style.socialLink}
                >
                    GitHub
                </a>
            </div>

            <span className={style.span}>Desafio para vaga de estágio na <br/> empresa AutoU</span>
        </footer>
    );
}