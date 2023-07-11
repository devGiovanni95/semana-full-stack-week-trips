import { Trip } from '@prisma/client'
import React from 'react'
import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'

interface TripItemProps{
    trip: Trip
}

const TripItem = ({trip}: TripItemProps) => {
    return (
        <div className="flex flex-col">
            <div className="relative h-[360px] w-[360px]">
                <Image 
                    src={trip.coverImage}  
                    className="rounded-lg shadow-2xl shadow-slate-600"  
                    fill 
                    alt={trip.name}
                    style={{
                        objectFit:"cover"
                    }}
                />
            </div>

            <h3 className='text-primaryDarker font-medium text-sm mt-2'>
                {trip.name}
            </h3>

            <div className="flex items-center gap-2">
                <ReactCountryFlag countryCode={trip.countryCode} svg/>
                <p className='text-xs text-grayPrimary'>
                    {trip.location}
                </p>
            </div>

            <p className='text-xs text-grayPrimary font-medium'>
               <span className='text-primary font-medium mr-1'>
                    R${trip.pricePerDay.toString()}
                </span> 
                por dia
                </p>
        </div>
    )
}

export default TripItem
