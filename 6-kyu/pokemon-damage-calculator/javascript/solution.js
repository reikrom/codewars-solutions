function calculateDamage(yourType, opponentType, attack, defense){
  let effectiveness = 1;
  let battleTypes = {
    fire: {
      superEffective: 'grass' ,
      neutral: 'electric',
      notEffective: ['fire','water'],
    },
    water:{
      superEffective: 'fire' ,
      neutral: '',
      notEffective: ['water','grass','electric'],
    },
    grass: {
      superEffective: 'water' ,
      neutral: 'electric',
      notEffective: ['grass','fire'],
    },
    electric: {
      superEffective: 'water' ,
      neutral: ['fire','grass'],
      notEffective: ['electric'],
    }
  }
  if (battleTypes[yourType].superEffective.includes(opponentType)) effectiveness = 2
  else if (battleTypes[yourType].notEffective.includes(opponentType)) effectiveness = 0.5
  return 50 * (attack / defense) * effectiveness
}