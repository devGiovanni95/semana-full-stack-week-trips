import { prisma } from "@/lib/prisma";

const getTrips = async () => {
    const trips = await prisma.trip.findMany({})

    return trips;
}

const Trips = async () => {
    const data = await fetch("http://jsonplaceholder.typicode.com/posts").then((res) => res.json());

    console.log("🚀 ~ file: Trips.tsx:11 ~ Trips ~ data:", {data})

    return <div>{data.map((i:any) => ( <p key={i.id}>{i.title}</p> ))}</div>
}

export default Trips;