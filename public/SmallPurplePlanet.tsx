'use client'

import { motion } from 'framer-motion'
import React, { FC } from 'react'

interface Props {
  className: string
}

const GreenPlanet: FC<Props> = ({ className }) => {
  return (
    <motion.svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 45"
      className={className}
      animate={{ y: [-3, 3, -3] }}
      transition={{
        ease: 'easeInOut',
        duration: Math.random() * 0.5 + 3,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <title>Small purple planet</title>
      <style>
        {`.small-purple .s0 { fill: #896496 } 
		.small-purple .s1 { fill: #260029 } `}
      </style>
      <g id="&lt;Group&gt;" className="small-purple">
        <path
          id="&lt;Path&gt;"
          className="s0"
          d="m2.2 17.1c1.6-6.6 6.8-12.3 13.2-14.5 4.2-1.5 8.9-1.5 13.3-0.7 2.4 0.4 4.8 1.1 6.8 2.4 1.4 0.9 2.6 2.1 3.7 3.3 5.1 6 6.7 14.7 3.9 22.1-2.8 7.3-9.8 12.8-17.6 13.7-14.5 1.6-26.7-12.1-23.3-26.3z"
        />
        <g id="&lt;Group&gt;">
          <path
            id="&lt;Compound Path&gt;"
            fill-rule="evenodd"
            className="s1"
            d="m22.7 44.6c-12.2 0-22.1-9.9-22.1-22.1 0-12.2 9.9-22.1 22.1-22.1 12.2 0 22.1 9.9 22.1 22.1 0 12.2-9.9 22.1-22.1 22.1zm0-42.2c-11.1 0-20.1 9-20.1 20.1 0 11 9 20 20.1 20 11.1 0 20-9 20-20 0-11.1-8.9-20.1-20-20.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m5.7 10.8c7.2-0.1 15.2-2 19.5-8.4 0.4-0.6-0.5-1.2-0.9-0.6-4.4 5.8-11.5 7.8-18.5 7.9-0.7 0-0.8 1.1-0.1 1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m1.7 23.7c11.8-0.9 25-9.2 27.1-21.5 0.1-0.8-1-1-1.3-0.3-4.2 12.1-13.6 18.3-26 20.7-0.7 0.1-0.5 1.2 0.2 1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m3.2 31c12.1-5 25.2-13.5 27-27.5 0.2-0.9-1.3-1.1-1.4-0.1-1.8 14.3-14.9 20.3-26 26.9-0.4 0.2-0.1 0.9 0.4 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m10.5 39.9c12-1.5 30.7-22.6 21.4-34.8-0.3-0.4-1 0-0.9 0.5 1.3 7.9 0.7 13.8-4.1 20.7-4.2 6.1-9.8 10.1-16.6 12.8-0.5 0.2-0.2 0.9 0.2 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m20.2 43.2c14.4-8.1 19.6-26.7 10.8-40.8-0.7-1.1-2.2-0.1-1.5 0.9 9.2 14.2 2.8 29.9-9.8 39.3-0.4 0.2 0 0.9 0.5 0.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m31.3 5.2c9.4 8.4 9.1 22.4 3.3 32.6-0.3 0.5 0.2 1 0.6 0.7 9.1-6.7 6.1-29-3.4-34.1-0.5-0.2-1 0.4-0.5 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m0.7 25.6c12.7 7.1 27.6 13 40.8 4.3 0.8-0.6-0.1-1.7-0.9-1.2-13.5 8.8-26.6 1.8-39.5-3.9-0.4-0.2-0.8 0.5-0.4 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m5 35.8c14 2.6 30.6-2.7 37.8-15.7 0.4-0.6-0.4-1.2-0.8-0.6-9.3 11.8-21.8 17.5-36.9 15.5-0.6-0.1-0.6 0.7-0.1 0.8z"
          />
        </g>
      </g>
    </motion.svg>
  )
}

export default GreenPlanet
