import { ReactChild } from 'react';

export interface CustomThemeI {
  colors: {
    black: string
    white: string
  }
}

export interface QueryResultPropsI {
  children: ReactChild
  loading: boolean
  error: any
  data: any
}
