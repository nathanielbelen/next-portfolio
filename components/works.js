import Work from './work'

const works = [
  { title: 'Starkfront', description: 'ecommerce site', link: 'starkfront'},
  { title: 'Apples-to-Oranges', description: 'social game night application' , link: 'apples'},
  { title: 'Project Atelier Back-end', description: 'microservice oriented backend' , link: 'atelier'},
  { title: 'ouronlygameisroulette', description: 'roulette game' , link: 'ouronlygameisroulette'},
]

export default function Works() {
  return (
    <div className='flex flex-wrap'>
      {works.map((work, i) => (
        <Work info={work} key={i} />
      ))}
    </div>
  );
}
