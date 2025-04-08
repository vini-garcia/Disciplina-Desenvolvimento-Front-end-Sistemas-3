import { Link } from "react-router-dom";

function Rooms() {
  const rooms = [
    { id: 1, name: "Quarto Standard" },
    { id: 2, name: "Quarto Deluxe" },
    { id: 3, name: "Suíte Presidencial" },
  ];

  return (
    <div>
      <h1>Quartos Disponíveis</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;
