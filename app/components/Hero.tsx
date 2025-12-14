import { Link } from 'react-router';
import type { HeroProps } from '~/types';

const Hero = ({
  name = '[NAME]',
  biography = 'Soy apasionado de la tecnología y el diseño; convierto ideas en experiencias web funcionales y bien diseñadas.',
}: HeroProps) => {
  return (
    <header className='text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300'>
      <h2 className='text-4xl font-bold mb-4'> Hola, soy {name}! 👋</h2>
      <p className='text-lg text-gray-300 max-w-2xl mx-auto mb-6'>
        {biography}
      </p>
      <div className='flex justify-center gap-4'>
        <Link
          to='/projects'
          className='bg-blue-600 border border-gray-300 text-white px-6 py-2 rounded hover:bg-blue-700 transition'
        >
          Ver Projectos
        </Link>
        <Link
          to='/contact'
          className='bg-red-700 border border-gray-300 text-white px-6 py-2 rounded hover:bg-red-800 transition'
        >
          Contactame
        </Link>
      </div>
    </header>
  );
};

export default Hero;
