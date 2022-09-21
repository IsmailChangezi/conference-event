const openNav = document.getElementById('open');
const closeNav = document.getElementById('close');
const navLinks = document.querySelector('.lower-nav-ul');

openNav.addEventListener('click', () => {
  navLinks.classList.add('show');
  openNav.style.display = 'none';
  closeNav.style.display = 'block';
});

closeNav.addEventListener('click', () => {
  navLinks.classList.remove('show');
  closeNav.style.display = 'none';
  openNav.style.display = 'block';
});

const speakerArray = [
  {
    id: 1,
    name: 'Yochai Benkler',
    descOne:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    descTwo:
      'Benkler studies commons-based peer productions, and published his seminal book The Wealth of Network in 2006.',
    img: 'images/speaker_01.png',
  },
  {
    id: 2,
    name: 'SohYeong Noh',
    descOne: 'Director of Art Centre Nabi and a board member of CC Korea',
    descTwo:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.',
    img: 'images/speaker_02.png',
  },
  {
    id: 3,
    name: 'Lila Tretikov',
    descOne: 'Executive Director of the Wikimedia Foundation',
    descTwo:
      'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
    img: 'images/speaker_03.png',
  },
  {
    id: 4,
    name: 'Kilnam Chon',
    descOne: 'Director of Art Centre Nabi and a board member of CC Korea',
    descTwo:
      "Kilnam Chon is help to bring the internet to Asia and is an outspoken advocate for the open web and digital commons. in 2012 he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame",
    img: 'images/speaker_04.png',
  },
  {
    id: 5,
    name: 'Julia Leda',
    descOne: 'President of Young Pirates of Europe',
    descTwo:
      "European integration, political democracy and participation of youth trough online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
    img: 'images/speaker_05.png',
  },
  {
    id: 6,
    name: 'Ryan Merkley',
    descOne: 'CEO of Creative Commons, ex COO of the Mozilla foundation',
    descTwo:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
    img: 'images/speaker_06.png',
  },
];

const speakers = document.getElementById('speaker');

function generateSpeakerCard() {
  speakers.innerHTML = speakerArray
    .map(
      (x) => `
   
    <div class="speaker-cards-container">
      <div class="speaker-card">
        <div class="speaker-img">
          <img src=${x.img} alt="speaker 1">
        </div>
        <div class="speaker-desc">
          <h3>${x.name}</h3>
          <p class="para-red">
            ${x.descOne}
          </p>
          <hr>
          <p class="para-black">
           ${x.descTwo}
          </p>
        </div>
      </div>
    </div>
    `,
    )
    .join('');
}
generateSpeakerCard();
