import Icons from '@/components/Icons'
import Titulo from '@/components/Titulo'
import React from 'react'

function QuickSearch() {
    return (
        <div>
            <div className="container mx-auto p-5">
                <Titulo texto="Tente Pesquisar por"/>
            </div>
                <Icons/>        
        </div>
    )
}

export default QuickSearch
