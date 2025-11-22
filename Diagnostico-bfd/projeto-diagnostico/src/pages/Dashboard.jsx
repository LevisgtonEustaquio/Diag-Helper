import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { LogOut } from "lucide-react";

export default function Dashboard({ expanded }) {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    cargo: "",
    status: "Ativo",
  });

  const [confirmarSaida, setConfirmarSaida] = useState(false);

  const gerarDataHora = () => {
    const agora = new Date();
    const data = agora.toLocaleDateString("pt-BR");
    const hora = agora.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${data} ${hora}`;
  };

  const cadastrar = (e) => {
    e.preventDefault();

    const novoUsuario = {
      id: Date.now(),
      ...form,
      criadoEm: gerarDataHora(),
    };

    setUsuarios((prev) => [...prev, novoUsuario]);

    setForm({
      nome: "",
      cpf: "",
      cargo: "",
      status: "Ativo",
    });
  };

  const remover = (id) => {
    setUsuarios((prev) => prev.filter((u) => u.id !== id));
  };

  const sair = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  const total = usuarios.length;
  const ativos = usuarios.filter((u) => u.status === "Ativo").length;
  const novosHoje = usuarios.filter((u) =>
    u.criadoEm.startsWith(new Date().toLocaleDateString("pt-BR"))
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 flex w-full overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar expanded={expanded} />

      {/* MAIN CONTENT */}
      <main
        className={`
          flex-1 p-4 sm:p-6 transition-all duration-300 w-full overflow-x-hidden
          pl-0 md:pl-20
          ${expanded ? "lg:pl-64" : "lg:pl-20"}
        `}
      >
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <h1 className="text-2xl font-bold leading-tight">
            Bem-vindo{" "}
            <span className="capitalize">
              {usuario?.tipoUsuario} {usuario?.nome}
            </span>
          </h1>

          <button
            onClick={() => setConfirmarSaida(true)}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center gap-2 shadow-md"
          >
            <LogOut /> Sair
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Card title="Total de Usuários" value={total} />
          <Card title="Ativos" value={ativos} />
          <Card title="Cadastros Hoje" value={novosHoje} />
        </div>

        {/* FORM */}
        <section className="bg-white p-4 sm:p-6 shadow rounded mb-6">
          <h2 className="text-lg font-bold mb-4">Novo Usuário</h2>

          <form
            onSubmit={cadastrar}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <Input
              label="Nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />

            <Input
              label="CPF"
              value={form.cpf}
              onChange={(e) => setForm({ ...form, cpf: e.target.value })}
            />

            <Input
              label="Cargo"
              value={form.cargo}
              onChange={(e) => setForm({ ...form, cargo: e.target.value })}
            />

            <select
              className="border p-2 rounded w-full"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>

            <button
              className="bg-blue-600 text-white rounded p-2 mt-2 hover:bg-blue-700 w-full sm:w-auto"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </section>

        {/* TABLE */}
        <section className="bg-white p-4 sm:p-6 shadow rounded">
          <h2 className="text-lg font-bold mb-4">Usuários Cadastrados</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <Th>Nome</Th>
                  <Th>CPF</Th>
                  <Th>Cargo</Th>
                  <Th>Status</Th>
                  <Th>Criado em</Th>
                  <Th>Ações</Th>
                </tr>
              </thead>

              <tbody>
                {usuarios.map((u) => (
                  <tr
                    key={u.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <Td>{u.nome}</Td>
                    <Td>{u.cpf}</Td>
                    <Td>{u.cargo}</Td>
                    <Td>{u.status}</Td>
                    <Td>{u.criadoEm}</Td>

                    <Td>
                      <button
                        onClick={() => remover(u.id)}
                        className="text-red-600 font-medium hover:underline"
                      >
                        Excluir
                      </button>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* MODAL DE SAÍDA */}
      {confirmarSaida && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded shadow-2xl w-full max-w-sm">
            <p className="text-lg font-semibold mb-4">
              Tem certeza que deseja sair?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmarSaida(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>

              <button
                onClick={sair}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* COMPONENTES REUTILIZÁVEIS */
function Card({ title, value }) {
  return (
    <div className="bg-white p-4 shadow rounded text-center">
      <p className="text-gray-600">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <input
      type="text"
      placeholder={label}
      className="border p-2 rounded w-full"
      {...props}
      required
    />
  );
}

function Th({ children }) {
  return <th className="px-3 py-2 font-semibold">{children}</th>;
}

function Td({ children }) {
  return <td className="px-3 py-2">{children}</td>;
}
