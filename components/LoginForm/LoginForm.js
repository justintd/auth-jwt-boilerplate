import { useFormik } from 'formik';

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      const { email, password } = values;
      // auth here
    },
  });

  return (
    <div className="flex justify-center w-full py-64">
      <form
        className="flex flex-col items-center font-body shadow-md border max-w-xl w-full px-6 mx-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="font-bold text-3xl align-center mt-5">Log In</div>
        <input
          className="border rounded focus:outline-none mt-6 p-3 w-full"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email address"
        ></input>
        <input
          className="border rounded focus:outline-none mt-6 p-3 w-full"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
        ></input>
        <button
          className="rounded-full bg-gray-700 text-white mt-6 py-3 w-full"
          type="submit"
        >
          Log In
        </button>
        <button className="rounded-full bg-gray-700 text-white mt-6 py-3 w-full mb-10">
          Google
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
