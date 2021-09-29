import { FunctionComponent } from 'react';
import * as css from './linkIcon.module.scss';

interface LinkIconProps {
  image: string;
  link: string;
  alt?: string;
}
export const LinkIcon: FunctionComponent<LinkIconProps> = ({
  image,
  link,
  alt,
}) => (
  <a href={link} className={css['container']}>
    <img src={image} alt={alt} className={css['img']} />
  </a>
);
