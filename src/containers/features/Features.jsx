import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Helsepåvirkning og endring i adferd',
    text: 'Det er sterke bevis og sammengenger mellom ensomhet og økt risiko for andre helsetilstander, som f.eks kardiovaskulær sykdom og hjerneslag, psykiske lidelser og kognitiv svikt, samt andre livsstilsrelaterte sykdommer. Risikoen for hjerneslag/hjertelidelser øker med hele 30% økt for de som kjenner på ensomhet og isolasjon.',
  },
  {
    title: 'Livskvalitet',
    text: 'En livsstil preget av ensomhet og isolasjon medfører adferdsmessige risikofaktorer som f.eks redusert fysisk aktivitet, dårligere kost, redusert etterlevelse av medisinsk behandling, økt forbruk av tobakk og alkohol m.m. Dette viser seg også å påvirke kvaliteten og kvantiteten av søvn, som igjen påviker en rekke fysiske helsetilstander som er av betydning for indre kapasitet.  ',
  },
  {
    title: 'Dødelighet',
    text: 'Et studie gjennomført i 2015 indikerte at sosial isolasjon og ensomhet er assosiert med henholdsvis 29 % og 26 % økt sannsynlighet for tidligere død. Sosial isolasjon og ensomhet påvikrer dødeligheten på samme måte som veletablerte risikofaktorer som fedme, redusert fysisk aktivitet, røyking, rusmisbruk og begrenset tilgang til helsetjenester.',
  },
  {
    title: 'Økonomisk kostnad',
    text: 'Sosial isolasjon og ensomhet pålegger samfunnet en stor økonomisk- og ressurskrevende byrde med sine alvorlige risikofaktorer og store utbredelse.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Konsekvensene av sosial isolasjon og ensomhet</h1>
      <p>Studier gjort av Verdens Helse Organisasjon (WHO)</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
