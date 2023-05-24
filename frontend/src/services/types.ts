interface Pokemon {
  id: string
  name: string
  sprites: { front_shiny: string }
  species: {
    name: string
  }
}

export type { Pokemon }
