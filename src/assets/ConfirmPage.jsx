import './ConfirmPage.css';



export default function ConfirmPage(props) {

  const handleVoteChange = () => {
    props.onChange();
  }

  const handleDone = () => {
    props.onConfirm();
  }

  return (
    <div className='confrimPageContainer'>
      <div className='confirmformContainer'>
        <h3>Please confirm your vote!</h3>
        <p>You voted for:</p> <span>testcat</span>
        <div className='confirmButtonContainer' >
          <button onClick={handleVoteChange} id='change' >Change Vote</button>
          <button onClick={handleDone} id='done' >Done</button>
        </div>
      </div>
    </div>
  )
}