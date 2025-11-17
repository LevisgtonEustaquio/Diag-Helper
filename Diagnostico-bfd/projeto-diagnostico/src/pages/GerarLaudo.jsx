import Navbar from "../components/Navbar";

function GerarLaudo(){
    return(
        <div className="min-h-screen bg-gray-100 flex">
            <Navbar />

            <main className="flex-1 p-8">
            <h1 className="text-2xl font-bold mb-6">Gerar laudos</h1>

        </main>
        </div>
    )
}

export default GerarLaudo;