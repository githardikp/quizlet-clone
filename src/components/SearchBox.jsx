import { useEffect, useRef, useState } from 'react'
import data from '../dataset/MOCK_DATA.json'

export function SearchBox(){
    const [query, setQuery] = useState('')
    const [showSearchResults, searchResults] = useState(true);
    const searchBoxRef = useRef();
    const inputRef = useRef();
    useEffect(()=>{
        function handleClickOutside(){
            if(inputRef.current && )
        }
        document.addEventListener('mousedown', handleClickOutside)
    }, [])
    return(
        <div className='flex justify-center items-center flex-col'>
            <div className="relative w-150">
                <div 
                    className="flex items-center h-10 rounded-md bg-gray-100 px-2 mb-2"
                    ref={searchBoxRef}
                    onFocus={()=>(searchBoxRef.current.style.border='2px solid blue')}
                    onBlur={()=>{{searchBoxRef.current.style.border=''}}}
                >
                    <button
                        onClick={()=>(inputRef.current.focus())}
                    >
                        <svg
                            className="w-5 h-5 text-gray-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                        </svg>
                    </button>
                    <input
                        type="text"
                        value={query}
                        placeholder='Find it faster with a search'
                        onChange={(e)=>setQuery(e.target.value)}
                        className='bg-gray-100 outline-none w-full'
                        ref={inputRef}
                    />
                </div>
                {showSearchResults && query && (
                    <div className="absolute top-full left-0 mt-1 w-full z-10 bg-white rounded-xl shadow">
                        {
                            data.filter(post =>
                                post.title.toLowerCase().includes(query.toLowerCase())
                            ).map((post) => (
                                
                                <div key={post.id} className='flex w-full items-center  p-2 last:border-b-0 rounded-xl '>
                                    <svg
                                        className="w-5 h-5 text-gray-400 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                                    </svg>
                                    <div className='font-medium'>{post.title}</div>
                                </div>
                            )).slice(0,7)
                        }
                        <div className='pl-2 p-4 text-sm font-medium text-gray-600'>
                            View all results
                        </div>   
                    </div>
                )}
            </div>
        </div>
    )
}