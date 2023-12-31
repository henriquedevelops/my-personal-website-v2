'use client'

import { motion } from 'framer-motion'
import React, { FC } from 'react'

interface Props {
  className: string
}

const StarBackground: FC<Props> = ({ className }) => {
  return (
    <motion.svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 32"
      className={className}
      animate={{ scale: [1, 1.3, 1] }}
      transition={{
        ease: 'linear',
        duration: Math.random() * 0.2 + 1.7,
        repeat: Infinity,
      }}
    >
      <path
        id="&lt;Path&gt; copy 2"
        d="m27.5 16.6c0.2-0.5 0-1.2-0.8-1.2q-0.1 0-0.3 0c-3-0.4-5.9-1.4-8.8-2.1 0.9-0.8 1.7-1.7 2.2-2.7 0.2-0.5-0.4-0.9-0.8-0.8q-0.9 0.4-1.7 1c-0.1-2.8-0.5-5.6-1.1-8.1q0.1-0.6 0.3-1.3c0.3-1.2-1.6-1.9-1.9-0.7-1 3.4-1.9 7.1-2.5 10.7q-1.3-1.3-2.7-2.5c-0.6-0.5-1.2 0.4-0.8 0.9 0.7 1.1 1.6 2.1 2.6 3.1-0.9 0.1-1.8 0.4-2.5 0.5-2.7 0.4-5.4 0.8-8.1 1-0.6 0.1-0.6 0.8-0.1 1.1-0.5 0.3-0.4 1.1 0.3 1 2.8-0.5 5.9 0.3 8.6 1.1q0.4 0.1 0.8 0.3-1 1.1-2 2.2c-0.5 0.6 0.1 1.3 0.7 0.9 1-0.7 2-1.4 2.9-2.2 0.2 4 0.9 8.3 2.3 11.9 0.5 1.2 2.4 0.4 1.9-0.8q-0.4-0.9-0.6-1.8c0.1-3.1 0.8-6.2 1-9.3q0.1-0.1 0.2-0.1c0.8 1.1 1.6 2.2 2.5 3.3 0.5 0.5 1.4 0.1 1.3-0.6-0.2-1.2-0.8-2.3-1.5-3.2 0.3-0.1 0.7-0.2 1.1-0.3 1.7-0.3 3.4-0.3 5.2-0.6q0.7 0.1 1.4 0 0.2 0 0.4-0.1c0.3-0.1 0.5-0.3 0.5-0.6z"
      />
    </motion.svg>
  )
}

export default StarBackground
