import salon from '../salon.config.js';
import Icon from './Icons.jsx';

export default function SocialLinks({ className = '' }) {
  const { instagram, yelp } = salon.social;
  return (
    <div className={'social-links ' + className}>
      <a href={instagram.url} target="_blank" rel="noreferrer" className="social-link">
        <Icon name="instagram" size={20} />
        <span>{instagram.handle}</span>
      </a>
      <a href={yelp.url} target="_blank" rel="noreferrer" className="social-link">
        <Icon name="yelp" size={20} />
        <span>Yelp</span>
      </a>
    </div>
  );
}
