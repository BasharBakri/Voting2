import './Login.css';
import { useState } from 'react';
import { voterData } from './voterData';



export default function Login(props) {
  const [enteredEmail, setEmail] = useState('');
  const [enteredPassword, setPassword] = useState('');
  const [errorMsg, setEorrorMsg] = useState('');


  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  console.log(enteredEmail);

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const voter = voterData.find((voter) => voter.email.toLocaleLowerCase() === enteredEmail.toLocaleLowerCase() && voter.password === enteredPassword);
    if (voter) {
      props.onLogin();
      props.onSaveUser(voter.name);
      props.onSaveType(voter.type);
    }
    else { setEorrorMsg('Invalid login information. Please try again') }
  }


  return (
    <div className='loginPageContainer'>

      <h2>Welcome to the Animal Kingdom voting website</h2>
      <div className='loginFormContainer'>
        <h3>Please login to your Account</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" >Email: </label>
          <input placeholder='Please enter your email' type="email"
            onChange={emailChangeHandler}
            value={enteredEmail}
          />
          <label htmlFor="password">Password: </label>
          <input type="password"
            onChange={passwordChangeHandler}
            value={enteredPassword} />
          <button type='submit' >LOG IN</button>
        </form>
        <p>{errorMsg}</p>
      </div>
    </div>
  )
}