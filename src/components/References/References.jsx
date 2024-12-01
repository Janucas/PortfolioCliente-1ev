import "./References.css";

function References() {
  const references = [
    { name: "Jane Smith", contact: "jane@example.com" },
    { name: "John Doe", contact: "john@example.com" },
  ];

  return (
    <section id="references" className="references">
      <h2 className="references-title">References</h2>
      <ul className="references-list">
        {references.map((ref, index) => (
          <li key={index} className="references-item">
            <h3>{ref.name}</h3>
            <p>{ref.contact}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default References;
