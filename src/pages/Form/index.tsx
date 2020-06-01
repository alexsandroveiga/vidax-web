import React from 'react';

import { Container } from './styles';

const Form: React.FC = () => (
  <Container>
    <div className="content">
      <h1>
        Mas como isso pode te
        <br />
        proteger e preparar para o futuro?
      </h1>
      <form>
        <header>
          <h6>Qual sua idade?</h6>
          <input type="text" placeholder="Digite aqui" />
        </header>
      </form>
    </div>
  </Container>
);

export default Form;
