import { ReactChild } from 'react';

export interface HomeworldI {
  id: string
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
}

export interface PersonI {
  name: string
  height: string
  mass: string
  gender: string
  homeworld: HomeworldI
}

export interface CustomThemeI {
  colors: {
    black: string
    white: string
    yellow: string
    darkBlack: string
    textColor: string
    lightBlack: string
    grey: string
  }
}

export interface PageI {
  totalPeople: string
  nextPage: string
  previousPage: string
  pageNumber: string
}
export interface PaginationI {
  pageInfo: PageI
}

export interface PeopleListPropsI {
  people: PersonI[]
  pageInfo: PageI
}

interface DataI {
  data: { getPeson: PersonI } | {
    data: PersonI[]
    page: PageI
  }
}

export interface QueryResultPropsI {
  children: ReactChild
  loading: boolean
  error: Error | undefined
  data: DataI
}
