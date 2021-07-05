export interface Pet {
  id: string,
  name: string,
  weight: number
}

export interface Query {
  allPets: Array<Pet>
}
