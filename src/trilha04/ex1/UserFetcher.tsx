import React, { useState, useCallback } from "react";

interface Usuario {
  id: number;
  name: string;
  email: string;
}

const BuscarUsuario = () => {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [erro, setErro] = useState("");

  const buscarUsuario = useCallback(async () => {
    if (!id) {
      setErro("Por favor, insira um ID");
      return;
    }

    setUsuario(null);
    setErro("");

    try {
      const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

      if (!resposta.ok) {
        throw new Error(`Usuário não encontrado (Status: ${resposta.status})`);
      }

      const dados: Usuario = await resposta.json();
      setUsuario(dados);
    } catch (error) {
      setErro(error instanceof Error ? error.message : "Erro desconhecido");
    }
  }, [id]);

  return (
    <div>
      <h2>Buscar Usuário</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Digite o ID do usuário"
        />
        <button onClick={buscarUsuario}>Buscar</button>
      </form>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {usuario && (
        <div>
          <h3>Dados do Usuário</h3>
          <p>
            <strong>Nome:</strong> {usuario.name}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default BuscarUsuario;
