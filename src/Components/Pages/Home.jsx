import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { useContext } from 'react';
// import { PokemonContext } from '../../App';



const PokeMonHome = () => {
    // const Pokemones1 = useContext(PokemonContext);
    // console.log(Pokemones1)


    let [pokemones , setPokemones] = useState([])
    const [currPage , setCurrPage] = useState(1)
    const [data , setData] = useState([])
    const [detailData , setDetailData] = useState([])


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
    
    const [viewPoke , setViewPokes] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        localStorage.setItem("viewPoke" , JSON.stringify(viewPoke))
    },[viewPoke])

    const handleView = (items)=>{
        setViewPokes(prevData => [...prevData , items])
        navigate("/pokemondetails")
    }


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("data")) || [];
        setData(storedData);
    }, []);
    
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
    }, [data]);
    
    const handleAddToFavorite = (items) => {
        setData(prevData => [...prevData, items]);
    };
    
    useEffect(()=>{
        fetchData()
    } ,[])

    let pokemonsPerPage = 20
    let totalPages = Math.ceil(150/pokemonsPerPage)
    let pokemonesPagination = pokemones.slice(pokemonsPerPage*(currPage-1) , pokemonsPerPage*currPage)

    return (
        <>
            {/* Pagination Controls */}
            <div className="container mx-auto flex flex-wrap justify-center items-center mt-10 gap-4">
            <button
                disabled={currPage <= 1}
                onClick={() => setCurrPage(currPage - 1)}
                className="px-4 py-2 shadow-md rounded-lg hover:bg-orange-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
                -
            </button>

            <span className="px-4 py-2 shadow-md rounded-lg bg-white text-orange-500 font-semibold">
                {currPage}
            </span>

            <button
                disabled={currPage >= totalPages}
                onClick={() => setCurrPage(currPage + 1)}
                className="px-4 py-2 shadow-md rounded-lg hover:bg-orange-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
                +
            </button>
            </div>

            {/* Pokemon Cards Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 container mx-auto mb-10 px-4">
            {pokemonesPagination.map((items) => (
                <div
                key={items.id}
                className="flex flex-col shadow-lg bg-orange-200 px-4 py-5 rounded-xl transition hover:shadow-xl"
                >
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-blue-600">ID: {items.id}</h3>
                    <p className="text-[17px] text-gray-800">
                    Name: <span className="font-bold">{items.name}</span>
                    </p>
                </div>

                <img
                    className="border border-gray-400 bg-red-100 mt-2 rounded-xl w-full h-auto object-contain"
                    src={items.sprites}
                    alt={items.name}
                />

                <div className="flex flex-col items-center mt-4 space-y-2">
                    <p className="text-[16px] text-gray-800 text-center">
                    Types: <span className="text-red-500 font-semibold">{items.types.join(", ")}</span>
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-2">
                    <button
                        onClick={() => handleAddToFavorite(items)}
                        className="bg-green-500 px-3 py-2 rounded-lg text-white hover:bg-green-600"
                    >
                        Add to Favorite
                    </button>

                    <button
                        onClick={() => handleView(items)}
                        className="bg-blue-500 px-3 py-2 rounded-lg text-white hover:bg-blue-600"
                    >
                        View Details
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>

        </>
        
    )
}

export default PokeMonHome