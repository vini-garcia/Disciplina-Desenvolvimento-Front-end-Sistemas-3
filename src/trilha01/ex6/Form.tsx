import "./form.css";

function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Mensagem" rows={4} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
