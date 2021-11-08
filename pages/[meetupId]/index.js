// our-domain.com/<any variable>
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://cdn.cloudflare.steamstatic.com/steam/apps/930500/capsule_616x353.jpg"
      title="A New Meetup"
      address="Uncharted Backwaters, Unfashionable End, Western Spiral Arm, H2G2"
      description="This is a new meetup"
    />
  );
}

export default MeetupDetails;
