export default function Activity({ activity }) {
  return (
    <div>
      {activity && <h2>Activitat:</h2>}
      <p>{activity}</p>
    </div>
  );
}
