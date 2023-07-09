import React from 'react'
import Image from 'next/image'

const Icons = () => {
    return (
        <div className='flex w-full justify-between mt-2 p-2'>
            <div className="flex flex-col items-center gap-1">
                <Image width={35} height={35} src='/hotel-icon.png' alt='Hotel' />

                <p className="text-sm text-grayPrimary">
                    Hotel
                </p>
            </div>
            
            <div className="flex flex-col items-center gap-1">
                <Image width={35} height={35} src='/farm-icon.png' alt='Hotel' />

                <p className="text-sm text-grayPrimary">
                    Hotel
                </p>
            </div>

            <div className="flex flex-col items-center gap-1">
                <Image width={35} height={35} src='/cottage-icon.png' alt='Hotel' />

                <p className="text-sm text-grayPrimary">
                    Hotel
                </p>
            </div>

            <div className="flex flex-col items-center gap-1">
                <Image width={35} height={35} src='/inn-icon.png' alt='Hotel' />

                <p className="text-sm text-grayPrimary">
                    Hotel
                </p>
            </div>

        </div>
    )
}

export default Icons
