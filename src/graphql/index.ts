
import { gql } from '@apollo/client';

export const GET_PEOPLE_QUERY = gql`
  query Query($searchTerm: String) {
    getPeople(searchTerm: $searchTerm) {
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
