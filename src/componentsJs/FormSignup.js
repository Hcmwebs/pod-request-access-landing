import useForm from './useForm';
import validate from './Validate';

const FormSignup = (submitForm) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='formGroup'>
        <input
          // type='email'
          name='email'
          id='email'
          placeholder='Email address'
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <button className='primaryBtn' type='submit'>
        Request access
      </button>
    </form>
  );
};

export default FormSignup;
