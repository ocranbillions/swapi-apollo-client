
import { gql } from '@apollo/client';

export const GET_PEOPLE_QUERY = gql`
  query GetPeopleQuery($page: String) {
    getPeople(page: $page) {
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
      page {
        totalPeople
        nextPage
        previousPage
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

export const CREATE_PERSON_MUTATION = gql`
mutation createPerson($personData: CreatePersonInput!) {
  createPerson(personData: $personData) {
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

export const UPDATE_PERSON_MUTATION = gql`
mutation UpdatePerson($name: String, $personData: CreatePersonInput!) {
  updatePerson(name: $name, personData: $personData) {
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
