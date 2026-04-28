import Card from "../components/Card";

function Home() {
    const artigos = [
        { id: 1, title: "breaking-news", data_publicacao: "2022" },
        { id: 2, title: "Ebola", data_publicacao: "2017" },
        { id: 3, title: "Habemus Papam", data_publicacao: "2025" },
    ]

    const handleSearch =   ( ) => {

    }

    return (
    
    <div className="home">
       <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder ="Buscar pelo artigo..." 
          className="search-input"
        />
        <button></button>
       </form>

      <div className="artigos-grid">
        {artigos.map((artigo) => (
            <Card artigo={artigo} key={artigo.id}/>
        ))}
        </div>
    </div>
    );
}

export default Home 