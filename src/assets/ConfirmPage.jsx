import './ConfirmPage.css';
import { useState, useEffect } from 'react';



export default function ConfirmPage(props) {


  let [vote, setVote] = useState(parseInt(localStorage.getItem('voting')) || 0);

  useEffect(() => {
    setVote(localStorage.setItem('voting', JSON.stringify(vote)));
  }, [vote]);

  useEffect(() => {
    const count = localStorage.getItem('voting');
    setVote(JSON.parse(count));
  })




  const handleVoteChange = () => {
    setVote(v => v - 1)
    console.log(vote);
    setTimeout(() => {
      props.onChange();
    }, 500);

  }

  const handleDone = () => {

    props.onConfirm();
  }

  return (
    <div className='confrimPageContainer'>
      <div className='confirmformContainer'>
        <h3>Please confirm your vote!</h3>
        <p>You voted for:</p> <span>{props.votedCand}</span>
        <div className='confirmButtonContainer' >
          <button onClick={handleVoteChange} id='change' >Change Vote</button>
          <button onClick={handleDone} id='done' >Done</button>
        </div>
      </div>
    </div>
  )
}