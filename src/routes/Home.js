import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemons, selectPokemons, selectPokemonsStatus } from '../redux/ducks/pokemons';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPokemons());
  }
  render() {
    const { fetching, pokemons } = this.props;

    return (
      <ul className='list'>
        {
          fetching
          ? (
            <li className='list-item'>
              <span>Cargando...</span>
            </li>
          )
          : pokemons.results.map(pokemon =>
              (
                <li key={pokemon.name}>
                  <Link to={`/pokemons/${pokemon.name}`} className='list-item'>
                    <span className='is-capitalized'>{pokemon.name}</span>
                  </Link>
                </li>
              )
          )
        }
      </ul>
    );
  }
}

const mapStateToProps = state => (
  {
    pokemons: selectPokemons(state),
    fetching: selectPokemonsStatus(state),
  }
);

export default connect(mapStateToProps)(Home);