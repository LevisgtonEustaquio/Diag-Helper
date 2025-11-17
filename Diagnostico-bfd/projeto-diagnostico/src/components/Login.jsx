import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState(true);
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    cargo: "",
    email: "",
    senha: "",
  });

  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");

    if (!login && formData.senha !== formData.confirmarSenha) {
      setMensagem("As senhas não coincidem.");
      return;
    }

    try {
      const url = login
        ? "http://localhost:5000/login"
        : "http://localhost:5000/cadastro";

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("usuario", JSON.stringify(data.usuario || data));
        navigate("/dashboard");
      } else {
        setMensagem(data.mensagem || "Erro ao processar a solicitação");
      }
    } catch (error) {
      console.error(error);
      setMensagem("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            {login ? "Acesse sua conta" : "Adicionar Novo Usuário"}
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {!login && (
              <>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Nome completo"
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="CPF"
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                
                <select
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Selecione o cargo</option>
                  <option value="medico">Médico</option>
                  <option value="administrador">Administrador</option>
                </select>
              </>
            )}

            { <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail institucional / CPF"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            /> }


            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder="Senha"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            

            {mensagem && (
              <p className="text-center text-red-600 font-semibold">
                {mensagem}
              </p>
            )}

              
            <Link
              to="/dashboard"
              className="text-center bg-green-600 text-white rounded-lg p-2 mt-2 hover:bg-blue-700 transition-all"
            >
              {login ? "Entrar" : "Cadastrar"}
            </Link>
          </form>

          <p className="text-center text-gray-600 mt-4">
           
            <button
              onClick={() => {
                setLogin(!login);
                setMensagem("");
              }}
              className="text-blue-600 font-semibold hover:underline"
            >
              {login ? "" : "Solicitar suporte"}
            </button>
          </p>
        </div>

        
        <div className="hidden md:flex w-1/2 bg-green-600 items-center justify-center text-white flex-col p-8">
          <h2 className="text-3xl font-bold mb-4">
            {login ? "Bem-vindo de volta!" : "Junte-se à nossa equipe!"}
          </h2>
          <p className="text-center text-blue-100">
            {login
              ? "Acesse o sistema da unidade de saúde com seu e-mail e senha."
              : "Crie sua conta e comece a usar o sistema da unidade de saúde."}
          </p>
        </div>
      </div>
    </div>
  );
}
