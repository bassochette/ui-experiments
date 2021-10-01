import { ButtonDemo } from '../components/Button/Button.demo';
import { ProfileCardDemo } from '../components/ProfileCard/ProfileCard.demo';

export const Home = (): JSX.Element => {
  return (
    <div className="app">
      <ButtonDemo />
      <ProfileCardDemo />
    </div>
  );
};

export default Home;
