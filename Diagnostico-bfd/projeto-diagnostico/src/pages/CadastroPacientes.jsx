import { useState } from "react";
import Navbar from "../components/Navbar";

function CadastroPacientes() {
  const [pacientes, setPacientes] = useState([]);

  const [formPacientes, setFormPacientes] = useState({
    nome: "",
    dataNascimento: "",
    telefone: "",
    cpf: "",
    idade: "",
  });

  function cadastrarPaciente(e) {
    e.preventDefaul();

    setPacientes([...pacientes, newPaciente]);

    setFormPacientes({
      nome: "",
      dataNascimento: "",
      telefone: "",
      cpf: "",
      idade: "",
    });
  }

  return (
  
    <div className="min-h-screen bg-gray-100 flex">

    <Navbar />

        <main className="flex-1 p-8">
            <h1 className="text-2xl font-bold mb-6">Cadastro de pacientes</h1>

        </main>
    </div>

);
}

export default CadastroPacientes;
