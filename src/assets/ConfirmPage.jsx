import './ConfirmPage.css';
import { useState, useEffect } from 'react';



export default function ConfirmPage(props) {

  const jsonData = window.localStorage.getItem('candidateData');

  const storedData = JSON.parse(jsonData);
  console.log(props.votedCand);

  let votedCandidate = storedData.find((candidate) => candidate.name === props.votedCand);
  console.log(votedCandidate);

  const handleVoteChange = () => {
    props.noOfTheirVote - 1;
    setTimeout(() => {
      props.onChange();
    }, 500);

  };

  const handleDone = () => {

    props.onConfirm();
  };

  return (
    <div className='confrimPageContainer'>
      <div className='confirmformContainer'>
        <h3>Please confirm your vote!</h3>
        <p>You voted for:</p> <span>{props.votedCand}</span>
        <p>Number of votes for {props.votedCand}: {props.noOfTheirVote + 1}</p>
        <div className='confirmButtonContainer' >
          <button onClick={handleVoteChange} id='change' >Change Vote</button>
          <button onClick={handleDone} id='done' >Done</button>
        </div>
      </div>
    </div>
  );
}