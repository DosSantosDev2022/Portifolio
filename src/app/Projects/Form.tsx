'use client'
import { Input } from "@/components/global/Form/Input";
import { useRouter, useSearchParams } from "next/navigation";

export function FormSearch() {

    const searchParams = useSearchParams()

    const {push} = useRouter()

    function handleSearch(term : string){
        const params = new URLSearchParams(searchParams)
          
        if(term) {
            params.set('q', term)
        }else {
            params.delete('q')
        }
         
        push(`/Projects/search/?${params.toString()}`)
        
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            const target = e.target as typeof e.target & {
                search: {value : string}
            }
            const term = target.search.value
            handleSearch(term)
        }}>

            <Input className='w-[296px] ' placeholder='Buscar...' type="search" id="search" />
        </form>
    )
}