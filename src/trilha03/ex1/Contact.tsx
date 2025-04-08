import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contato</h1>
      <button onClick={() => navigate("/")}>Ir para página inicial</button>
    </div>
  );
}

export default Contact;
