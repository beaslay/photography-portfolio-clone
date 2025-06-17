export default function Services() {
  const services = [
    { name: 'Rencontre 2\u00a0heures', price: '300\u00a0\u20ac' },
    { name: 'Soir\u00e9e \u00e9l\u00e9gante (2\u00a0h)', price: '400\u00a0\u20ac' },
    { name: 'Nuit compl\u00e8te', price: '2\u00a0000\u00a0\u20ac' },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Prestations & Tarifs</h2>
        <ul className="max-w-md mx-auto space-y-6">
          {services.map((s) => (
            <li key={s.name} className="flex justify-between border-b pb-3">
              <span>{s.name}</span>
              <span className="font-semibold">{s.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
