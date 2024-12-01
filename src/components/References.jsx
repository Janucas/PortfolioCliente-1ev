import data from '../data/data.json';

function References() {
  return (
    <section id="references" className="mb-5">
      <h2>References</h2>
      <ul>
        {data.references.map((ref, index) => (
          <li key={index}>{ref.name} - {ref.relation}</li>
        ))}
      </ul>
    </section>
  );
}

export default References;
