import { Outlet } from 'react-router';
import Hero from '~/components/Hero';
const Home = () => {
  return (
    <>
      <Hero name='Tony' />
      <section className='max-w-6xl mx-auto px-6 my-8'>
        <Outlet />
      </section>
    </>
  );
};

export default Home;
