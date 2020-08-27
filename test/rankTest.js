const rankTest = require('ava');
const {voyageRisk} = require('../src/rank');

const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
rankTest('statement case 1. should return 0 when voyageRisk given voyage length = 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 0,
  };
  const result = voyageRisk(voyage);
  t.is(result,1);
});

