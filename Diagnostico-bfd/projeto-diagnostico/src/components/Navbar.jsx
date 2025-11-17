// import { House, Link } from "lucide-react";
// import { User } from "lucide-react";
// import { ClipboardMinus } from "lucide-react";
// import { Settings } from "lucide-react";
// import { ImagePlus } from "lucide-react";
// import { FilePlusCorner } from "lucide-react";
// import { History } from "lucide-react";
// import { UserPlus } from "lucide-react";
// import { Routes, Route } from "react-router-dom";

// function Navbar() {
//   return (
//     <div>
//       <aside className="w-64 h-screen bg-white shadow-md p-6">
//         <h2 className="text-xl font-bold mb-6">Painel</h2>

//         <nav>
//           <ul className="space-y-4 text-slate-950">
//             <li><Link to="/dashboard" className="p-2 shadow-lg text-shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start cursor-pointer" href="/dashboard  "><House size={24} />Dashboard</Link></li>
//             <li><a className="p-2 shadow-lg text-shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start" href="#"><ImagePlus size={24} /> Visualizar imagens</a></li>
//             <li><a className="p-2 shadow-lg text-shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start" href="#"><FilePlusCorner size={24}/> Gerar laudo</a></li>
//             <li><a className="p-2 shadow-lg text-shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start" href="#"><History size={24}/> Histórico de laudos</a></li>
//             <li><Link to="/CadastroPacientes" className="btn p-2 shadow-lg text-shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start cursor-pointer"><UserPlus size={24}/> Cadastrar paciente</Link></li>
//             <li><a className="p-2 shadow-lg text-shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start" href="#"><Settings size={24} /> Configurações</a></li>
//           </ul>
//         </nav>
//       </aside>
//     </div>
//   );
// }

// export default Navbar;


import { House } from "lucide-react";
import { User } from "lucide-react";
import { ClipboardMinus } from "lucide-react";
import { Settings } from "lucide-react";
import { ImagePlus } from "lucide-react";
import { FilePlusCorner } from "lucide-react";
import { History } from "lucide-react";
import { UserPlus } from "lucide-react";

import { Link } from "react-router-dom"; // ✔ CORRETO

function Navbar() {
  return (
    <div>
      <aside className="w-64 h-screen bg-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">Painel</h2>

        <nav>
          <ul className="space-y-4 text-slate-950">

            {/* DASHBOARD */}
            <li>
              <Link
                to="/dashboard"
                className="p-2 shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start cursor-pointer"
              >
                <House size={24} /> Dashboard
              </Link>
            </li>

            {/* VISUALIZAR IMAGENS */}
            <li>
              <Link
                to="/VisualizarImagens"
                className="p-2 shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start cursor-pointer"
              >
                <ImagePlus size={24} /> Visualizar imagens
              </Link>
            </li>

            {/* GERAR LAUDO */}
            <li>
              <Link
                to="/GerarLaudo"
                className="p-2 shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start cursor-pointer"
              >
                <FilePlusCorner size={24} /> Gerar laudo
              </Link>
            </li>

            {/* HISTÓRICO DE LAUDOS */}
            <li>
              <Link
                to="/HistoricoLaudos"
                className="p-2 shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start cursor-pointer"
              >
                <History size={24} /> Histórico de laudos
              </Link>
            </li>

            {/* CADASTRAR PACIENTE */}
            <li>
              <Link
                to="/CadastroPacientes"
                className="p-2 shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start cursor-pointer"
              >
                <UserPlus size={24} /> Cadastrar paciente
              </Link>
            </li>

            {/* CONFIGURAÇÕES */}
            <li>
              <Link
                to="/configuracoes"
                className="p-2 shadow-lg hover:bg-linear-to-r from-slate-200 to-slate-400 flex flex-row gap-2 rounded-md justify-start cursor-pointer"
              >
                <Settings size={24} /> Configurações
              </Link>
            </li>

          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Navbar;
