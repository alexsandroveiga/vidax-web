import React from 'react';

import Image from '../../assets/chart.svg';

import { Container } from './styles';

const Chart: React.FC = () => (
  <Container>
    <div className="content">
      <h1>Quanto seu dinheiro pode render?</h1>
      <span>
        Traduzimos esse mundo complicado de investimentos para você. <br /> Dá
        uma olhada só:
      </span>
      <img src={Image} alt="Chart" />
    </div>
  </Container>
);

export default Chart;
