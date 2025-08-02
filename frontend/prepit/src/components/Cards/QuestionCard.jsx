import React, { useRef, useEffect, useState } from 'react'
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from 'react-icons/lu'
import AIResponsePreview from '../../pages/InterviewPrep/components/AIResponsePreview'

const QuestionCard = ({
    question,
    answer,
    onLearnMore,
    isPinned,
    onTogglePin
}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [height, setHeight] = useState(0)
    const contentRef = useRef(null)

    useEffect(() => {
        if (isExpanded) {
            const contentHeight = contentRef.current.scrollHeight;
            setHeight(contentHeight)
        } else {
            setHeight(0)
        }
    }, [isExpanded])

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className='relative bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 mb-4 group'>
            <div className='p-5'>
                <div className='flex items-start justify-between gap-4'>
                    <div className='flex items-start gap-3 flex-1'>
                        <div className='flex-shrink-0 w-7 h-7 bg-teal-400 rounded-full flex items-center justify-center'>
                            <span className='text-xs font-medium text-white'>Q</span>
                        </div>
                        
                        <div className='flex-1 min-w-0'>
                            <h3 
                                className='text-sm font-medium text-gray-900 leading-relaxed cursor-pointer hover:text-blue-600 transition-colors duration-150' 
                                onClick={toggleExpand}
                            >
                                {question}
                            </h3>
                        </div>
                    </div>

                    <div className={`flex-shrink-0 flex items-center gap-2 transition-all duration-200 ${
                        isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}>
                        <button 
                            className='p-1.5 rounded hover:bg-gray-100 transition-all duration-150 hover:scale-105'
                            onClick={onTogglePin}
                            title={isPinned ? "Unpin question" : "Pin question"}
                        >
                            {isPinned ? (
                                <LuPinOff className='w-4 h-4 text-amber-600' />
                            ) : (
                                <LuPin className='w-4 h-4 text-gray-500 hover:text-amber-600 transition-colors duration-150' />
                            )}
                        </button>

                        <button 
                            className='flex items-center gap-1.5 px-3 py-1.5 bg-teal-400 text-white text-xs font-medium rounded hover:bg-teal-600 transition-all duration-150 hover:scale-105'
                            onClick={() => {
                                setIsExpanded(true)
                                onLearnMore()
                            }}
                        >
                            <LuSparkles className='w-3.5 h-3.5' />
                            <span>Learn More</span>
                        </button>

                        <button
                            className='p-1.5 rounded hover:bg-gray-100 transition-all duration-150 hover:scale-105'
                            onClick={toggleExpand}
                            title={isExpanded ? "Collapse answer" : "Expand answer"}
                        >
                            <LuChevronDown
                                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                                    isExpanded ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                    </div>
                </div>

                <div
                    className='overflow-hidden transition-all duration-300 ease-out'
                    style={{ maxHeight: `${height}px` }}
                >
                    <div className='pt-4' ref={contentRef}>
                        <div className='bg-gray-50 border border-gray-200 rounded-lg p-4'>
                            <div className='flex items-center gap-2 mb-3'>
                                <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                                    <span className='text-xs font-medium text-white'>A</span>
                                </div>
                                <span className='text-xs font-medium text-gray-600 uppercase tracking-wide'>Answer</span>
                            </div>
                            <AIResponsePreview content={answer} />
                        </div>
                    </div>
                </div>
            </div>
            
            {isPinned && (
                <div className='absolute top-3 right-3'>
                    <div className='w-1.5 h-1.5 bg-amber-500 rounded-full'></div>
                </div>
            )}
        </div>
    )
}

export default QuestionCard