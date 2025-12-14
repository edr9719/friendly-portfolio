import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Tony - Portafolio' },
    { name: 'description', content: 'Custom Portfolio website.' },
  ];
}

export default function Home() {
  return <section></section>;
}
