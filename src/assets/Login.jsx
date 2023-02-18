import './Login.css';



export default function Login() {








  return (
    <div className='loginPageContainer'>

      <h2>Welcome to the animal Kingdom voting website</h2>
      <div className='loginFormContainer'>
        <h3>Please login to your Account</h3>
        <form>
          <label htmlFor="email" >Email: </label>
          <input placeholder='Please enter your email' type="email" />
          <label htmlFor="password">Password: </label>
          <input type="password" />
          <p></p>
          <button type='submit' >LOG IN</button>
        </form>
      </div>
    </div>
  )
}