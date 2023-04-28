const details = [
  {
    img: './img/mobile/gustavo-cerati.png',
    title: 'Gustavo Cerati',
    sub_title: 'Singer',
    paragraph: 'Author from all of his songs, known all over the world, one of the greatest',
  },

  {
    img: './img/mobile/gustavo-cerati.png',
    title: 'Zeta Bosio',
    sub_title: 'Guitar Player',
    paragraph: 'The right hand of Gustavo in the stage. Born in San Fernando, Buenos Aires.',
  },

  {
    img: './img/mobile/gustavo-cerati.png',
    title: 'Charly Alberti',
    sub_title: 'Drummer',
    paragraph: 'Drummer of one the greatest bands ever. Born in Buenos Aires.',
  },

  {
    img: './img/mobile/gustavo-cerati.png',
    title: 'Charly Garcia',
    sub_title: 'Piano/Singer',
    paragraph: 'The Famous -Cuna del Rock-, the creator of the Rock Nacional.',
  },

  {
    img: './img/mobile/gustavo-cerati.png',
    title: 'Luis Alberto Spinnetta',
    sub_title: 'Guitar/Singer',
    paragraph: 'Know for his complexity in the guitar, angelical voice, the impulse if the Rock Nacional',
  },

];

const cardWorks = document.querySelector('#festival-members');

cardWorks.className = 'members';
for (let i = 0; i < details.length; i += 1) {
  const workCard = document.createElement('section');
  const workCardDiv = document.createElement('div');
  workCardDiv.className = 'featured-speakers';
  cardWorks.appendChild(workCard);
  workCard.className = 'members';
  workCard.innerHTML = `<div class="members-team">
  <div class="members-img-div">
    <img src="${details[i].img}" alt="Gustavo-Cerati" class="members-img">
  </div>
  <div class="members-text">
    <h4 class="members-h4">${details[i].title}</h4>
    <h5 class="members-h5">${details[i].sub_title}</h5>
    <p class="members-p">${details[i].paragraph}</p>
  </div>
 </div>`;
}
