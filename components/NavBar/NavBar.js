function NavBar() {
  return (
    <div className="flex items-center justify-end py-5 font-body font-bold text-white bg-gray-800 w-full absolute">
      <ul className="mx-32">
        <li className="inline-block mr-10">
          <a href="/">Login</a>
        </li>
        <li href="#/" className="inline-block">
          <a href="/register">Register</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
