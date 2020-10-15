import { useFormik } from 'formik';

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: (values) => {
      handleUserCreation(values);
    },
  });

  return (
    <div className="flex justify-center w-full py-64">
      <form
        className="flex flex-col items-center font-body shadow-md border max-w-xl w-full px-6 mx-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="font-bold text-3xl align-center mt-5">Register</div>
        <input
          className="border rounded focus:outline-none mt-6 p-3 w-full"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          placeholder="First name"
        ></input>
        {formik.touched.firstName ? (
          <div className="self-start text-red-500 pl-3 pt-1">
            {formik.errors.firstName}
          </div>
        ) : null}
        <input
          className="border rounded focus:outline-none mt-6 p-3 w-full"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          placeholder="Last name"
        ></input>
        {formik.touched.lastName ? (
          <div className="self-start text-red-500 pl-3 pt-1">
            {formik.errors.lastName}
          </div>
        ) : null}
        <input
          className="border rounded focus:outline-none mt-6 p-3 w-full"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email address"
        ></input>
        {formik.touched.email ? (
          <div className="self-start text-red-500 pl-3 pt-1">
            {formik.errors.email}
          </div>
        ) : null}
        <input
          className="border rounded focus:outline-none mt-6 p-3 w-full"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password"
        ></input>
        {formik.touched.password ? (
          <div className="self-start text-red-500 pl-3 pt-1">
            {formik.errors.password}
          </div>
        ) : null}
        <input
          className="border rounded focus:outline-none mt-6 p-3 w-full"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          placeholder="Confirm Password"
        ></input>
        {formik.touched.confirmPassword ? (
          <div className="self-start text-red-500 pl-3 pt-1">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
        <button
          className="rounded-full bg-gray-700 text-white mt-6 py-3 w-full"
          type="submit"
        >
          Register
        </button>
        <button className="rounded-full bg-gray-700 text-white mt-6 py-3 w-full mb-10">
          Google
        </button>
      </form>
    </div>
  );
}

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstname = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.password !== values.confirmPassword) {
    errors.password = 'Passwords must match';
    errors.confirmPassword = 'Passwords must match';
  } else if (values.password < 6) {
    errors.password = 'Password must be greater than 6 characters';
    errors.confirmPassword = 'Password must be greater than 6 characters';
  }

  return errors;
};

const handleUserCreation = async (values) => {
  const { firstName, lastName, email, password } = values;

  // try {
  //   const res = await firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password);

  //   const user = firebase.auth().currentUser;
  //   await user.sendEmailVerification();

  //   await db.collection('users').doc(res.user.uid).set({
  //     firstName,
  //     lastName,
  //   });

  //   alert(`Successfully registered an account!`);
  // } catch (error) {
  //   let errorMessage = error.message;
  //   alert(`${errorMessage}`);
  // }
};

export default RegisterForm;
