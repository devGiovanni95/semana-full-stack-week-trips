
import Button from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import React from 'react'
import CurrencyInput from 'react-currency-input-field'

function TripSearch() {
    return (
        <div className='container mx-auto p-5 bg-search-background bg-cover bg-no-repeat'>
            <h1 className='font-semibold text-2xl text-primaryDarker text-center'>
                Encontre sua Próxima <span className='text-primary'>Viagem!</span>
            </h1>

            <div className="flex flex-col gap-4 mt-5">
                <Input placeholder='Onde você quer ir ?'/>

                <div className="flex gap-4">
                    <DatePicker placeholderText='Data de Ida ' onChange={() => {}} className='w-full'/>
                    <CurrencyInput placeholder='Orçamento' className='border border-gray-300 rounded-lg w-full'/>
                </div>
                    <Button>Buscar</Button>
            </div> 
        </div>
    )
}

export default TripSearch
