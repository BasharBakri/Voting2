import './CandidateCard.css'
import { useState, useEffect } from 'react';

function CandidateCard(props) {
  const [candidateData, setCandidateData] = useState([
    {
      id: 1,
      src: 'src/assets/imgs/monkey.jpg',
      name: 'Banana Mo',
      desc: 'More trees, more bananas, man!',
      numberOfVotes: 0
    },
    {
      id: 2,
      src: 'src/assets/imgs/turtle.jpg',
      name: 'Turbo Turt',
      desc: 'Speed limit increase for everyone!',
      numberOfVotes: 0
    },
    {
      id: 3,
      src: 'src/assets/imgs/cat.jpg',
      name: 'Colt Kitty',
      desc: 'Naptime for all!',
      numberOfVotes: 0
    },
    {
      id: 4,
      src: 'src/assets/imgs/owl.jpg',
      name: 'Owcturnal',
      desc: 'Nighttime school!',
      numberOfVotes: 0
    },
  ]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('candidateData'));
    if (storedData) {
      setCandidateData(storedData);
    }
  }, []);





  const handleVoteCount = (candidate) => {
    const updatedCandidates = candidateData.map((cand) =>
      cand.name === candidate.name
        ? { ...cand, numberOfVotes: candidate.numberOfVotes + 1 }
        : { ...cand }
    );

    setCandidateData(updatedCandidates);
    localStorage.setItem('candidateData', JSON.stringify(updatedCandidates));
    console.log(candidate);
    props.onVoting(candidate.name, candidate.numberOfVotes);

  };



  const candidateCards = candidateData.map((candidate) => {
    return (
      <article key={candidate.id} className='CandidateCard'>
        <img src={candidate.src} alt={candidate.name} />
        <h3>{candidate.name}</h3>
        <p>{candidate.desc}</p>
        <button onClick={() => handleVoteCount(candidate)}>Vote for Candidate!</button>
        <footer className='linkContainer'>
          <span>Current Number of votes</span>
          <span>{candidate.numberOfVotes}</span>
        </footer>
      </article>
    );
  });

  return <>{candidateCards}</>;
}


export default CandidateCard;