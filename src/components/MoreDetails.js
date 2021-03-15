import Localisation from './Localisation';
import routes from '../assets/routes/routes.json';
import cities from '../assets/routes/cities.json';
import others from '../assets/routes/others.json';
import wild from '../assets/routes/wild-land.json';

function MoreDetails({ pokemon, setModalIsOpen, setActivePokemon }) {

    const handleClose = () => {
        setModalIsOpen(false);
        setActivePokemon({});
    }

    const image = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.nationalId}.png`

    const allRoutes = routes.concat(cities).concat(others).concat(wild);

    return (
        <>
            <div className="around-modal" onClick={handleClose}></div>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-content-text">
                        { pokemon.evo !== "" &&
                            <div>
                                <h3>Evolution</h3>
                                <p className="modal-content-evo">{pokemon.evo}</p>
                            </div>
                        }
                        { pokemon.localisation.length > 0 &&
                            <div>
                                <h3>Localisation</h3>
                                {
                                    pokemon.localisation.map((loc) => 
                                        <Localisation 
                                            key={loc} 
                                            routeName={loc}
                                            routeDetails={allRoutes.filter((rte) => rte.route === loc)}
                                            pokemonName={pokemon.nameFr}
                                        />
                                    )
                                }
                            </div>
                        }
                    </div>
                    <div className="artwork-container">
                        <img className="artwork-pokemon" alt="artwork" src={image} />
                    </div>
                </div>

                <button className="btn btn-close" onClick={handleClose}>Close</button>
            </div>
        </>
    );
}

export default MoreDetails;
