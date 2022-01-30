import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Ensomhet som et folkehelseproblem" text="En økning i antall og andel eldre har en betydelig innvirkning på alle dimensjoner av samfunnet. Som et resultat av økt levealder stilles det større og større krav til tilgjengelighet, kvalitet og ressurser i helsetjenestene som tilbys. Dette utgjør en utfordrende situasjon på global skala." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Bakgrunnen for VennDi</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Ensomhet" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Covid-sosial isolasjon" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Økning i antall eldre" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default WhatGPT3;
