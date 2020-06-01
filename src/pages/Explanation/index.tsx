import React from 'react';

import Image from '../../assets/inthought.svg';

import { Container } from './styles';

const Explanation: React.FC = () => (
  <Container>
    <div className="content">
      <img src={Image} alt="Explanation" />
      <div>
        <h1>Como se proteger de incertezas e se preparar para seu futuro?</h1>
        <span>
          <p>Como se proteger de incertezas e se preparar para seu futuro?</p>

          <p>
            A vida é corrida, está difícil para todo mundo e muitas vezes não
            temos com quem contar para dormir tranquilo. Está tudo bem, mas um
            imprevisto sempre pode acontecer, com quem podemos contar nessas
            horas?
          </p>

          <p>
            Emprego? Governo? INSS?
            <br />
            Mais do que nunca, sabemos que não podemos contar com eles. Nós
            somos donos do nosso futuro. Por isso devemos nos
            <strong> proteger</strong> e nos
            <strong> preparar</strong>.
          </p>

          <p>Então quais são as alternativas? Por onde começar? </p>

          <p>
            <h4>Nós podemos te ajudar!</h4>
          </p>
        </span>
      </div>
    </div>
  </Container>
);

export default Explanation;
