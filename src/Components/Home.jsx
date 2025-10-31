import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className='w-full'>
        <div className=' flex gap-6 mt-20 items-center justify-center max-w-screen-md mx-auto p-16'>
            <button className='flex items-center justify-center space-x-1 w-40 h-16 rounded-lg border bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg hover:bg-none hover:border border-blue-800'>
            <FontAwesomeIcon icon={faVideo} />
                <p>Movies</p>
            </button>
            <button className='flex items-center justify-center space-x-1 w-40 h-16 rounded-lg border bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg hover:bg-none hover:border border-blue-800'>
                <FontAwesomeIcon icon={faMusic} />
                <p>Music</p>
            </button>
            <button className='flex items-center justify-center space-x-1 w-40 h-16 rounded-lg border bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg hover:bg-none hover:border border-blue-800'>
                <FontAwesomeIcon icon={faPlaneDeparture} />
                <p>Trip</p>
            </button>
        </div>
    </div>
  )
}

export default Home
