import React from 'react';

import { Container } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <div className="content">
      <h3>Quais são seus planos de vida?</h3>
      <div>
        <button type="button">Investir R$00,00/mês</button>
        <span>Resgate R$00,00 em 5 anos*</span>
      </div>
    </div>
  </Container>
);

export default Dashboard;
