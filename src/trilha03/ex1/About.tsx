import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sobre Nós</h1>
      <button onClick={() => navigate("/")}>Ir para página inicial</button>
    </div>
  );
}

export default About;
