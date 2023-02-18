import './Nav.css';



export default function Nav(props) {
  let testUser = 'test user'


  const handleLogout = () => {
    props.onLogout();
  }


  return (
    <nav className='navBarContainer'>
      <div className='userName' >Username: {testUser}</div>
      <button type='submit' onClick={handleLogout} >Log Out</button>
    </nav>
  )
}