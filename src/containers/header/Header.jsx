import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/business-3d-colleagues.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">VennDi- En digital samtalepartner og aktivitør</h1>
      <p>Ensomhet er et folkehelesproblem. 30% av de over 70 år oppgir at de føler seg ensomme.  </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Din e-postadresse" />
        <button type="button">Meld interesse</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
