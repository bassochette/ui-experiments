import { FunctionComponent } from 'react';
import { ProfileCard } from './ProfileCard';
import { Demo } from '../Demo/Demo';

export const ProfileCardDemo: FunctionComponent = () => {
  return (
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
  );
};
