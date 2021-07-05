import gql from 'graphql-tag'

export const allPetsQuery = gql`
query allPets {
  allPets {
    id
    name
    weight
  }
}
`
