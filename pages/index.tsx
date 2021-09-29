import { Demo } from '../components/Demo/Demo';
import { ProfileCard } from '../components/ProfileCard/ProfileCard';

export const Home = (): JSX.Element => {
  return (
    <div className="app">
      <Demo title="Profile card">
        <ProfileCard
          name="Julien Prugne"
          profilePicture="/images/ProfileCard/mugshot_julien.jpg"
          github="bassochette"
          twitter="bassochette"
          devto="bassochette"
        />

        <ProfileCard
          name="Webeleon"
          profilePicture="/images/ProfileCard/logo.png"
          github="webeleon"
          devto="webeleon"
        />
      </Demo>
    </div>
  );
};

export default Home;
