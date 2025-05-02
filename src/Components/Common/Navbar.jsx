import React, { useState , useContext} from 'react'
import {Link} from 'react-router-dom'
// import { PokemonContext } from '../../App'

const Navbar = () => {
  const [search , setSearch] = useState("")

    // const Pokemones1 = useContext(PokemonContext);
    // console.log("navData :",Pokemones1)

    

  return (
    <div className="w-full flex justify-center bg-white shadow-md">
        <nav className="w-full container mx-auto px-4 py-4 flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 items-center">
            
            {/* Logo */}
            <h1 className="font-bold text-[24px] text-orange-500">
            <Link to="/">PokeMon Explorer</Link>
            </h1>

            {/* Search Section */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 border border-orange-400 rounded-lg w-full sm:w-auto"
                type="text"
                placeholder="Search Here"
            />
            <button className="px-4 py-2 bg-orange-500 rounded-lg text-white hover:bg-orange-600 w-full sm:w-auto">
                Get Pokes
            </button>
            </div>

            {/* Filter Section */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
            <select className="px-4 py-2 border border-orange-400 rounded-lg w-full sm:w-auto">
                <option>Filter by</option>
                <option value="grass">Grass</option>
                <option value="water">Water</option>
                <option value="fire">Fire</option>
            </select>
            <button className="px-4 py-2 bg-orange-500 rounded-lg text-white hover:bg-orange-600 w-full sm:w-auto">
                Get Pokes
            </button>
            </div>

            {/* Favorite Link */}
            <div>
            <Link
                to="/favorite"
                className="px-4 py-2 bg-orange-500 rounded-lg text-white hover:bg-orange-600 block text-center"
            >
                Favorite
            </Link>
            </div>
        </nav>
    </div>

  )
}

export default Navbar