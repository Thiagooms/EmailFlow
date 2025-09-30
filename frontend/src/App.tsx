import './App.css';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { Card } from './components/Card';
import { AnalyzeEmail } from './components/AnalyzeEmail';

function App() {
  return (
    <div className='app'>
      <section className='hero'>
        <h1 className='title'>Classifique seus emails<br/> com<span> inteligência artificial</span></h1>
        <Card />
        <div className='btn-container'>
          <button
            className='cta-button'
            onClick={() => {
              document.getElementById('analyzeemail')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <p>Comece agora</p>
            <span className='arrow-container'>
              <svg className='arrow-icon' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2334 0C12.2912 0 12.3482 0.0052428 12.4033 0.0146484C12.4444 0.0216787 12.4853 0.0307861 12.5254 0.0429688C12.545 0.0489239 12.564 0.0563732 12.583 0.0634766C12.5927 0.0671 12.6027 0.0702816 12.6123 0.0742188C12.6279 0.0805805 12.6431 0.0876159 12.6582 0.0947266C12.7029 0.115663 12.7463 0.140059 12.7881 0.167969C12.978 0.294743 13.1213 0.484793 13.1895 0.708008C13.2184 0.803118 13.2334 0.901424 13.2334 1V12.2344C13.2334 12.7867 12.7857 13.2344 12.2334 13.2344C11.6814 13.234 11.2334 12.7864 11.2334 12.2344V3.41406L1.70605 12.9414C1.31559 13.3316 0.683431 13.3316 0.292969 12.9414C-0.0974763 12.5509 -0.0975291 11.9178 0.292969 11.5273L9.81934 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H12.2334Z" fill="black"/>
              </svg>
            </span>
          </button>
          <button
            className='btn-second'
            onClick={() => {
              const el = document.getElementById('howitworks');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          >
            <p>Saiba mais</p>
          </button>
        </div>
      </section>
      <section id="howitworks">
        <HowItWorks />
      </section>
      <section id="analyzeemail">
        <AnalyzeEmail />
      </section>
      <Footer />
    </div>
  );
}


export default App;