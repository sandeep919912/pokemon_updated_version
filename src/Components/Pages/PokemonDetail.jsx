import React from 'react';

const PokemonDetail = () => {
  const viewPokes = JSON.parse(localStorage.getItem("viewPoke")) || [];
  console.log(viewPokes)

  return (
    <div>
      {viewPokes.map((data, index) => (
        <div
        key={index}
        className="container mx-auto px-4 py-8"
      >
        <div className="bg-orange-300 rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={data.sprites}
              alt={data.name}
              className="w-full h-auto object-contain rounded-xl border border-gray-300 bg-yellow-100"
            />
          </div>
      
          {/* Info Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-2 text-gray-800">
            <h1 className="text-2xl font-bold">#{data.id} {data.name}</h1>
            <h2 className="text-lg font-semibold">Abilities:</h2>
            <p className="text-base">{data.ability.join(", ")}</p>
      
            <h2 className="text-lg font-semibold mt-2">Moves:</h2>
            <p className="text-base line-clamp-3">{data.moves.join(", ")}</p>
      
            <h2 className="text-lg font-semibold mt-2">Stats:</h2>
            <p className="text-base">{data.stats.join(", ")}</p>
          </div>
        </div>
      </div>
      
      ))}
      
    </div>
  );
};

export default PokemonDetail;
