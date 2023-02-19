import './CandidateCard.css'
import { useState } from 'react';

function CandidateCard(props) {
  const candidateData = [
    {
      id: 1,
      src: 'src/assets/imgs/monkey.jpg',
      name: 'Banana Mo',
      desc: 'More trees, more bananas, man!',
    },
    {
      id: 2,
      src: 'src/assets/imgs/turtle.jpg',
      name: 'Turbo Turt',
      desc: 'Speed limit increase for everyone!'
    },
    {
      id: 3,
      src: 'src/assets/imgs/cat.jpg',
      name: 'Colt Kitty',
      desc: 'Naptime for all!',
    },
    {
      id: 4,
      src: 'src/assets/imgs/owl.jpg',
      name: 'Owcturnal',
      desc: 'Nighttime school!',
    },
  ];

  const [name, setName] = useState('');

  const handleVoteCount = (candidateName) => {
    setName(candidateName);
    console.log(candidateName);
    props.onVoting(candidateName);

  };

  const candidateCards = candidateData.map((candidate) => {
    return (
      <article key={candidate.id} className='CandidateCard'>
        <img src={candidate.src} alt={candidate.name} />
        <h3>{candidate.name}</h3>
        <p>{candidate.desc}</p>
        <button onClick={() => handleVoteCount(candidate.name)}>Vote for Candidate!</button>
        <footer className='linkContainer'>
          <span>Current Number of votes</span>
          <span>0</span>
        </footer>
      </article>
    );
  });

  return <>{candidateCards}</>;
}


export default CandidateCard;