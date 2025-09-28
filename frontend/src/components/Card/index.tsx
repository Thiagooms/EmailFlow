import style from './style.module.css'

export function Card() {
    return(
        <div className={style.card}>
          <header>
            <span className={`${style.dot} ${style.red}`}></span>
            <span className={`${style.dot} ${style.yellow}`}></span>
            <span className={`${style.dot} ${style.green}`}></span>
          </header>
          <div className={style.carddiv}>
            <h3 className={style.cardtext}>
              Gere respostas inteligentes e economize tempo com nossa IA avançada.
            </h3>
            <span className={style.span}>Teste  grátis!</span>
          </div>
          <div className={style.cardinfo}>
            <div className={style.productivecard}>
              <span>Produtivo</span>
              <p>Emails que ajudam você a avançar nas suas metas e projetos.</p>
            </div>
            <div className={style.unproductivecard}>
              <span>Improdutivos</span>
              <p>Mensagens que não exigem sua atenção imediata.</p>
            </div>
          </div>
        </div>
    );
}