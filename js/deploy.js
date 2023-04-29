const speakers = [
  {
    img: './img/mobile/gustavo-cerati.png',
    name: 'Gustavo Cerati',
    title: 'Guitar/Singer',
    description: 'The master mind inside Soda Stereo',
  },

  {
    img: './img/mobile/gustavo-cerati.png',
    name: 'Zeta Bosio',
    title: 'Guitar',
    description: 'The right hand of Gustavo',
  },

  {
    img: './img/mobile/gustavo-cerati.png',
    name: 'Charly Alberty',
    title: 'Drums',
    description: 'Great Drummer Born in Buenos Aires',
  },

  {
    img: './img/mobile/gustavo-cerati.png',
    name: 'Oscar Moro',
    title: 'Drums',
    description: 'Former Seru Giran, Born in Santa Fe, Argentina',
  },

  {
    img: './img/mobile/gustavo-cerati.png',
    name: 'Charly Garcia',
    title: 'Paino/Singer',
    description: 'The Creator of Rock Nacional',
  },

  {
    img: './img/mobile/gustavo-cerati.png',
    name: 'Luis Alberto Spinetta',
    title: 'Guitar/Singer',
    description: 'The impulse of Rock Nacional',
  },
];

const speaker = document.querySelector('#speakers');
const featuredSpeakers = document.createElement('div');
const flexcards = document.createElement('div');

featuredSpeakers.innerHTML = `<h2>Featured Speakers</h2>
<hr class="hr">`;
speaker.appendChild(featuredSpeakers);

flexcards.className = 'flex-card';
flexcards.innerHTML = `<div class="card">
<div class="card-img-div">
  <img src=${speakers[0].img} class="card-img">
</div>
<div class="content-card">
  <h4><b>${speakers[0].name}</b></h4>
  <p class="speaker_title">${speakers[0].title}</p>
  <hr class="hr">
  <p>${speakers[0].description}</p>
</div>
</div>
<div class="card">
<div class="card-img-div">
  <img src=${speakers[1].img} class="card-img">
</div>
<div class="content-card">
  <h4><b>${speakers[1].name}</b></h4>
  <p class="speaker_title">${speakers[1].title}</p>
  <hr class="hr">
  <p>${speakers[1].description}</p>
</div>
</div>
<div class="card">
<div class="card-img-div">
  <img src=${speakers[2].img} class="card-img" alt="Avatar">
</div>
<div class="content-card">
  <h4><b>${speakers[2].name}</b></h4>
  <hr class="hr">
  <p>${speakers[2].description}</p>
</div>
</div>
<div class="card">
<div class="card-img-div">
  <img src=${speakers[3].img} class="card-img" alt="Avatar">
</div>
<div class="content-card">
  <h4><b>${speakers[3].name}</b></h4>
  <p class="speaker_title">${speakers[3].title}</p>
  <hr class="hr">
  <p>${speakers[3].description}</p>
</div>
</div>
<div class="card">
<div class="card-img-div">
  <img src=${speakers[4].img} class="card-img" alt="Avatar">
</div>
<div class="content-card">
  <h4><b>${speakers[4].name}</b></h4>
  <p class="speaker_title">${speakers[4].title}</p>
  <hr class="hr">
  <p>${speakers[4].description}</p>
</div>
</div>
<div class="card">
<div class="card-img-div">
  <img src=${speakers[5].img} class="card-img" alt="Avatar">
</div>
<div class="content-card">
  <h4><b>${speakers[5].name}</b></h4>
  <p class="speaker_title">${speakers[5].title}</p>
  <hr class="hr">
  <p>${speakers[5].description}</p>
</div>
</div>
<div class="button-div">
<button class="more">More <img src="./img/mobile/chevron-down-solid.svg" alt="down-solid" class="down-solid-img"></button>
</div>`;

speaker.appendChild(flexcards);