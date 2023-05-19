import logo from './logo.svg';
import './sectionApresentacao.css';

function sectionApresentacao() {
  return (
    <div className="section-apresentacao">
      <div className='div-titulo-apresentacao'>
          <p>Matheus Ferreira</p>
        </div>
        <div className='div-texto-apresentacao'>
          <p style={{color: 'white', margin: 0}}>Prazer, sou desenvolvedor full-stack, e estou aqui para te ajudar.</p>
        </div>
    </div>
  );
}

export default sectionApresentacao;
