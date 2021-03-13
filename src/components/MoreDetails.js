function Line({ pokemon, setModalIsOpen, setActivePokemon }) {

    const handleClose = () => {
        setModalIsOpen(false);
        setActivePokemon({});
    }

    return (
        <>
            <div className="around-modal" onClick={handleClose}></div>
            <div className="modal">
                {pokemon.evo}
                {pokemon.localisation}
                <button onClick={handleClose}>Close</button>
            </div>
        </>
    );
}

export default Line;
