import { useState } from "react";
import ModalConcluido from "../components/modals/ModalConcluido";
import ModalFalha from "../components/modals/ModalFalha";
import Navbar from "../components/Navbar";
import ModalProcessando from "../components/modals/ModalProcessando";

function GerarLaudo() {
  const [showAlert, setShowAlert] = useState(false);

  function handleEnviar() {
    // Aqui você coloca a lógica de envio do laudo
    setShowAlert(true);
  }

  const [modalAberto, setModalAberto] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Navbar />

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Gerar laudos</h1>

        <div className="p-6 m-6 flex flex-row gap-4">
          <button
            onClick={() => setModalAberto("concluido")}
            className="btn p-2 shadow-lg bg-green-600 hover:bg-green-700 rounded-md cursor-pointer"
          >
            Gerar Laudo
          </button>

          <button
            onClick={() => setModalAberto("falha")}
            className="btn p-2 shadow-lg bg-green-600 hover:bg-green-700 rounded-md cursor-pointer"
          >
            Teste Falha
          </button>
          
            <button
            onClick={() => setModalAberto("processando")}
            className="btn p-2 shadow-lg bg-green-600 hover:bg-green-700 rounded-md cursor-pointer"
          >
            Teste Processando
          </button>

          <ModalConcluido
            open={modalAberto === "concluido"}
            onClose={() => setModalAberto(null)}
          />

          <ModalFalha
            open={modalAberto === "falha"}
            onClose={() => setModalAberto(null)}
          />

          <ModalProcessando
            open={modalAberto === "processando"}
            onClose={() => setModalAberto(null)}
          />
        </div>
      </main>
    </div>
  );
}

export default GerarLaudo;
