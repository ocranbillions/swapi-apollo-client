import { ReactChild } from 'react';

export interface CustomThemeI {
  colors: {
    black: string
    white: string
    yellow: string
    darkBlack: string
    textColor: string
    lightBlack: string
  }
}

export interface QueryResultPropsI {
  children: ReactChild
  loading: boolean
  error: any
  data: any
}
