import { useState } from 'react';
import FormSignup from './FormSignup';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm () {
    setIsSubmitted(true)
  };

  return (
    <div>

      {!isSubmitted ? (
        <FormSignup submitForm={submitForm} />
      ) : (
        <div> "Thank you for subscribing"</div>
      )}
    </div>
  );
};

export default Form;
