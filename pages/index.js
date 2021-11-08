// our-domain.com/
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/41/BlogHer_08_-_Sesame_Street_Suite_%282682321763%29.jpg',
    address: '123 Sesame Street, NYC',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/930500/capsule_616x353.jpg',
    address:
      'Uncharted Backwaters, Unfashionable End, Western Spiral Arm, H2G2',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
