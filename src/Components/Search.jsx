import {React,useState,useEffect} from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useActionData } from 'react-router-dom'
import { callApi, second } from '../utils/CallApi'

const Search = () => {
    const [suggestions,setSuggestions]=useState(null)
    const [searchTerm,setSearchTerm]=useState('')

    const getSuggestions=()=>{

    callApi(`dta/suggestions.json`).then((suggestionResults)=>{
        setSuggestions(suggestionResults)
    })
    }
    useEffect(()=>{
        getSuggestions()
    })

    return (
        <div className='w-[100%]'>
            <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
                <select className='p-2 bg-gray-300 text-black border text-xs xl:text-sm'>
                    <option>ALL</option>
                    <option>Deals</option>
                    <option>Amazon</option>
                    <option>Fashion</option>
                    <option>Computers</option>
                    <option>Home</option>
                    <option>Mobiles</option>
                </select>
                <input className='flex grow items-center h-[100%] rounded -l text-black' type='text' />
                <button>
                    <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900'></MagnifyingGlassIcon>
                </button>
                {suggestions &&
                <div></div>
                }

            </div>
        </div>
    )
}

export default Search
