import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/Trash.svg";
import api from "../../services/api";

function Home() {
  // Estado para armazenar a lista de usuários vinda da API
  const [users, setUsers] = useState([]);

  // Refs são usados aqui para capturar os valores dos inputs de forma direta (Uncontrolled Components)
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  /**
   * Função assíncrona para buscar (GET) os usuários na API.
   * Atualiza o estado 'users' com a resposta.
   */
  async function getUsers() {
    try {
      const usersFromApi = await api.get("/usuarios");
      setUsers(usersFromApi.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  /**
   * Função para criar (POST) um novo usuário.
   * Pega os valores atuais dos inputs via 'current.value'.
   */
  async function createUsers() {
    try {
      await api.post("/usuarios", {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value,
      });
      // Após criar, recarrega a lista para mostrar o novo usuário
      getUsers();

      // Limpeza opcional dos campos
      inputName.current.value = "";
      inputAge.current.value = "";
      inputEmail.current.value = "";
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  /**
   * Função para deletar (DELETE) um usuário pelo ID.
   */
  async function deleteUsers(id) {
    try {
      await api.delete(`/usuarios/${id}`);
      // Atualiza a lista após a exclusão
      getUsers();
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  }

  /**
   * useEffect: Executa uma vez quando a tela é carregada.
   * Serve para buscar a lista inicial de usuários.
   */
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="name" type="text" ref={inputName} />
        <input placeholder="Idade" name="age" type="number" ref={inputAge} />
        <input
          placeholder="E-mail"
          name="email"
          type="email"
          ref={inputEmail}
        />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {/* Mapeia o array de usuários e cria um Card para cada um */}
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Lata de lixo" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
