import React from 'react'

interface txt {
    texto: string;
}

const Titulo = ({texto}:txt) => { 
    return (
        <div className='flex items-center'>
            <div className='w-full h-[2px] bg-grayLighter'></div>
            <h2 className=' px-5 font-medium text-grayPrimary whitespace-nowrap'>{texto}</h2>
            <div className='w-full h-[2px] bg-grayLighter'></div>
        </div>
    )
}

export default Titulo
