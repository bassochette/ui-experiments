import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import * as css from './profileCard.module.scss';
import { LinkIcon } from './LinkIcon/LinkIcon';

export interface ProfileCardProps {
  name: string;
  profilePicture: string;
  github?: string;
  twitter?: string;
  devto?: string;
}

export const ProfileCard: FunctionComponent<ProfileCardProps> = ({
  profilePicture,
  name,
  github,
  twitter,
  devto,
}) => {
  const { t } = useTranslation();

  return (
    <div className={css['card-container']}>
      <p className={css['name']}>{name}</p>
      <section className={css['picture-container']}>
        <img
          className={css['picture']}
          src={profilePicture}
          alt={t('ProfileCard.pictureAlt', { name })}
        />
      </section>
      <section className={css['links']}>
        {github && (
          <LinkIcon
            image={'/vendors/github/PNG/GitHub-Mark-120px-plus.png'}
            link={`https://github.com/${github}`}
            alt={t('ProfileCard.githubAlt', { name })}
          />
        )}
        {twitter && (
          <LinkIcon
            image={
              '/vendors/twitter/Twitter logo/PNG/2021 Twitter logo - black.png'
            }
            link={`https://twitter.com/${twitter}`}
            alt={t('ProfileCard.twitterAlt', { name })}
          />
        )}
        {devto && (
          <LinkIcon
            image={'/vendors/devto/dev-black.png'}
            link={`https://dev.to/${devto}`}
            alt={t('ProfileCard.devtoAlt', { name })}
          />
        )}
      </section>
    </div>
  );
};
