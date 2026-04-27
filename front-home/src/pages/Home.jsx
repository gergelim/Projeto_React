import Card from "../components"

function Home() {
    const artigos = {
        {id: 1, title: "breaking-news", data_publicacao: "2022"},
        {id: 1, title: "Ebola", data_publicacao: "2017"},
        {id: 1, title: "Habemus Papam", data_publicacao: "2025"},
    }

    return <div className="home">
        <div className="artigos-grid">
            {artigos.map(artigo => <Card />)}
        </div>
    </div>
}

