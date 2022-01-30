import React from 'react';
import possibilityImage from '../../assets/business-3d-326.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="business-3d-326.png">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Laget for å mobilisere ensomhet</h4>
      <h1 className="gradient__text">VennDi- En digital samtalepartner og aktivitør</h1>
      <p> Gjennom kartlegging over tid, tilpasser VennDi seg dine behov. VennDi tilbyr samtaler med en personlig avatar, veiledning i fysisk aktivitet tilpasset deg, og gjennom bilder og meldinger får du muligheten til å oppretthold kontakt med venner og familie på en enkel måte! </p>
      <h4>For deg som ønsker kontakt!</h4>
    </div>
  </div>
);

export default Possibility;
