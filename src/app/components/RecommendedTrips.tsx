import Titulo from '@/components/Titulo'
import TripItem from '@/components/TripItem';
import { Trip } from '@prisma/client';

import React from 'react'

async function RecommendedTrips() {
    const data = await fetch("http://localhost:3000/api").then((res)=> res.json());
    return (
        <div>
            <div className="container mx-auto p-5">
                <Titulo texto="Destinos Recomendados" />
            </div>

            <div className="flex flex-col items-center mt-5 gap-5">

                {data.map((trip:Trip) => (
                    <TripItem key={trip.id} trip={trip}/>
                ))}
                
            </div>

        </div>
    )
}

export default RecommendedTrips
