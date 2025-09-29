import style from './style.module.css'

export function AnalyzeEmail(){
    return(
        <section className={style.container}>

            <div className={style.head}>
                <p>CLASSIFICAR EMAIL</p>
            </div>

            <div className={style.body}>
                <div className={style.sendemail}>
                    <form className={style.emailForm}>
                        <h2 className={style.formTitle}>ENVIE O SEU EMAIL</h2>
                        <div className={style.formGroup}>
                            <label htmlFor="emailTitle" className={style.label}>Título</label>
                            <input 
                                type="text" 
                                id="emailTitle" 
                                name="emailTitle" 
                                className={style.input} 
                            />
                        </div>

                        <div className={style.formGroup}>
                            <label htmlFor="emailDescription" className={style.label}>Descrição</label>
                            <textarea
                                id="emailDescription"
                                name="emailDescription"
                                className={style.textarea}
                                rows={10}
                                maxLength={50000}
                            />
                            
                            <p className={style.charCounter}>0 / 5.000 caracteres</p>
                        </div>
                        
                        <div className={style.formActions}>
                            <button type="submit" className={style.classifyButton}>
                                Classificar
                                <span className={style.iconArrow}>&#x2192;</span>
                            </button>
                            
                            <button type="reset" className={style.clearButton}>
                                Limpar
                            </button>
                        </div>
                    </form>
                </div>
                <div className={style.analyzeemail}>
                    <div className={style.classificationContent}>
                        <div className={style.mailIcon}>✉</div> 
                        <p className={style.statusStrong}>AGUARDANDO CLASSIFICAÇÃO</p>
                        <p className={style.statusText}>DIGITE E ENVIE O TEXTO PARA COMEÇAR</p>
                    </div>
                </div>
            </div>

        </section>
    );
}