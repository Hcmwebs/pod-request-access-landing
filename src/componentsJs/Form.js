import { useState } from 'react';

const Form = () => {
  const pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState({});

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = formValid();
    if (validate) {
      setEmail('');
    }
  };

  const formValid = () => {
    const emailError = {};
    let isValid = true;

    if (!email) {
      emailError.noEmail = 'Oops! Please add your email';
      isValid = false;
    } else if (!pattern) {
      emailError.wrongPattern = 'Oops! Please check your email';
      isValid = false;
    }

    setEmailError(emailError);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='formGroup'>
        <input
          // type='email'
          name='email'
          id='email'
          placeholder='Email address'
          value={email}
          pattern={pattern}
          onChange={handleChange}
        />
        {Object.keys(emailError).map((key) => (
          <p>{emailError[key]}</p>
        ))}
      </div>

      <button type='submit'>Request access</button>
    </form>
  );
};

export default Form;
