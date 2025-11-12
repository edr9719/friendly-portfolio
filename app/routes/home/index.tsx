import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Edgar's Portfolio" },
    { name: 'description', content: 'Custom Portfolio website.' },
  ];
}

export default function Home() {
  return (
    <section>
      <h2 className='text-3xl font-bold text-white mb-2'>My App</h2>
    </section>
  );
}
