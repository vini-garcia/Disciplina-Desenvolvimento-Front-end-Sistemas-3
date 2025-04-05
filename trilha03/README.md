Exercício 1: Criando um sistema de navegação
Objetivo: Criar um sistema de navegação com React Router e TypeScript.

Requisitos:
Configure o React Router no App.tsx.
Crie três páginas: Home.tsx, About.tsx e Contact.tsx.
Crie um menu de navegação com Link para acessar cada página.


Exercício 2: Passagem de parâmetros via URL
Objetivo: Criar uma rota dinâmica que receba um name como parâmetro e exiba o nome de um animal.

Requisitos:
Criar uma página Animal.tsx que receba um parâmetro name pela URL.
Utilizar useParams para capturar o parâmetro e exibi-lo na tela.
Criar uma rota dinâmica /animal/:name.


Exercício 3: Redirecionamento com useNavigate
Objetivo: Criar um botão que, ao ser clicado, redirecione o usuário para outra página.

Requisitos:
Criar um botão na página Home.tsx que, ao ser clicado, leve o usuário para /about.
Utilizar useNavigate para fazer o redirecionamento.


Exercício 4: Sistema de Reservas de Hotel com React Router e TypeScript
Criar três páginas principais:
Home.tsx (Página inicial)
Rooms.tsx (Lista de quartos disponíveis)
RoomDetails.tsx (Detalhes de um quarto específico)
Utilizar useParams para capturar o ID do quarto na URL.
Criar um botão na página de detalhes do quarto para simular uma reserva, redirecionando o usuário para uma página de sucesso (BookingSuccess.tsx).
Criar um menu de navegação com Link.