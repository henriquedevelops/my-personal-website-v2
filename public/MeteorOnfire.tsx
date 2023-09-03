'use client'

import { motion } from 'framer-motion'
import React, { FC } from 'react'

interface Props {
  className: string
}

const MeteorOnfire: FC<Props> = ({ className }) => {
  return (
    <motion.svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 149 128"
      className={className}
      animate={{ y: -10 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: 0.1,
      }}
    >
      <title>Meteor falling</title>
      <style>
        {`.meteor-onfire .s0 { fill: #e69c43 } 
		.meteor-onfire .s1 { fill: #ffb84a } 
		.meteor-onfire .s2 { fill: #ff8345 } 
		.meteor-onfire .s3 { fill: #260029 } `}
      </style>
      <g id="&lt;Group&gt;" className="meteor-onfire">
        <g id="&lt;Group&gt;">
          <path
            id="&lt;Path&gt;"
            className="s0"
            d="m10.2 110.5c2.8-5.9 5.6-11.8 9.2-17.3 4.4-6.6 9.9-12.4 15.4-18.2-3.8 0.9-7.4 2.6-10.6 4.8 7.9-16.7 20.8-31 36.6-40.6-2.7-0.5-5.5-0.3-8.1 0.7 13.1-12 28.4-21.8 44.8-28.6 5.1-2.1 10.4-4 15.9-4.3 5.5-0.4 11.3 1 15.4 4.7 3 2.8 4.9 6.6 6.3 10.5 1.2 3.2 2.1 6.6 1.9 10-0.5 7.1-5.5 12.9-10.5 17.7-14.9 14.4-32.6 25.9-45.4 42.1q0.6-4 1.3-8c-3.3 6.2-10.4 9.3-17.1 11.2-6.7 1.9-13.9 3-19.7 7.1q3.2-5.8 6.4-11.6c-4.5 0.5-8.2 3.6-11.7 6.4-10.5 8.6-22.1 18.8-34.3 24.8-1.4-2.5 3.1-8.9 4.2-11.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m128.8 11.7c-4.1-3.7-9.9-5.1-15.4-4.7-5.5 0.3-10.8 2.2-15.9 4.3q-6.3 2.6-12.3 5.8c-5.4 5.2-10.1 10.9-14 17.3 1.6-1.4 3.9-2 6-1.7-6.2 13.1-21.5 19.4-29.8 31.4 3.6-3.1 8.2-5.1 13-5.5-3.6 8.8-12 14.5-19.9 19.8-3.9 2.6-19.2 12.1-16.8 18 6.9-3.2 12.3-8.4 19.8-10.7 6.2-1.9 12.6-2.6 18.7-4.6 6.1-2 12-5.7 14.7-11.5q-5.2 10.6-10.3 21.2c6.8-9.7 19.6-14 25.7-24.1q-1.5 5.2-3 10.4c2.6-5.6 7.9-9.5 13.5-11.9 3.3-1.5 6.8-2.4 10.2-3.3 4.6-3.9 9.2-7.8 13.5-12 5-4.8 10-10.6 10.5-17.7 0.2-3.4-0.7-6.8-1.9-10-1.4-3.9-3.3-7.7-6.3-10.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m107.4 13.3c3.7-0.4 7.6 1.7 9.1 5.1 2.1-1.3 4.7-1.9 7-1.1 2.3 0.7 4.2 3 4.1 5.4-0.1 0.9-0.3 1.7-0.4 2.6 0 1.1 0.3 2.2 0.5 3.2 0.8 3.8 0.6 7.8 0.5 11.7-0.1 2.3-0.2 4.8-1.5 6.7-2.1 3.1-6.4 3.6-10.2 3.5-0.7 0-1.3-0.1-2 0.1-0.7 0.3-1.2 0.8-1.8 1.2-3.9 2.5-10 0.3-11.3-4.2-1.7 1.2-4.1 0.8-5.8-0.3-1.7-1.1-2.8-2.9-4-4.6-2.2-3.6-4.6-7.8-3.2-11.8 0.4-0.9 0.9-1.8 1.2-2.8 0.2-0.9 0-1.9 0.3-2.9 0.3-1.1 1-2 1.9-2.7 2.3-2.2 5.5-2.4 8-4.1 2.7-1.9 3.9-4.6 7.6-5z"
          />
        </g>
        <g id="&lt;Group&gt;">
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m91.6 30c-1-2.9-1-6.4 1.8-8.3 2.8-1.9 5.9-0.5 8.4 1.1 0.8 0.5 1.9-0.5 1.1-1.2-2.8-2.7-7.1-3.5-10.4-1.1-3.3 2.3-3.6 6.6-1.8 9.9 0.3 0.6 1.1 0.2 0.9-0.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m103.3 23.5c0.1-1 0.3-2.2 1.4-2.5 1.2-0.4 2.4 0.3 3.6-0.1 0.4-0.2 0.3-0.7 0.2-0.9-1-1.5-3.6-1.4-5-0.7-1.6 0.9-2 2.6-1.9 4.3 0.1 1 1.7 0.9 1.7-0.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m101 19.8c0.8-1.7 0.9-3.2 2.5-4.5 1.5-1.2 3.5-1.7 5.4-1.7 1.8 0 3.8 0.6 5.3 1.7 1.6 1.2 1.9 3.1 3.2 4.5 0.4 0.5 1 0.2 1.1-0.3 0.9-5.1-6.4-7.9-10.3-7.6-3.6 0.2-9.7 3.4-7.9 7.9 0.1 0.4 0.6 0.3 0.7 0z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m115.8 19.9c0.5 0.3 1.2 0.4 1.7 0.8 0.3 0.2 0.5 0.5 0.9 0.7 0.3 0.1 0.6-0.1 0.7-0.4 0.1-1.3-2-1.9-2.9-2.2-0.7-0.2-1.1 0.8-0.4 1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m117.6 17.8c2.5-1.1 5.5-1.2 7.7 0.5 2.8 2.3 1.8 5.4 0.1 8-0.7 0.9 0.7 1.8 1.4 1 2.4-3 3-7.3-0.2-10-2.7-2.4-6.8-2.5-9.6-0.4-0.5 0.4 0 1.2 0.6 0.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m123.8 26.1c3 1.2 5.3 3.1 4.6 6.7-0.6 3.2-3.1 5-6 6-1 0.3-0.4 1.8 0.5 1.7 3.9-0.8 7-4.2 7.4-8.2 0.3-3.8-2.4-7.2-6.2-7.6-0.8 0-1 1.1-0.3 1.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m126.5 37c1.2 1.6 2.3 2.8 2.1 4.9-0.2 2-1.5 3.8-3 5.1-3.4 3.1-8.1 3.8-12.2 1.7-1-0.6-2.1 0.8-1 1.5 4.8 3.1 11.3 1.6 15.1-2.5 3-3.1 4.6-9.3-0.3-11.6-0.6-0.3-1 0.5-0.7 0.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m89.7 27.9c-2.7 0.8-4.1 3.4-3.9 6.2 0.2 2.6 2.2 6.4 5.2 6.2 0.5 0 0.7-0.7 0.4-1-0.7-0.8-1.6-1.1-2.4-1.8-0.8-0.8-1.3-1.9-1.5-3.1-0.3-2.1 0.7-4.3 2.6-5.4 0.5-0.3 0.3-1.3-0.4-1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m91.7 35.7c-3.5 3.4-2.6 8.8 0.9 11.7 1.6 1.4 3.7 2.2 5.9 2 2.2-0.2 5.1-1.6 5.6-3.9 0.2-0.5-0.5-0.8-0.9-0.6-1.7 0.6-2.6 2.3-4.6 2.6-1.7 0.2-3.4-0.4-4.8-1.5-3-2.5-3.3-6.2-1-9.3 0.4-0.6-0.5-1.6-1.1-1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m101.6 47.3c-0.7 2.9 1.2 5.6 3.9 6.6 3.3 1.1 7.1-0.2 9.5-2.6 0.9-0.8-0.3-2.3-1.2-1.5-2 1.7-4.3 2.8-6.9 2.5-2.8-0.5-3.7-2.4-4.2-4.9-0.1-0.5-0.9-0.7-1.1-0.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m95.5 32.4c-0.6 2.2-0.2 4.6 2 5.8 1.8 1.1 4.8 0.9 6.3-0.7 0.4-0.5-0.1-1.1-0.6-1-1.7 0.3-3.1 1.2-4.8 0.5-1.7-0.7-2-2.6-1.8-4.4 0.1-0.6-1-0.8-1.1-0.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m102.3 42.1c0.1 1.4 0.7 2.6 2 3.3 1.1 0.6 2.8 0.8 4 0.2 0.3-0.2 0.4-0.8-0.1-0.9-0.9-0.3-2-0.1-2.9-0.5-1.1-0.4-1.7-1.2-2-2.3-0.1-0.7-1-0.5-1 0.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m111.8 27.4c1.8 0.6 3.3 1.2 3.9 3.1 0.6 2-0.5 3.2-1 5-0.1 0.4 0.3 0.9 0.8 0.7 2.2-1 2.5-4.3 1.8-6.3-0.8-2.1-3-3.9-5.4-3.6-0.5 0.1-0.6 0.9-0.1 1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m108.3 40.8c1.3 0.5 3.9 0.5 4.2-1.2 0-0.4-0.3-0.6-0.6-0.6-0.6 0.1-1 0.5-1.6 0.7-0.5 0.1-1.2 0.1-1.7 0-0.7-0.1-0.8 0.8-0.3 1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m115.2 46.4c1.2 0.5 2.3 0.6 3.6-0.1 1.1-0.5 2.1-1.6 2.4-2.8 0.2-0.5-0.3-0.8-0.7-0.5-0.8 0.5-1.4 1.4-2.2 1.9-0.8 0.5-1.8 0.6-2.7 0.4-0.7-0.1-1.1 0.8-0.4 1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m102.2 31.4c0.4-2.1 2.1-3.2 3.4-4.8 0.3-0.4-0.2-0.8-0.6-0.7-2.2 0.9-4 2.9-4.1 5.4 0 0.9 1.1 0.9 1.3 0.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m71 34.1c8.1-8.5 15.8-18.8 26.6-23.9 11.1-5.3 25.5-4.2 33.9 5.5 20.6 23.8-15.2 43.5-33 51.7-0.6 0.3-0.2 1.1 0.4 0.9 19.8-7 54.3-28.4 34.6-53-6.8-8.4-18.1-11.5-28.6-9.4-15.2 3.2-24.7 16.8-34.4 27.6-0.3 0.4 0.2 0.9 0.5 0.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m70.6 35.4c2.4-1.1 4.6-1.9 7.1-2.6 0.4-0.1 0.5-0.8 0-0.8-2.7 0-5.2 1.2-7.5 2.4-0.6 0.3-0.2 1.2 0.4 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m77.6 33.5c-3.4 2.5-5.5 5.5-8.1 8.7-3 3.6-6.4 6.2-10.1 8.9-5.4 3.9-11.1 8-13.2 14.6-0.2 0.6 0.6 0.9 0.9 0.3 3.7-7.3 9.5-11.2 15.9-16 6-4.5 9.3-11.2 15-16 0.4-0.3-0.1-0.8-0.4-0.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m47 66.1c1.9-2.2 11-8.2 14.7-7 0.7 0.2 1.1-0.8 0.4-1q-0.3-0.1-0.5-0.3c-0.2 0-0.6 0.1-0.7 0.3-10.4 17-34.6 21.1-40.2 41.7-0.2 0.6 0.6 0.9 0.8 0.3 4.5-11.3 12.6-17.6 22.3-24.2 3.7-2.5 7.5-5 10.8-8 1.1-1 7.5-8.7 7.1-8.8 0.7 0.3 1.1-0.8 0.4-1-4.2-1.7-13.4 4.2-15.9 7.5-0.3 0.5 0.4 1 0.8 0.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m22.2 99.8c9.6-11.9 22.2-13.1 36.2-16 9.2-1.9 13.9-7.5 20.3-13.8 0.6-0.5-0.1-1.3-0.7-0.9-6.4 4.7-10 10.7-18.4 12.9-5.6 1.5-11.5 1.4-17.1 3.1-8.4 2.4-16.1 6.9-20.9 14.3-0.3 0.4 0.3 0.8 0.6 0.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m76.4 69.6c-0.7 8.9-10.8 14.2-10.4 23.1 0 0.3 0.6 0.4 0.7 0 2.3-8.4 10.5-14 11-22.9 0.1-0.9-1.3-1-1.3-0.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m67 92.2c2.5-6.6 9-9.2 14.4-13.1 4.7-3.3 9.4-8.1 13.1-12.6 0.3-0.3-0.2-0.7-0.5-0.6-3.1 1.1-5.1 4-7.3 6.4-2.7 2.8-5.5 5.1-8.7 7.3-4.9 3.2-10.1 6.3-11.9 12.3-0.1 0.5 0.7 0.8 0.9 0.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m92.7 67c-0.9 3.8-2.9 7-4.2 10.6-0.2 0.4 0.4 0.7 0.6 0.3 2.3-2.9 4-7 4.6-10.7 0.1-0.5-0.8-0.7-1-0.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m89.5 78.7c1.6-2.3 3-4.6 5-6.6 1.9-2 4.1-3.4 6.2-5.2 0.4-0.3 0-0.9-0.5-0.7-4.7 1.9-9.6 7.4-11.4 12.1-0.2 0.5 0.4 0.8 0.7 0.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m84.9 16.3c-9.8 9.1-26.3 12.4-32.5 24.9-0.2 0.4 0.5 0.8 0.8 0.4 7.8-12.3 23.8-13.6 32.3-24.7 0.3-0.4-0.3-0.9-0.6-0.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m53 41.7c2.3-1.2 7.3-1.9 8.3-3.1-0.6 0.7-2.1 1.2-2.9 1.7-5 3.1-9.6 6.8-13.9 10.8-8.6 8-17.4 17.9-20.8 29.5-0.1 0.5 0.7 0.8 0.9 0.3 4.2-10.5 10.8-19.3 18.8-27.2 3.5-3.4 7.2-6.6 11.1-9.5 1.9-1.4 5.1-4.6 7.6-4.9 0.4 0 0.4-0.7 0-0.8-2.6-1.2-7.2 1.3-9.4 2.5-0.5 0.2-0.1 0.9 0.3 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m24.5 81.1q2.2-1.6 4.4-3.1c1.6-1.1 3.4-1.9 4.8-3.2 0.3-0.3-0.1-0.9-0.5-0.7-1.7 0.6-3.2 1.8-4.7 2.8-1.6 1.1-3.2 2.2-4.6 3.5-0.5 0.4 0.1 1 0.6 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m35.3 73.7c-18.3 12.6-22.7 36.4-34.6 53.9-0.2 0.3 0.3 0.7 0.6 0.4 13.5-17.2 16.9-39.5 34.4-53.8 0.4-0.3-0.1-0.8-0.4-0.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m2.1 127.7c6.6-8.5 16.3-11.8 24.7-18 8.6-6.3 15.1-16.1 26.2-18.2 0.7-0.1 0.5-1.2-0.2-1.1-10.4 1.4-17 10.5-24.7 16.7-9 7.1-19.8 10.5-26.7 20.1-0.3 0.4 0.4 0.9 0.7 0.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m51.7 91c-2.6 3.5-5.6 8.3-6.3 12.7 0 0.4 0.6 0.6 0.8 0.2 1.1-1.8 1.7-3.8 2.6-5.7 1.2-2.3 2.5-4.4 3.8-6.5 0.4-0.7-0.5-1.3-0.9-0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m45.6 103.9c5.8-6.3 15.1-4.4 22.4-7.8 6.4-2.9 11.7-8.3 16.4-13.5 0.3-0.4-0.3-0.9-0.7-0.6-8.3 6.3-13.3 13-24.2 15.1-5.6 1-10.9 1.4-14.6 6.1-0.4 0.5 0.3 1.1 0.7 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m82.1 84.5c0.1 2.3-0.7 4.9-0.7 7.2-0.1 0.5 0.7 0.9 0.9 0.4 7.6-14.2 23.3-20.7 33.2-32.7 0.3-0.4-0.3-0.9-0.6-0.6-8.7 6.3-17.4 13.9-24.9 21.6-1.4 1.4-2.8 2.9-4 4.5-0.8 0.9-3 5.2-3.6 5.5 0.1-0.1 1.2-4.7 0.7-6.2-0.2-0.6-1-0.2-1 0.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m85.1 18.1c0.8-0.8 1.8-1.4 2.6-2.3 0.3-0.3-0.1-0.8-0.5-0.5-0.9 0.7-1.9 1.3-2.7 2.1-0.5 0.4 0.1 1.2 0.6 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m87.8 12.1c5.6-4.1 10.9-7.2 17.6-8.9 0.5-0.1 0.4-0.8-0.1-0.7-6.8 0.4-12.8 5-18 9-0.4 0.3 0.1 0.8 0.5 0.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m111.5 2.9c1.6-0.7 3.1-0.3 4.8-0.1 0.4 0 0.7-0.6 0.3-0.8-1.7-1-3.9-0.8-5.6-0.1-0.6 0.3-0.2 1.2 0.5 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m132.2 9c3 3.2 6.2 6.5 8.4 10.3 2.7 4.8 2.6 9.4 1.5 14.6-0.1 0.5 0.7 0.6 0.9 0.2 4.5-10.4-3.3-18.8-10.2-25.6-0.4-0.3-0.9 0.1-0.6 0.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m106.7 71.6c10.2-8.9 25.3-15.4 32.1-27.4 0.3-0.6-0.4-1.1-0.8-0.6-4.8 6.3-10.4 10.8-16.9 15.3-5.3 3.6-11 7.1-15.1 12.1-0.3 0.4 0.3 0.9 0.7 0.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m141.8 46.5c0.7-0.8 1.1-1.8 1.7-2.7 0.4-0.9 1-1.8 1.4-2.7 0.2-0.3-0.4-0.7-0.7-0.4-1.5 1.3-2.1 3.6-3.2 5.3-0.4 0.5 0.4 1 0.8 0.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m61.2 28c6.1-5.4 14.8-7 20.5-13 0.3-0.4-0.1-0.9-0.5-0.6-6.5 4.9-14.6 7.4-20.6 12.9-0.4 0.4 0.1 1.1 0.6 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m123.2 0.8c2.9 1.5 5.9 2.4 8.8 3.8 3.7 1.8 6 4 7.8 7.7 0.2 0.4 0.8 0.2 0.8-0.3-1.1-7.2-11.4-9.9-17-12-0.6-0.3-0.9 0.6-0.4 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m135 1.8c1 0.4 1.9 0.9 2.8 1.6 0.8 0.6 1.4 1.4 2.1 2 0.4 0.3 0.7-0.1 0.6-0.5-0.8-2-3.3-3.2-5.2-3.9-0.6-0.2-0.9 0.6-0.3 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m143 12.2c3.4 5.4 4.9 10.7 4 17.1 0 0.4 0.6 0.6 0.8 0.1 1.9-6.2-0.6-12.5-4.1-17.7-0.2-0.4-0.9 0.1-0.7 0.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s3"
            d="m30.9 113.1c1.5-1.8 3-3.5 4.8-5 1.7-1.5 3.6-2.6 5.3-4 0.4-0.3 0-0.9-0.4-0.7-4 1.7-8.2 5.5-10.5 9.2-0.3 0.5 0.4 1 0.8 0.5z"
          />
        </g>
      </g>
    </motion.svg>
  )
}

export default MeteorOnfire
