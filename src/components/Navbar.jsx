import React, { useEffect, useRef, useState } from 'react';
import quizletLogo from '../assets/quizlet-logo-large-2.png'
import { Dropdown } from './Dropdown';
import { DropdownSubjects } from './DropdownSubjects';
import { SearchBox } from './SearchBox';

export function Navbar() {
    const [showStudyTools, setShowStudyTools] = useState(false);
    const [showSubjects, setShowSubjects] = useState(false);
    const studyToolsRef = useRef();
    const showSubjectsRef = useRef();

    useEffect(()=>{
        function handleClickOutside(event){
            if(studyToolsRef.current && !studyToolsRef.current.contains(event.target)){
                setShowStudyTools(false)
            }
            if(showSubjectsRef.current && !showSubjectsRef.current.contains(event.target)){
                setShowSubjects(false)
            }
        }
        if (showStudyTools || showSubjects) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showStudyTools, showSubjects])
    return (
        <div className="bg-white h-16 ">
            <div className='flex mx-4! items-center grid-cols-3 justify-between'>
                <div className='flex my-4 bg-red-400 w-90 items-center justify-between text-sm font-medium'>
                    <div>
                        <img src={quizletLogo} alt="Quizlet Logo" className="h-8" />
                    </div>
                    <div
                        className='flex bg-green-600 items-center w-23 justify-between relative cursor-pointer'
                        onClick={() => setShowStudyTools((prev) => !prev)}
                        ref={studyToolsRef}
                    >
                        Study tools 
                        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                        >
                            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/>
                        </svg>
                        {showStudyTools && (<Dropdown/>)}
                    </div>
                    <div
                        className='flex bg-green-200 items-center w-20 justify-between relative cursor-pointer'
                        onClick={() => setShowSubjects((prev) => !prev)}
                        ref={showSubjectsRef}
                    >
                        Subjects
                        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                        >
                            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/>
                        </svg>
                        {showSubjects && (<DropdownSubjects/> )}
                    </div>
                </div>
                <div className='flex'>
                    <SearchBox/>
                </div>
                <div className='bg-blue-400'>
                    hi
                </div>
            </div>
        </div>
    )
}