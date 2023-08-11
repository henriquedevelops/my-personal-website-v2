import React, { FC } from 'react'

interface Props {
  className: string
}

const GreenishPlanet: FC<Props> = ({ className }) => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 83 82"
      className={className}
    >
      <title>Greenish planet</title>
      <style>
        {`.greenish .s0 { fill: #a5a150 } 
		.greenish .s1 { fill: #c1ba3f } 
		.greenish .s2 { fill: #260029 } `}
      </style>
      <g id="&lt;Group&gt;" className="greenish">
        <g id="&lt;Group&gt;">
          <path
            id="&lt;Path&gt;"
            className="s0"
            d="m10.6 65.6c-7.8-11-11.2-25.3-6.7-36.9 1.8-4.6 4.9-8.7 8.2-12.4 7.7-8.6 17.9-15.9 29.4-16.1 5.7-0.1 11.2 1.5 16.5 3.5 3.7 1.4 7.2 5 10.2 7.8 3.1 3 5.3 4.9 7.1 8.9 3.2 7.2 6.2 14.7 6 22.6-0.2 7.7-3.4 16.4-8.3 22.3-4.9 5.9-9.2 8.5-16 12-3.5 1.9-7.4 2-11.3 2.7-13 2.2-27.3-3.4-35.1-14.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m20.1 24.3c2 2.6 3.1 5.7 4.8 8.5 1.8 2.7 4.5 5.2 7.8 5.1 3.4-0.1 6.2-2.9 7.8-5.9 0.6-1.2 1.1-2.5 2.2-3.3 2.1-1.5 5-0.4 7.2 0.8 2.2 1.3 4.8 2.8 7.2 2 3.3-1.1 4.9-6 8.4-5.9 2.2 0.1 3.7 2.2 5.7 3 1.6-1.2 3.2-2.4 4.1-4.1 0.9-1.8 0.8-4.2-0.8-5.4-1.4-1.1-3.5-0.8-5.3-1-3.9-0.3-7.7-3.3-11.5-2.4-1.9 0.5-3.4 1.8-5.1 2.6-3.2 1.5-7.1 1.4-10.1-0.4-1.4-0.8-2.6-1.9-4-2.8-2.4-1.4-5.3-2-8-1.6-3.3 0.6-6.2 2.4-9.4 3.4-3.2 0.9-7.3 0.6-9-2.3 0.5 0.9-8.3 7.9-5.7 11.8 2.7 4 11.1 0.1 13.7-2.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m7.1 47.5c3.4 0.4 6.8 0 10.1-1 1.4-0.4 2.8-0.9 4.2-0.9 2.6-0.1 5 1.6 7.6 1.7 2.8 0 5.4-1.9 8.2-1.9 3.8 0 6.8 3.5 10.6 4.3 2.9 0.6 6-0.6 8.5-2.3 2.5-1.7 4.7-3.9 7.2-5.6 0.4-0.3 0.9-0.6 1.5-0.7 0.7-0.1 1.4 0.3 2.1 0.7 2.7 1.2 5.9 1.3 8.6 0.2 1.1-0.4 2.3-1.1 3.4-0.7 1.1 0.4 1.6 1.7 1.5 2.9 0 1.1-0.6 2.2-1.2 3.2-2.8-1.2-5.7-2.4-8.7-2-4.5 0.7-7.5 4.8-11.5 6.9-3.6 1.9-8 2.2-12.1 2.2-4.4 0.1-8.8 0-13-1.1-2.5-0.7-4.9-1.7-7.4-2-4-0.5-8.1 0.9-12.1 0.6-2.8-0.2-5.9-1.2-8.4 0.2-0.3 0.2-0.7 0.5-1.1 0.4-0.3-0.1-0.5-0.5-0.7-0.8-0.6-1.6-1.1-4-0.4-5.6 0.9 0.8 1.9 1.1 3.1 1.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s1"
            d="m25.5 66.4c4.1 1.4 8.4 3 12.6 2.3 6.4-1 11.1-7 17.4-8.5 6.1-1.4 12.6 1.6 18.7 0.2-1.8 4.7-5.1 8.7-9.2 11.5-0.6 0.4-1.3 0.8-2 0.8-1 0.1-1.8-0.5-2.7-0.9-3.4-1.7-7.7-1.2-10.7 1.2-0.6 0.5-1.2 1.2-2 1.5-1.7 0.8-3.8 0-5.7-0.2-2.6-0.2-5.3 0.8-7.1 2.7-0.5 0.6-1.1 1.3-1.9 1.4-0.4 0.1-0.9 0-1.3-0.1-5.4-1.6-11-3.8-15.2-7.8-2-1.8-5.1-4.4-1.4-5.5 3.3-0.9 7.4 0.4 10.5 1.4z"
          />
        </g>
        <g id="&lt;Group&gt;">
          <path
            id="&lt;Compound Path&gt;"
            fill-rule="evenodd"
            className="s2"
            d="m41.6 81.4c-22.4 0-40.6-18.2-40.6-40.6 0-22.4 18.2-40.6 40.6-40.6 22.4 0 40.6 18.2 40.6 40.6 0 22.4-18.2 40.6-40.6 40.6zm0-78.7c-21 0-38.1 17.1-38.1 38.1 0 20.9 17.1 38 38.1 38 20.9 0 38-17.1 38-38 0-21-17.1-38.1-38-38.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m11.3 14.6c5.1 6 7.1 4.5 13.6 1.6 3.9-1.8 8.4-2.9 11.7-1 1.5 0.9 2.7 2.5 4.5 3.4 7 3.6 8.2 2.3 14-0.7 8.7-4.5 11.4 5.5 19.3 0.5 0.9-0.6 0.1-1.9-0.8-1.3-4.4 2.9-9.8-3.1-14.6-2.3-1.8 0.3-3.2 1.3-4.8 2-7.4 3.4-9.5 1.7-16.5-2.1-1.4-0.8 0.1-1.7-2.2-2-8.1-1.2-16.4 9.4-23.5 1.3-0.4-0.5-1.1 0.1-0.7 0.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m5.4 26.6c3 1.9 4.4 2.4 7.9 1.4 2.4-0.6 4.9-4.1 7.5-2.7-0.4-0.2 1.9 5.6 1.7 5.2 2.2 4.8 7.5 10.6 13.4 7.2 1.6-0.9 2-2.5 3.2-3.9q2.1-6.4 10.6-4.5 0.8 0.8 1.8 1.4c1 0.2 1.8 0.9 2.9 1.2 7.3 1.5 9-11.1 15.7-2.6 0.3 0.4 1.1 0.3 1.2-0.2 0.8-2.2 3.2-3.5 2.9-5.3 0.1 0.8 1.4 0.8 1.4-0.1q0-0.1 0-0.3c0-0.7-0.6-1-1.2-0.6-0.9 0.6-3.8 4.7-4.1 4.6-0.8 0-2.6-3.5-4.1-3.9-4-0.8-4.1 3-6.6 5.1-5.4 4.3-11.2-4.4-17.4-1-2 1.1-2.2 2.6-3.7 4.1-3.1 3.1-0.3 12.6-12.1 2.4-2.9-2.4-3.9-8-4.6-11.4-0.1-0.4-0.6-0.8-1-0.5-4.3 2.5-9.2 6.7-14.8 3.6-0.6-0.3-1.2 0.5-0.6 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m2.9 45.2c6.9 10.4 18-5.3 24.4 3.7 0.2 0.3 0.7 0.4 0.9 0.2 3.6-2.2 5.7-0.2 9-0.4 0.7 0 3.4-1.4 3.4-1.4 4.1 0.4 6.2 4.2 10.7 4 5.2-0.4 7.9-4.2 11.5-7.1 3.5-2.8 2.2-1.6 5.9-1.4 3.8 0.1 7.4-0.6 11.3-0.4 1 0 1.1-1.5 0.1-1.5-4.9-0.3-10.5 1.3-15-1.6-0.3-0.2-0.9-0.2-1.1 0.2-4 7.1-14 15.7-21 5.1-0.3-0.3-0.8-0.3-1-0.1 2.7-2.2-11.2 2.2-12.3 2.1-2.7-0.4-3.9-2.3-6.5-2.8-7.8-1.4-11.9 9.7-19.5 0.8-0.5-0.5-1.2 0.1-0.8 0.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m4.6 53.8c6-3.1 10.7 0.8 16.6-0.4 3.9-0.8 4.5-1.8 8.9-0.5 3 0.9 6 1.6 9.1 2.1 5.5 1 11.6 2.1 16.9 0.1 8.1-3.2 11.8-11.8 22-7.7 0.8 0.4 1.3-1 0.5-1.3-7.5-3.1-11.3-0.4-17.3 3.9-10.7 7.7-25 4-36.6-0.5-0.2-0.1-0.5-0.1-0.7 0.1-5.3 4.9-13.6-0.7-19.9 3.2-0.7 0.4-0.2 1.4 0.5 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m12.5 67.2c9.8-5.7 18.6 6.5 29.1 1.6 6.8-3.1 10.8-8 18.9-7.8 5.1 0.2 9.9 1.4 15 0.1 0.8-0.2 0.6-1.4-0.2-1.3-6.5 1.2-12.9-1.2-19.3-0.1-5.4 0.9-9.1 5-13.9 7.2-11.4 5.4-20-8-30.1-0.5-0.5 0.3 0 1 0.5 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m63.2 72.8c-5-3.6-13.3-3.9-16.9 1.8-0.4 0.6 0.3 1.2 0.8 0.8 2.2-1.8 4.2-3.4 7.1-3.7 3-0.4 5.8 0.6 8.4 2 0.6 0.3 1.2-0.5 0.6-0.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m47 74.5c-2.6-1.7-5.9-1.7-8.8-0.7-2.1 0.7-5.7 2.7-5.7 5.4 0 0.5 0.5 0.8 0.9 0.5 1.7-1.5 2.6-3.2 4.9-4.2 2.7-1.1 5.4-0.8 8.2 0 0.6 0.2 1.1-0.6 0.5-1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m6.8 38.7c2.2-0.8 4.4-1.8 6.8-2.2 3.5-0.5 5.8 1 7.9 3.7 0.4 0.5 1.1 0 0.9-0.5-4-6.6-10.3-4-16.1-2-0.6 0.2-0.2 1.2 0.5 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m22 39.3c-5.1-0.3-10.6 2.7-14.9-1.3-0.6-0.5-1.4 0.2-0.9 0.8 3.4 4.6 11.1 2.3 15.8 1.7 0.7-0.1 0.6-1.1 0-1.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m46.3 39.3c0.7 1.4 1.8 2.8 3.6 2.8 1.9 0.1 3.7-1.4 4.9-2.8 0.4-0.4-0.3-0.9-0.7-0.6-1.1 0.9-2.3 2.2-3.8 2.4-1.5 0.2-2.5-1-3.2-2.2-0.3-0.6-1.1-0.2-0.8 0.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m47.1 39.2c1.9-2.4 5-1.7 6.9 0.2 0.4 0.3 1.1 0 0.8-0.6-1.5-3.2-6.7-3.1-8.6-0.3-0.4 0.6 0.5 1.2 0.9 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m68.4 34.3c1.8-1.5 3.5-1.2 5.4 0 0.4 0.4 1-0.2 0.6-0.7-1.7-2.1-4.9-1.9-6.7-0.1-0.4 0.5 0.2 1.3 0.7 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m66.9 35.1c2.1 2.5 5.7 1.5 7.6-0.9 0.3-0.4-0.3-0.9-0.8-0.6-2.1 1.4-3.9 2.5-6.2 0.8-0.4-0.3-1 0.3-0.6 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m21.6 61.7c4.7 4.2 10 3 14.4-0.9 0.4-0.4-0.1-1-0.5-0.7-4.4 3.2-8.8 4.7-13.3 0.7-0.5-0.4-1.1 0.5-0.6 0.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m22.3 61.5c3.8-4.2 8.5-3.2 13-0.7 0.6 0.3 1.1-0.4 0.6-0.8-4.7-3.3-10.5-3.6-14.4 1-0.3 0.5 0.4 1 0.8 0.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m65 54c1.7-1.6 5.7-3.2 7.8-1.6 0.4 0.3 1-0.3 0.6-0.6-2.4-2.3-7-0.5-9.1 1.4-0.5 0.4 0.2 1.2 0.7 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m64.3 54.4c3.6 1.6 7.2 1.5 9.3-2.2 0.2-0.5-0.3-1.1-0.7-0.7-1.1 1.1-2 2.4-3.5 2.8-1.6 0.4-3.3-0.3-4.8-0.8-0.5-0.2-0.8 0.6-0.3 0.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m39.5 7.6c1 2.5 2.6 5.1 5.4 5.9 2.4 0.7 4.8-0.5 6.4-2.3 0.4-0.4-0.1-1.1-0.6-0.7-1.7 1.4-3.7 2.8-6 2-2.2-0.8-3.5-3.3-4.4-5.3-0.3-0.5-1.1-0.1-0.8 0.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m40 8c3.9-1.1 7.8-0.1 10.4 3.2 0.5 0.6 1.4-0.2 0.9-0.8-2.7-3.6-7.3-4.7-11.5-3.5-0.7 0.2-0.5 1.3 0.2 1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m25.9 10.4c1.7-2.2 4.9-4.8 7.9-4.2 0.5 0.1 0.7-0.7 0.2-0.9-3.3-1.1-7.5 1.5-9.2 4.3-0.4 0.7 0.5 1.4 1.1 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m24.6 13.1c3.6-1 8.3-3.4 9.7-7.2 0.2-0.5-0.5-0.9-0.8-0.4-2.4 3.2-5.2 5.5-9.1 6.6-0.6 0.1-0.5 1.1 0.2 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m24.4 51.4q1.5-1 3.1-1.7c0.9-0.5 1.8-0.8 2.7-1.3 0.4-0.3 0-0.9-0.4-0.9-2.2 0.2-4.5 1.8-6.1 3.1-0.6 0.4 0.1 1.2 0.7 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m24.1 51.2q1.3-0.9 2.5-1.9c0.6-0.6 1.4-1.2 1.5-2.1 0-0.3-0.3-0.7-0.7-0.6-0.8 0.3-1.2 0.9-1.8 1.6q-1 1.1-2.1 2.2c-0.5 0.4 0.1 1.2 0.6 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m21.2 52c2.9-0.7 5.5-2 7.4-4.4 0.6-0.7-0.5-1.8-1.2-1.1-1.9 1.8-4 3.6-6.5 4.6-0.5 0.2-0.2 1 0.3 0.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m46.6 39c0.8 2.6 5.7 3.2 7.1 0.8 0.4-0.6-0.2-1.6-1-1.2-0.9 0.5-1.5 1-2.6 1-1.1-0.1-1.6-0.7-2.5-1.3-0.4-0.2-1.2 0.1-1 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m48 39.3c1-0.2 1.9-0.2 2.8-0.2 0.8 0 1.5 0.3 2.2-0.2 0.3-0.3 0.3-0.7 0.1-1-0.6-0.8-1.8-0.7-2.6-0.6-1 0-2 0.3-2.9 0.7-0.7 0.3-0.3 1.4 0.4 1.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m49.3 39.6c1.2 0.5 2.7 0.7 3.6-0.3 0.2-0.4 0-0.9-0.3-1.1-1-0.2-2 0.1-2.9-0.1-1-0.2-1.2 1.2-0.4 1.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m67.1 35.3c0.8 0.1 1.6-0.1 2.4-0.2 0.9-0.1 1.7-0.2 2.6-0.2 1.4 0 1.7-2.2 0.2-2.2-1.7-0.1-4.2 0.2-5.6 1.4-0.4 0.4-0.2 1.2 0.4 1.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m68.4 35.1c1.3 0.8 4 0.8 4.3-1 0.1-0.4-0.3-0.7-0.6-0.8-0.6-0.1-1 0.2-1.5 0.3-0.5 0.2-1.1 0.2-1.7 0.2-0.7-0.1-1.1 0.9-0.5 1.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m6.7 39c1.9 1.1 3.8 1.5 5.9 1.4 2.2 0 5-0.9 7.1-0.2 0.7 0.3 1.6-0.3 1.4-1.1-0.6-1.8-2.2-1.6-3.9-1.5-3.4 0.2-6.6 0.7-10 0.2-0.7-0.1-1.1 0.9-0.5 1.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m8.5 38.7c1.8 0.1 3.6-0.2 5.5-0.5 1.8-0.2 3.3 0.2 5.1 0.4 0.6 0.1 1.1-0.6 0.8-1.1-0.9-1.6-2.7-1.7-4.4-1.6-2.4 0.2-5 0.7-7.3 1.5-0.6 0.3-0.4 1.3 0.3 1.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m24.3 12.7c1.2-0.5 2.1-1.8 3.2-2.6 1.4-0.9 2.9-1.5 4.5-1.9 1.5-0.4 1.1-2.7-0.4-2.3-1.8 0.4-3.5 1.3-5 2.4-1.2 0.9-3 2.3-3 3.9-0.1 0.4 0.3 0.7 0.7 0.5z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m25.9 11.7c1.2-0.2 2.3-0.6 3.4-1.3 0.9-0.5 2.1-1.1 2.4-2.2 0.2-0.5-0.2-0.9-0.7-0.9-1.1 0.1-2 1.1-2.9 1.6-0.9 0.6-1.8 1.1-2.7 1.8-0.5 0.3-0.1 1.1 0.5 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m40.7 8.6c1.4 0.2 2.9 0.3 4.4 0.7 1.6 0.5 2.6 1.3 3.9 2.1 0.7 0.5 2-0.3 1.4-1.1-1.9-3.1-6.6-3.2-9.8-2.9-0.7 0-0.6 1.1 0.1 1.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m40.6 8.3c1.5 2.8 5.4 6.5 8.6 3.7 0.9-0.8 0-2.3-1.1-1.7-2.7 1.3-4.5-1-6.4-2.7-0.5-0.5-1.5 0-1.1 0.7z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m43.6 9.3c0.7 1.4 3.3 2.8 4.7 1.7 0.3-0.3 0.3-0.8 0-1-0.6-0.4-1.3-0.3-2-0.5-0.7-0.3-1.3-0.7-1.9-1-0.5-0.3-1 0.4-0.8 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m41.5 9c0.2 1.2 0.9 2.4 1.9 3.1 1 0.7 2.4 0.9 3.1-0.2 0.3-0.3 0-0.8-0.4-0.9-0.9-0.1-1.5-0.1-2.2-0.7-0.4-0.6-0.7-1.3-1.1-1.9-0.5-0.6-1.4-0.1-1.3 0.6z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m42.7 9.4c0.6 0.7 1.4 1.6 2.4 1.4 0.5-0.1 0.6-0.6 0.3-1-0.4-0.6-1.1-0.8-1.5-1.4-0.6-0.9-1.7 0.1-1.2 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m32.3 6.8q0.3 0 0.6-0.1c0.5-0.1 0.7-0.9 0.1-1.1-0.3-0.1-0.4-0.1-0.7-0.1-1-0.1-1 1.4 0 1.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m22.2 61.5c3.7 2.7 8.9 2.5 12.7 0.3 1.2-0.7 0.3-2.7-0.9-2-3.7 2.1-7.3 2-11.2 0.6-0.7-0.3-1.2 0.7-0.6 1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m23.1 61.5c1.7-0.4 3.4-1.1 5.2-1.3 1.8-0.2 3.4 0.3 5.1 0.7 0.9 0.1 1.2-1.1 0.6-1.6-3.1-2.4-8.3-0.6-11.3 1.1-0.5 0.3-0.3 1.2 0.4 1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m25.2 61.8c1.5 0.2 3 0.1 4.4 0 1.3-0.1 2.9 0.1 3.9-0.8 0.4-0.3 0.4-0.9 0-1.1-1.2-0.8-2.6-0.3-3.9-0.2-1.6 0.2-3.1 0.3-4.6 0.8-0.7 0.2-0.4 1.2 0.2 1.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m64.9 54.3c1.4 0.5 2.7 0.7 4.2 0.5 1.2-0.2 2.8-0.5 3-1.8 0.1-0.3-0.2-0.6-0.4-0.8-1-0.4-2 0.4-2.9 0.6-1.2 0.3-2.4 0.3-3.6 0.1-0.8-0.1-1.1 1.1-0.3 1.4z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m66.5 53.8c1.1-0.1 2.1-0.4 3.2-0.5 1-0.1 2.1 0.2 2.7-0.7 0.3-0.3 0.2-0.7 0-1q-0.1-0.1-0.1-0.2c-0.3-0.3-0.7-0.4-1.1-0.4-1.6 0.2-3.8 0.4-5.1 1.5-0.4 0.4-0.3 1.3 0.4 1.3z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m72.1 52.3c0.3 0.2 0.5 0.3 0.9 0.3 0.6 0 0.9-0.7 0.4-1.1-0.3-0.2-0.5-0.3-0.9-0.4-0.6 0-1 0.9-0.4 1.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m71.2 29.2c1.7-1.1 3.4-2.2 4.9-3.6 0.9-0.8-0.2-2-1.2-1.4-1.5 1.1-3 2.5-4.4 3.8-0.5 0.5 0 1.6 0.7 1.2z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m74.8 25.4c0.6-0.5 1.4-0.7 1.9-1.2 0.5-0.5 0.3-1.5-0.4-1.5-1.2 0.1-1.9 0.8-2.6 1.7-0.5 0.7 0.5 1.5 1.1 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m75.8 25.1c0.3-0.2 0.6-0.2 0.9-0.4 0.4-0.2 0.4-0.9-0.1-1.1-0.7-0.2-1.1 0-1.7 0.5-0.7 0.5 0.2 1.6 0.9 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m13.2 27.7c1.4-0.1 2.6-0.6 4-0.9 1.9-0.5 2.9-0.2 4.2 1.3 0.3 0.4 0.9 0.2 0.9-0.3 0.4-1.6-1.2-2.8-2.7-2.9-2.4-0.3-4.3 1.5-6.6 1.9-0.6 0.1-0.4 1 0.2 0.9z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m34.5 37.5c1.8-1 3.3-2.3 4.8-3.7 1.2-1.1 3.2-2.6 3.7-4.3 0.1-0.5-0.4-1.1-1-0.8-1.5 0.7-2.6 2.7-3.8 3.9-1.4 1.3-2.9 2.6-4.3 3.9-0.5 0.4 0 1.4 0.6 1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m49 55.3c4.2-2.1 9.2-4.8 11.6-8.9 0.3-0.4-0.1-1-0.6-0.7-2 1.1-3.7 2.8-5.5 4.2-1.9 1.6-3.9 3.2-6 4.6-0.4 0.4 0.1 1.1 0.5 0.8z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m44.3 55.3c3.8 0 8.7-0.9 11.1-4.1 0.4-0.4-0.2-1-0.7-0.8-1.6 0.7-3.1 1.8-4.7 2.4-1.8 0.7-3.8 1.2-5.7 1.4-0.6 0.1-0.6 1.1 0 1.1z"
          />
          <path
            id="&lt;Path&gt;"
            className="s2"
            d="m52.5 55c2.4-1.9 4.6-4.4 6.8-6.6 1.8-1.8 3.9-3 6-4.5 0.3-0.3 0.1-1-0.3-1-2.6 0.1-4.5 2.1-6.2 3.8-2.4 2.4-5 4.9-7.1 7.6-0.4 0.5 0.3 1.1 0.8 0.7z"
          />
        </g>
      </g>
    </svg>
  )
}

export default GreenishPlanet