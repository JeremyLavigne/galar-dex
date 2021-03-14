import Localisation from './Localisation';
import routes from '../assets/routes/routes.json';

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
                                <p className="modal-content-evo">{pokemon.evo}</p>
                            </div>
                            :
                            null
                        }
                        { pokemon.localisation.length > 0 ?
                            <div>
                                <h3>Localisation</h3>
                                {
                                    pokemon.localisation.map((loc) => 
                                        <Localisation 
                                            key={loc} 
                                            routeName={loc}
                                            routeDetails={routes.filter((rte) => rte.route === loc)}
                                            pokemonName={pokemon.nameFr}
                                        />
                                    )
                                }
                            </div>
                            :
                            null
                        }
                    </div>
                    <img className="image-full-size" alt="artwork" src={image} />
                </div>

                <button className="modal-close" onClick={handleClose}>Close</button>
            </div>
        </>
    );
}

export default MoreDetails;
