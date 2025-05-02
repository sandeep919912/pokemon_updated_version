import { Routes , Route } from 'react-router-dom'
import PokeMonHome from './Components/Pages/Home'
import Favorite from './Components/Pages/Favorite'
import PokemonDetail from './Components/Pages/PokemonDetail'
// import { createContext, useEffect, useState } from 'react';






function App() {

// //  const PokemonContext = createContext(["sandeep"]);
// const [allPokemones , setAllPokemones] = useState([])

// const fetchData = async ()=>{
//   let responce = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
//   let data = await responce.json()
//   let pokemonUrls = data.results.map((obj => obj.url))
//   let pokemonDetails = []
//   for (const url of pokemonUrls){
//       let res = await fetch(url)
//       let json = await res.json()
//       pokemonDetails.push(json)
//   }
  
//   let allPokemones = pokemonDetails.map((obj)=>({
//       name : obj.name,
//       id : obj.id,
//       types : obj.types.map(obj => obj.type.name),
//       sprites : obj.sprites.back_default,
//       ability : obj.abilities.map(obj2 => (obj2.ability.name)),
//       moves: obj.moves.map(obj3 => (obj3.move.name)),
//       stats: obj.stats.map(obj4 => (obj4.stat.name))
//   }))
//   setAllPokemones(allPokemones)
//   // console.log(pokemones)
// }

//   useEffect(()=>{
//     fetchData()
//   })
  
  return (
    <>
      {/* <PokemonContext value={allPokemones}> */}

     
      <Routes>
        <Route path="/" element={<PokeMonHome/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/pokemondetails" element={<PokemonDetail/>}/>
      </Routes>
      {/* </PokemonContext> */}
    </>
  )
}

export default App
