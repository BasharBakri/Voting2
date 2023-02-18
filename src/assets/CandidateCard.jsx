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

  const [votes, setVotes] = useState({});

  const handleVoteCount = (id) => {
    setVotes(prevState => {
      const updatedVotes = { ...prevState };
      updatedVotes[id] = (updatedVotes[id] || 0) + 1;
      return updatedVotes;
    });
    props.onVoting();

  };

  const candidateCards = candidateData.map((candidate) => {
    const candidateVotes = votes[candidate.id] || 0;
    return (
      <article key={candidate.id} className='CandidateCard'>
        <img src={candidate.src} alt={candidate.name} />
        <h3>{candidate.name}</h3>
        <p>{candidate.desc}</p>
        <button onClick={() => handleVoteCount(candidate.id)}>Vote for Candidate!</button>
        <footer className='linkContainer'>
          <span>Current Number of votes</span>
          <span>{candidateVotes}</span>
        </footer>
      </article>
    );
  });

  return <>{candidateCards}</>;
}


export default CandidateCard;