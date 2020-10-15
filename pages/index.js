import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';
import LoginForm from '../components/LoginForm/LoginForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <LoginForm />
    </div>
  );
}
