import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [data, setData] = useState(null);
  const [fetchUrl, setFetchUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [fetchUrl]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const { results: pokemon } = data;
  return (
    <main>
      {data.previous && (
        <button
          type="button"
          className="button"
          onClick={() => {
            setFetchUrl(data.previous);
          }}
        >
          Previous Page
        </button>
      )}
      {data.next && (
        <button
          type="button"
          className="button"
          onClick={() => {
            setFetchUrl(data.next);
          }}
        >
          Next Page
        </button>
      )}

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
