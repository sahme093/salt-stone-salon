import salon from '../salon.config.js';
import Icon from './Icons.jsx';

export default function About() {
  const { about } = salon;
  return (
    <section className="section about-section" id="about">
      <div className="about-intro">
        <h2 className="section-title">{about.title.lead} <em>{about.title.accent}</em></h2>
        <p className="script">{about.script}</p>
        <p className="about-text">{about.text}</p>
      </div>
      <ul className="highlights">
        {about.highlights.map((h) => (
          <li key={h.label} className="highlight">
            <span className="highlight-icon"><Icon name={h.icon} /></span>
            {h.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
