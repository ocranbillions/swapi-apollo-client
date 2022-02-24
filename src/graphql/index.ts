
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
          id
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
        id
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
      id
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
      id
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

export const GET_ALLHOMEWORLDS_QUERY = gql`
  query GetAllHomeworlds {
    getAllHomeworlds {
      id
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
`;

export const GET_HOMEWORLD_QUERY = gql`
  query getHomeworld($getHomeworldId: Int) {
    getHomeworld(id: $getHomeworldId) {
      id
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
`;

export const DELETE_PERSON_MUTATION = gql`
  mutation Mutation($name: String) {
    deletePerson(name: $name)
  }
`;
