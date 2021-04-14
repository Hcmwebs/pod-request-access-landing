import { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState({});
  const emailPattern = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(
    email
  );

  const handleChange = (e) => {
    setEmail(e.target.value.trim());
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
    } else if (!emailPattern) {
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
