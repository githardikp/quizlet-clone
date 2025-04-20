import { useEffect, useRef, useState } from 'react'
import data from '../dataset/MOCK_DATA.json'

export function SearchBox(){
    const [query, setQuery] = useState('')
    const [showSearchResults, setShowsearchResults] = useState(false);
    const searchBoxRef = useRef();
    const inputRef = useRef();
    const [showCloseSearch, setShowCloseSearch] = useState(false)
    const closeSearchRef = useRef();

    useEffect(()=>{
        function handleClickOutside(event){
            if(inputRef.current && !inputRef.current.contains(event.target)){
                setShowsearchResults(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

        //close search

        if(showSearchResults){
            setShowCloseSearch(true)
        }

    }, [showSearchResults, showCloseSearch])
    return(
        <div className='flex justify-center items-center flex-col'>
            <div className="relative w-150">
                <div 
                    className="flex items-center h-11 rounded-lg bg-gray-100 px-4 mb-2 mt-2"
                    ref={searchBoxRef}
                    onFocus={()=>(searchBoxRef.current.style.border='2px solid blue')}
                    onBlur={()=>{{searchBoxRef.current.style.border=''}}}
                >
                    <button
                        onClick={()=>(inputRef.current.focus())}
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="#596280"
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
                        onChange={(e)=>{
                            setQuery(e.target.value)
                            setShowsearchResults(true)
                        }}
                        className='bg-gray-100 outline-none w-full placeholder:font-semibold'
                        ref={inputRef}
                    />
                    {showCloseSearch &&
                        <button
                            onClick={()=>{
                                setShowsearchResults(false);
                                setShowCloseSearch(false)

                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="50" fill="#596280" />
                                <line x1="30" y1="30" x2="70" y2="70" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                                <line x1="70" y1="30" x2="30" y2="70" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                            </svg>
                        </button>
                    }
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