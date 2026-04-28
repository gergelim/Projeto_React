
function Card({artigo}) {
    
    function onFavoriteClick() {
        alert("clicked")
    }

    return <div className="card-artigo">
        <div className="">
            <img src={artigo.url} alt={artigo.title}/>
            <div className="artigo-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    ❤️
                </button>
            </div>
        </div>
        <div className="artigo-info">
            <h3>{artigo.title}</h3>
            <p>{artigo.data_publicacao}</p>
        </div>
    </div>
}

export default Card