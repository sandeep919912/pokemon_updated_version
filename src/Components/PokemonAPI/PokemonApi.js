


const fetchData = async ()=>{
  let responce = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
  let data = await responce.json()
  let pokemonUrls = data.results.map((obj => obj.url))
  let pokemonDetails = []
  for (const url of pokemonUrls){
      let res = await fetch(url)
      let json = await res.json()
      pokemonDetails.push(json)
  }
  
  let allPokemones = pokemonDetails.map((obj)=>({
      name : obj.name,
      id : obj.id,
      types : obj.types.map(obj => obj.type.name),
      sprites : obj.sprites.back_default,
      ability : obj.abilities.map(obj2 => (obj2.ability.name)),
      moves: obj.moves.map(obj3 => (obj3.move.name)),
      stats: obj.stats.map(obj4 => (obj4.stat.name))
  }))

  setPokemones(allPokemones)
  // console.log(pokemones)
}

export default fetchData