function MoreDetails({ pokemon, setModalIsOpen, setActivePokemon }) {

    const handleClose = () => {
        setModalIsOpen(false);
        setActivePokemon({});
    }

    const image = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.nationalId}.png`

    return (
        <>
            <div className="around-modal" onClick={handleClose}></div>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-content-text">
                        { pokemon.evo !== "" ?
                            <div>
                                <h3>Evolution</h3>
                                {pokemon.evo}
                            </div>
                            :
                            null
                        }
                        { pokemon.localisation.length > 0 ?
                            <div>
                                <h3>Localisation</h3>
                                {
                                    pokemon.localisation.map((loc) => <li key={loc}>{loc}</li>)
                                }
                            </div>
                            :
                            null
                        }
                    </div>
                    <img class="image-full-size" alt="artwork" src={image} />
                </div>

                <button className="modal-close" onClick={handleClose}>Close</button>
            </div>
        </>
    );
}

export default MoreDetails;
