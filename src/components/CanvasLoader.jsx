import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
  const progress = useProgress();
  return (
    <Html as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span className='canvas-loader'/>
      <p className='text-[14px] text-[#f1f1f1] font-[800] mt-40'>
        {progress.total !==0? `${progress.total.toFixed(2)}%`: 'Loading...'}
      </p>
    </Html>
  )
}

export default CanvasLoader