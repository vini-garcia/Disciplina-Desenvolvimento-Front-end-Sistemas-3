import React, { useState } from "react";

interface NovoUsuario {
  name: string;
  email: string;
}

const CreateNewUser = () => {
  const [usuario, setUsuario] = useState<NovoUsuario>({
    name: "",
    email: "",
  });
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        throw new Error(`Erro ao cadastrar usuário: ${response.status}`);
      }

      const data = await response.json();
      setMensagem(`Usuário ${data.name} cadastrado com sucesso! ID: ${data.id}`);
      setUsuario({ name: "", email: "" });
    } catch (error) {
      setMensagem(error instanceof Error ? error.message : "Ocorreu um erro desconhecido");
    }
  };

  return (
    <div>
      <h2>Cadastrar Novo Usuário</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={usuario.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">"Cadastrar"</button>
      </form>

      {mensagem && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            color: mensagem.includes("sucesso") ? "#00ff3c" : "#ff0019",
          }}
        >
          {mensagem}
        </div>
      )}
    </div>
  );
};

export default CreateNewUser;
