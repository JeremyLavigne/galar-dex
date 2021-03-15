import { useState } from "react";

function Localisation({ routeName, routeDetails, pokemonName }) {
    const [openDetails, setOpenDetails] = useState(false);

    const onlyNecessary = routeDetails.filter((d) => d.pokemons.includes(pokemonName));
    const details = [];

    for (let i = 0; i < onlyNecessary.length; i += 1) {
        for (let j = 0; j < onlyNecessary[i].pokemons.length; j += 1) {
            if (onlyNecessary[i].pokemons[j] === pokemonName) {
                details.push({
                    where: onlyNecessary[i].where,
                    level: onlyNecessary[i].level,
                    percentage: onlyNecessary[i].percentages[j]
                })
            }
        }
    }

    return (
        <>
            <div className="loca-route">
                <span>{routeName}</span>
                <button 
                    className="btn btn-plus"
                    onClick={() => setOpenDetails(!openDetails)}
                >
                    { openDetails ? '-' : '+' }
                </button>
            </div>
            {
                openDetails && 
                    <div>{details.map((d) => 
                        <div className="loca-route-details">
                            <span>{d.where + " / "}</span> 
                            <span>{d.level + " / "}</span> 
                            <span>{d.percentage}%</span>
                        </div>
                        )}
                    </div>
            }
        </>
    );
}

export default Localisation;
