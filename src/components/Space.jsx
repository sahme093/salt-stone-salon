import salon from '../salon.config.js';

export default function Space() {
  const { space } = salon;
  return (
    <section className="section space-section" id="salon">
      <div className="space-copy">
        <div className="eyebrow">The salon</div>
        <h2 className="section-title">{space.title.lead} <em>{space.title.accent}</em></h2>
        <p className="space-text">{space.text}</p>
        <ul className="amenities">
          {space.amenities.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
      <div className="space-photos">
        {space.photos.map((p) => (
          <img key={p.src} src={p.src} alt={p.alt} loading="lazy" />
        ))}
      </div>
    </section>
  );
}
