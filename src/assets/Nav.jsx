import './Nav.css';



export default function Nav() {
  let testUser = 'test user'





  return (
    <nav className='navBarContainer'>
      <div className='userName' >Username: {testUser}</div>
      <button type='submit' >Log Out</button>
    </nav>
  )
}