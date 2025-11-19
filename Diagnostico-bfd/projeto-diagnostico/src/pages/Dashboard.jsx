import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Dashboard({ expanded }) {
  const [usuarios, setUsuarios] = useState([]);

  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    cargo: "",
    status: "Ativo",
  });

  function gerarDataHora() {
    const agora = new Date();
    const data = agora.toLocaleDateString("pt-BR");
    const hora = agora.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${data} ${hora}`;
  }

  function cadastrar(e) {
    e.preventDefault();

    const novoUsuario = {
      id: Date.now(),
      ...form,
      criadoEm: gerarDataHora(),
    };

    setUsuarios([...usuarios, novoUsuario]);

    setForm({
      nome: "",
      cpf: "",
      cargo: "",
      status: "Ativo",
    });
  }

  function remover(id) {
    setUsuarios(usuarios.filter((u) => u.id !== id));
  }

  const total = usuarios.length;
  const ativos = usuarios.filter((u) => u.status === "Ativo").length;
  const novosHoje = usuarios.filter((u) =>
    u.criadoEm.startsWith(new Date().toLocaleDateString("pt-BR"))
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Navbar />

      <main
        className={`
    flex-1 p-6 transition-all duration-300
    ${expanded ? "md:ml-64" : "md:ml-20"}
  `}
      >
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 shadow rounded">
            <p className="text-gray-600">Total de Usuários</p>
            <p className="text-2xl font-bold">{total}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <p className="text-gray-600">Ativos</p>
            <p className="text-2xl font-bold">{ativos}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <p className="text-gray-600">Cadastros Hoje</p>
            <p className="text-2xl font-bold">{novosHoje}</p>
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded mb-6">
          <h2 className="text-lg font-bold mb-4">Novo Usuário</h2>

          <form
            onSubmit={cadastrar}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Nome"
              className="border p-2 rounded"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
            />

            <input
              type="text"
              placeholder="CPF"
              className="border p-2 rounded"
              value={form.cpf}
              onChange={(e) => setForm({ ...form, cpf: e.target.value })}
              required
            />

            <input
              type="text"
              placeholder="Cargo"
              className="border p-2 rounded"
              value={form.cargo}
              onChange={(e) => setForm({ ...form, cargo: e.target.value })}
              required
            />

            <select
              className="border p-2 rounded"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>

            <button
              className="bg-blue-600 text-white rounded p-2 mt-2 hover:bg-blue-700"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-bold mb-4">Usuários Cadastrados</h2>

          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">CPF</th>
                <th className="px-4 py-2">Cargo</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Criado em</th>
                <th className="px-4 py-2">Ações</th>
              </tr>
            </thead>

            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id} className="border-b">
                  <td className="px-4 py-2">{u.nome}</td>
                  <td className="px-4 py-2">{u.cpf}</td>
                  <td className="px-4 py-2">{u.cargo}</td>
                  <td className="px-4 py-2">{u.status}</td>
                  <td className="px-4 py-2">{u.criadoEm}</td>

                  <td className="px-4 py-2">
                    <button
                      onClick={() => remover(u.id)}
                      className="text-red-600 hover:underline"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
