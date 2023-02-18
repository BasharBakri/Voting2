import './CandidateCard.css'

function CandidateCard(props) {
  const candidateData = [
    {
      src: 'src/assets/imgs/monkey.jpg',
      name: 'Banana Mo',
      desc: 'More trees, more bananas, man!',
    },
    {
      src: 'src/assets/imgs/turtle.jpg',
      name: 'Turbo Turt',
      desc: 'Speed limit increase for everyone!'
    },
    {
      src: 'src/assets/imgs/cat.jpg',
      name: 'Colt Kitty',
      desc: 'Naptime for all!',
    },
    {
      src: 'src/assets/imgs/owl.jpg',
      name: 'Owcturnal',
      desc: 'Nighttime school!',
    },
  ];

  const candidateCard = candidateData.map((candidate) => {
    return <article className='CandidateCard'>
      <img src={candidate.src} alt="" />
      <h3>{candidate.name}</h3>
      <p>{candidate.desc}</p>
      <button>Vote for Candidate!</button>

      <footer className='linkContainer'>
        <a href="https://www.google.com/">Current Numer of votes</a>
        <a href="https://www.google.com/">11</a>
      </footer>
    </article>

  })

  return (<>{candidateCard}</>)
}

export default CandidateCard;