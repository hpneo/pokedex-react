import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPokemon, selectPokemon, selectPokemonStatus } from '../redux/ducks/pokemon';

class PokemonProfile extends Component {
  componentDidMount() {
    const { match: { params: { name } } } = this.props;

    this.props.dispatch(fetchPokemon(name));
  }
  render(props) {
    const { fetching, pokemon } = this.props;

    if (fetching) {
      return (
        <section className='pokemon-profile'>
          <article className='pokemon-profile-summary'>
            <ul className='pokemon-profile-stats'>
              <li>
                <span className='stat-value'>Cargando...</span>
              </li>
            </ul>
          </article>
        </section>
      );
    }

    return (
      <section className='pokemon-profile'>
        <article className='pokemon-profile-summary'>
          <aside className='pokemon-profile-image'>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span>
              # {
                pokemon.pokedex_numbers
                  .find(pokedex_number => pokedex_number.pokedex.name === 'national')
                  .entry_number
              }
            </span>
            <span className='pokemon-profile-type'>
              {
                pokemon.genera
                  .find(genera => genera.language.name === 'es')
                  .genus
              }
            </span>
          </aside>
          <ul className='pokemon-profile-stats'>
            <li>
              <span className='stat-value'>
                {
                  pokemon.types
                    .sort((typeA, typeB) => typeA.slot - typeB.slot)
                    .map(type => type.type.name).join(', ')
                }
              </span>
              <span className='stat-label'>
                {
                  pokemon.types.length === 1
                  ? 'Tipo'
                  : 'Tipos'
                }
              </span>
            </li>
            <li>
              <span className='stat-value'>{pokemon.height / 10} m</span>
              <span className='stat-label'>Altura</span>
            </li>
            <li>
              <span className='stat-value'>{pokemon.weight / 10} kg</span>
              <span className='stat-label'>Peso</span>
            </li>
          </ul>
        </article>
        <p>
          {
            pokemon.flavor_text_entries
              .find(entry => entry.language.name === 'es')
              .flavor_text
          }
        </p>
      </section>
    );
  }
}

const mapStateToProps = state => (
  {
    pokemon: selectPokemon(state),
    fetching: selectPokemonStatus(state),
  }
);

export default connect(mapStateToProps)(PokemonProfile);