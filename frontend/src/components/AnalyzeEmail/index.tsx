import React, { useState } from 'react';
import { useAnalyzeEmail } from '../../hooks/useAnalyzeEmail';
import style from './style.module.css'


export function AnalyzeEmail() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { isLoading, result, error, submitEmail, clear } = useAnalyzeEmail();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() || description.trim()) {
            submitEmail(title, description);
        }
    };

    const handleClear = () => {
        setTitle('');
        setDescription('');
        clear();
    }

    const charCount = description.length;
    const maxChars = 50000;

    return (
        <section className={style.container}>

            <div className={style.head}>
                <p>CLASSIFICAR EMAIL</p>
            </div>

            <div className={style.body}>
                <div className={style.sendemail}>
                    <form className={style.emailForm} onSubmit={handleSubmit}>
                        <h2 className={style.formTitle}>ENVIE O SEU EMAIL</h2>
                        <div className={style.formGroup}>
                            <label htmlFor="emailTitle" className={style.label}>Título</label>
                            <input
                                type="text"
                                id="emailTitle"
                                name="emailTitle"
                                className={style.input}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
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
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <p className={style.charCounter}>{charCount} / {maxChars.toLocaleString()} caracteres</p>
                        </div>

                        <div className={style.formActions}>
                            <button
                                type="submit"
                                disabled={isLoading || (!title.trim() && !description.trim())}
                                className={style.classifyButton}
                            >
                                {isLoading ? 'CLASSIFICANDO...' : 'Classificar'}
                                <span className={style.iconArrow}>&#x2192;</span>
                            </button>

                            <button
                                type="button"
                                onClick={handleClear}
                                className={style.clearButton}
                                disabled={isLoading}
                            >
                                Limpar
                            </button>
                        </div>
                    </form>
                </div>
                <div className={style.analyzeemail}>
                    <div className={style.classificationContent}>
                        {renderAnalysisContent(isLoading, result, error)}
                    </div>
                </div>
            </div>

        </section>
    );
}

function renderAnalysisContent(isLoading: boolean, result: any, error: string | null) {
    if (isLoading) {
        return (
            <div className={style.classificationContent}>
                <p className={style.statusStrong}>CLASSIFICANDO...</p>
                <p className={style.statusText}>ANALISANDO O CONTEÚDO DO EMAIL...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={style.classificationContent}>
                <p className={style.statusStrong}>ERRO NA ANÁLISE</p>
                <p className={style.statusText}>{error.toUpperCase()}</p>
            </div>
        );
    }

    if (result) {
        const isProductive = result.categoria === 'Produtivo';
        const categoryColor = isProductive ? 'green' : 'red';

        return (
            <div className={style.classificationContent}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            backgroundColor: categoryColor,
                            marginRight: '8px'
                        }}
                    ></span>
                    <span
                        style={{
                            color: 'white',
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: 'bold',
                            fontSize: '0.625rem',
                            textTransform: 'uppercase'
                        }}
                    >
                        {result.categoria}
                    </span>
                </div>

                <hr style={{ border: `0.4px solid rgba(255, 255, 255, 0.258)`, borderRadius: '1rem' ,width: '100%', marginBottom: '0.75rem', }} />

                <p 
                style={{
                        fontWeight: 'bold',
                        fontSize: '0.75rem',
                        textAlign: 'left',
                        marginTop: '2.125rem',
                        marginBottom: '1.091rem',
                        fontFamily: 'Space Grotesk, sans-serif'
                    }}>RESPOSTA SUGERIDA
                </p>

                <p 
                style={{ 
                        whiteSpace: 'pre-wrap',
                        textAlign: 'left',
                        fontSize: '0.75rem',
                        fontWeight: '100',
                        fontFamily: 'Space Grotesk, sans-serif'
                    }}>
                {result.resposta_sugerida}</p>
            </div>
        );
    }


    return (
        <div className={style.classificationContent}>
            <div className={style.mailIcon}>✉</div>
            <p className={style.statusStrong}>AGUARDANDO CLASSIFICAÇÃO</p>
            <p className={style.statusText}>DIGITE E ENVIE O TEXTO PARA COMEÇAR</p>
        </div>
    );
}