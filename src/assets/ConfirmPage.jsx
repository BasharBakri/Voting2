import './ConfirmPage.css';



export default function ConfirmPage() {








  return (
    <div className='confrimPageContainer'>
      <div className='confirmformContainer'>
        <h3>Please confirm your vote!</h3>
        <p>You voted for:</p> <span>testcat</span>
        <div className='confirmButtonContainer' >
          <button id='change' >Change Vote</button>
          <button id='done' >Done</button>
        </div>
      </div>
    </div>
  )
}