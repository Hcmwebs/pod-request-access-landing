export default function validate(values) {
  let errors = {};

  //  validation  email
  if (!values.email) {
    errors.email = 'Oops! Please add your email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Oops! Please check your email';
  }

  return errors;
}
