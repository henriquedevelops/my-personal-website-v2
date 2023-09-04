import React, { FC } from 'react'

interface Props {
  className: string
}

const SmallMeteor: FC<Props> = ({ className }) => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 99 41"
      className={className}
    >
      <style>
        {`.small-meteor .s0 { fill: #f3b643 } 
		.small-meteor .s1 { fill: #260029 } `}
      </style>
      <g id="&lt;Group&gt;" className="small-meteor">
        <path
          id="&lt;Path&gt;"
          className="s0"
          d="m19.2 29.5c7.4-4 14.2-11 22.6-12.5-5.8-4-14.6-3.3-20.9-1.2 9.8-5.3 25.3-8.1 35.6-5.5-3-4.2-8.9-5.9-13.9-5.3 8.3-3.2 17.6-2.7 26.5-2q7 0.6 14 1.4c3.8 0.5 7.9 2.6 10.6 5.1 2.5 2.3 3.5 4.3 3.7 7.6 0 1.4 0 2.8-0.6 4-0.5 1.2-1.3 2.1-2.2 3-3.3 3.2-7.4 5.6-11.8 7-6.8 2-14.6 1.6-20.6 5.4 0.7-3.1 2.6-6 5.3-7.8-10.5 1-19.3 9.3-29.9 10 2.7-2.1 5-4.7 6.9-7.5 0.3-0.6 0.7-1.4 0.1-1.9-0.3-0.3-0.8-0.2-1.2-0.1-6.9 1.4-13 5.9-20.1 6.8-4.4 0.6-13.8 0-19.1-4 3.6-0.2 12.6-1.2 15-2.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m85.8 4.5c-7.1-2-15.4-2.6-22.7-3.6-7.8-1.1-14.1 0.2-21.2 3.4-0.3 0.1-0.3 0.4-0.3 0.6-0.6 0.1-0.4 1.1 0.3 1 4.3-0.4 7.9 1 11.5 2.9-5.3-1.2-11.6 0.2-16.6 1.2-5.6 1.1-13.1 2.3-17.5 6.2-0.6 0.5 0.1 1.2 0.7 0.8q0.1-0.1 0.2-0.2 0.2 0.1 0.4 0.1c7.4-1.5 13.5-2.2 20.8 0.2 0.6 0.2 1.1-0.6 0.5-0.9-5.8-3.5-12.6-2.4-18.9-1 8.9-4.5 23.1-7.1 31.8-4.9 0.3 0.1 0.6-0.1 0.7-0.4q0.3 0.2 0.6 0.4c0.5 0.2 1.1-0.3 0.7-0.7-3-3.2-8.1-4.8-12.6-4.9 12.7-4 24.3-1.4 37.5 0.7 11.1 1.7 21.6 12.7 9.3 20.4-8.5 5.3-19.2 5.9-27.9 10.5 1.1-2.7 2.8-4.8 5.2-6.6 0.3-0.2 0.3-0.5 0.2-0.7 0.3-0.2 0.2-0.8-0.3-0.8-10.6 1-18.4 9.8-28.8 10.9 3.1-2.3 4.9-6.7 7-9.6q0.7-0.1 1.4-0.2c0.6 0 0.6-1 0-1.1-0.4 0-0.8 0-1.1 0-0.3-0.1-0.6-0.2-0.8 0-5.3 0.3-9.7 3-14.6 5.4-10.5 5.2-18.4 1.3-28.3-1.9 6.6 1.6 12.5 0.8 18.4-2.8 6.3-3.9 11.3-10.4 19.1-11.1 0.4 0 0.4-0.8-0.1-0.8-5.1 0.1-9.1 3-13.1 6-7.6 5.8-14.3 9.7-24.3 7.8-0.5-0.1-0.7 0.6-0.3 0.8q-0.7-0.2-1.4-0.4c-0.6-0.2-0.9 0.7-0.3 0.9 6.9 2.7 14 6.9 21.7 6 8-0.9 14.2-6.6 22-8.3-1 1.4-1.9 2.9-2.8 4.3-1.5 2.2-3.1 3.6-5.1 5.2-0.2 0.1-0.2 0.4-0.1 0.6q0.1 0.1 0.1 0.1 0.1 0.1 0.3 0.1c11.2 0.7 19.2-8.2 29.5-10.6-2.3 1.8-4.9 4.5-4.8 7.5-0.7 0.5-0.3 1.4 0.4 1.1 9.5-4.5 34-5.6 36.6-18.7 1.4-7.1-7.2-13.3-13-14.9z"
        />
      </g>
    </svg>
  )
}

export default SmallMeteor
