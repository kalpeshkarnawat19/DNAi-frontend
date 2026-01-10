import "../css/dnabackground.css";

export default function DnaBackground() {
  return (
    <div className="dna-background">
      <div className="dna-helix">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="strand" style={{ "--s": i }} />
        ))}
      </div>
    </div>
  );
}
