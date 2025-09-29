import style from './style.module.css'

export function HowItWorks() {
    return (
        <section className={style.sectionhowitworks}>
            <div className={style.howitworks}>
                <p>COMO FUNCIONA</p>
            </div>
            <div className={style.cards}>
                <div className={style.cardstepone}>
                    <div className={style.containerimginfostepone}>
                        <div className={style.imginfostepone}>
                            <div className={style.contentimg}>
                                <p className={style.contenttitle}>SEU EMAIL</p>
                                <span className={style.line}></span>
                                <p className={style.titledescription}>EXEMPLO ENTRADA</p>
                                <p className={style.description}>“Olá equipe, gostaria de solicitar uma atualização sobre o status do ticket #7891, referente ao problema no login. Poderiam verificar e me dar um retorno ainda hoje? Obrigado, Mariana.”</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.content}>
                        <h3>1. VOCÊ NOS ENVIA O EMAIL</h3>
                        <p>Copie o texto de qualquer email e cole em nossa plataforma,<br/> nós cuidamos de todo o trabalho pesado.</p>
                    </div>
                </div>
                <div className={style.cardsteptwo}>
                    <div className={style.containerimginfostepone}>
                        <div className={style.imginfostepone}>
                            <div className={style.contentimg}>
                                <p className={style.contenttitle}><span className={style.point}></span>PRODUTIVO</p>
                                <span className={style.line}></span>
                                <p className={style.titledescription}>RESPOSTA SUGERIDA</p>
                                <p className={style.description}>“Olá Mariana, recebemos sua solicitação sobre o ticket #7891. Estou verificando o status do problema de login com a equipe técnica e te darei um retorno assim que tivermos uma atualização.”</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.content}>
                        <h3>2. RECEBA A RESPOSTA PRONTA</h3>
                        <p>Nossa inteligência artificial lê e entende seu email em segundos,<br/> classifica a mensagem e cria uma sugestão de resposta pronta<br/> para você usar.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}