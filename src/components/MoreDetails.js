import Localisation from './Localisation';
import routes from '../assets/routes/routes.json';
import cities from '../assets/routes/cities.json';
import others from '../assets/routes/others.json';
import wild from '../assets/routes/wild-land.json';
import classicRaids from '../assets/antres/non-rares.json';
import rareRaids from '../assets/antres/non-rares.json';

function MoreDetails({ pokemon, setModalIsOpen, setActivePokemon }) {

    const handleClose = () => {
        setModalIsOpen(false);
        setActivePokemon({});
    }

    const image = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.nationalId}.png`

    const allRoutes = routes.concat(cities).concat(others).concat(wild);

    const raids = classicRaids.filter((r) => r.pokemons.includes(pokemon.nameFr));
    const raidsRare = rareRaids.filter((r) => r.pokemons.includes(pokemon.nameFr));

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
                        { (raids.length > 0 || raidsRare.length) > 0 &&
                            <div>
                                <h3>Raids Dynamax</h3>
                                {
                                    raids.map((r) => 
                                        <li>{r.antre} - {r.stars} &#9733; {r.percentages[r.pokemons.findIndex((p) => p === pokemon.nameFr)]} %
                                        </li>
                                    )
                                }
                                {
                                    raidsRare.map((r) => 
                                        <li>{r.antre} - {r.stars} &#9733; {r.percentages[r.pokemons.findIndex((p) => p === pokemon.nameFr)]} %
                                        </li>
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
