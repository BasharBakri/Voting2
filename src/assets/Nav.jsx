import './Nav.css';



export default function Nav(props) {



  const handleLogout = () => {
    props.onLogout();
  }


  return (
    <nav className='navBarContainer'>
      <div className='userName' >Username: {props.loggedUser}</div>
      <button type='submit' onClick={handleLogout} >Log Out</button>
    </nav>
  )
}