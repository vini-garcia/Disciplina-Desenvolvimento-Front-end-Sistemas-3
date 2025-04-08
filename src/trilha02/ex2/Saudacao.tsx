import { useState } from "react";

interface SaudacaoProps {
  nomeInicial: string;
}

function Saudacao({ nomeInicial }: SaudacaoProps) {
  const [nome, setNome] = useState(nomeInicial);
  const [novoNome, setNovoNome] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Olá, {nome}!</h1>
      <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        placeholder="Digite um novo nome"
      />
      <button onClick={() => setNome(novoNome)}>Atualizar</button>
    </form>
  );
}

export default Saudacao;
