function Line({ pokemon, setModalIsOpen, setActivePokemon }) {
    const icon = `https://www.serebii.net/pokedex-swsh/icon/${pokemon.nationalId}.png`;

    const handleClickFind = () => {
        setModalIsOpen(true);
        setActivePokemon(pokemon);
    }
    return (
        <div class="line">
            <img class="icon" alt="pkm_icn" src={icon} />
            <div class="line-pokemon-name">
                <div class="line-pokemon-id">{pokemon.galarId}</div>
                <div>
                    {pokemon.nameFr} <br />
                    <span class="line-pokemon-english">{pokemon.nameEn}</span>
                </div>
            </div>
            <div className="line-buttons">
                <button 
                    className="btn btn-find"
                    onClick={handleClickFind}
                >Find</button>
            </div>
        </div>
    );
}

export default Line;
