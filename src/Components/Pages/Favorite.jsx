import React, { useState , useEffect} from 'react'

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("data")) || [];
    setFavorites(stored);
  }, []);

  const handleRemove = (itemToRemove) => {
    const updated = favorites.filter(item => item.id !== itemToRemove.id);
    setFavorites(updated);
    localStorage.setItem("data", JSON.stringify(updated));
  };

  let storedData = JSON.parse(localStorage.getItem("data"))
  // console.log(storedData)
  return (
    <>
      <div className='container mx-auto'>
        <h1 className='font-bold text-[24px] text-orange-500 mt-10 mx-auto'>Favorite Pokemones - <span className='font-bold text-[24px] text-green-500'>({storedData.length})</span> </h1>
      </div>
      <div className='grid grid-cols-5 container mx-auto mt-10 gap-4 w-full'>
        {storedData.map(item => 
          <div className='flex flex-col bg-green-700 px-4 py-6 rounded-lg items-center w-full'>
            <div className='flex justify-between items-center w-full mb-3'>
              <h1 className='font-bold text-red-500'>ID:{item.id}</h1>
              <h1 className='text-[17px] text-white font-bold'>{item.name}</h1>
            </div>
            <div className='w-full'>
              <img className='border border-white w-full rounded-xl bg-orange-100' src={item.sprites} alt="" />
            </div>
            <div className='w-full flex flex-col mt-3'>
              <p className='text-[15px] font-bold text-white'>Types : {item.types.join(", ")}</p>
              <button onClick={()=>{handleRemove(item)}} className='rounded-lg text-white bg-red-500 px-2 py-2 mt-2'>Remove</button>
            </div>
          </div>
        )}
      </div>
    </>
    
  )
}

export default Favorite