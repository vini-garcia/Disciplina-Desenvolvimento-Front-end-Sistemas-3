import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./trilha01/ex1/Button";
import ProfileCard from "./trilha01/ex2/ProfileCard";
import Card from "./trilha01/ex3/Card";
import Gallery from "./trilha01/ex4/Gallery";
import Navbar from "./trilha01/ex5/Navbar";
import Form from "./trilha01/ex6/Form";
import Contador from "./trilha02/ex1/Contador";
import Saudacao from "./trilha02/ex2/Saudacao";
import ListaTarefas from "./trilha02/ex3/ListaTarefas";
import ToggleVisibilidade from "./trilha02/ex4/ToggleVisibilidade";
import Home from "./trilha03/ex1/Home";
import About from "./trilha03/ex1/About";
import Contact from "./trilha03/ex1/Contact";
import Animal from "./trilha03/ex2/Animal";
import Rooms from "./trilha03/ex3/Rooms";
import RoomDetails from "./trilha03/ex3/RoomDetails";
import BookingSuccess from "./trilha03/ex3/BookingSuccess";

const App = () => (
  <main>
    <section>
      <h1>Trilha 01</h1>

      <div>
        <h2>Exercício 01</h2>
        <Button />
      </div>

      <div>
        <h2>Exercício 02</h2>
        <ProfileCard />
      </div>

      <div>
        <h2>Exercício 03</h2>
        <Card />
      </div>

      <div>
        <h2>Exercício 04</h2>
        <Gallery />
      </div>

      <div>
        <h2>Exercício 05</h2>
        <Navbar />
      </div>

      <div>
        <h2>Exercício 06</h2>
        <Form />
      </div>
    </section>
    <hr />
    <section>
      <h1>Trilha 02</h1>
      <div>
        <h2>Exercício 01</h2>
        <Contador inicial={5} />
      </div>

      <div>
        <h2>Exercício 02</h2>
        <Saudacao nomeInicial="Vinicius" />
      </div>

      <div>
        <h2>Exercício 03</h2>
        <ListaTarefas tarefasIniciais={["Ler o livro Clean Code", "Limpar a casa"]} />
      </div>

      <div>
        <h2>Exercício 04</h2>
        <ToggleVisibilidade texto="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." />
      </div>
    </section>
    <hr />
    <section>
      <h1>Trilha 03</h1>
      <div>
        <Router>
          <div>
            <nav>
              <h2>Exercício 01 e 03</h2>
              <Link to="/">Página inicial</Link> | <Link to="/about">Sobre nós</Link> |
              <Link to="/contact">Contato</Link>
            </nav>
          </div>

          <div>
            <h2>Exercício 02</h2>
            <Link to={`/animal/gato`}>Animal</Link>
          </div>

          <div>
            <h2>Exercício 04</h2>
            <Link to={`/rooms`}>Página Inicial - Reservas</Link>
          </div>

          <h1>Visualização dos exercícios da Trilha 03:</h1>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/animal/:name" element={<Animal />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/room/:id" element={<RoomDetails />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
          </Routes>
        </Router>
      </div>
    </section>
  </main>
);

export default App;
