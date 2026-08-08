export default function Dust() {
  const particles = [
    { left: "75%", top: "18%" },
    { left: "82%", top: "30%" },
    { left: "70%", top: "42%" },
    { left: "90%", top: "20%" },
    { left: "88%", top: "58%" },
    { left: "78%", top: "68%" },
    { left: "65%", top: "55%" },
    { left: "92%", top: "75%" },
    { left: "72%", top: "80%" },
    { left: "84%", top: "12%" },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <span
          key={i}
          className="dust"
          style={{
            left: p.left,
            top: p.top,
          }}
        />
      ))}
    </>
  );
}