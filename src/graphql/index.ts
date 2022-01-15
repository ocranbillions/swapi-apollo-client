
import { gql } from '@apollo/client';

export const GET_PEOPLE_QUERY = gql`
  query GetPeopleQuery {
    getPeople {
      data {
        name
        height
        mass
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
        }
      }
    }
  }
`;

export const GET_PERSON_QUERY = gql`
  query GetPerson($name: String) {
    getPerson(name: $name) {
      name
      height
      mass
      gender
      homeworld {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
      }
    }
  }
`;
