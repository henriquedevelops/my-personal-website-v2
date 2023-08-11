import React, { FC } from 'react'

interface Props {
  className: string
}

const Sun: FC<Props> = ({ className }) => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175 180"
      className={className}
    >
      <title>Sun</title>
      <style>
        {`.sun .s0 { fill: #f2c45d } 
		.sun .s1 { fill: #efa54c } 
		.sun .s2 { fill: #260029 } `}
      </style>
      <g id="&lt;Group&gt;" className="sun">
        <path
          id="&lt;Path&gt;"
          className="s0"
          d="m157.7 111.1c-2-1.5-4.7-2.6-6.3-4.4 2.6-0.7 5.5 0.2 8.1-0.3 2.2-0.5 4.4-1.6 6.7-2-3-1.4-6.7-3.4-9.7-5.5 2.5-1 5.2-0.2 7.6-1.3 2.5-1.1 3.8-2.7 6.6-3-1.6-5-14.4-1.9-16.2-7.8 1.7-0.6 4.4-1.7 6.3-2.1 2-0.5 3.3-0.1 4.7-0.9-4.4 0.1-5.9-2.1-9.7-3.2 0.1-2.3 7.7-4.9 9.5-6.6 2.5-2.2 3.9-4.8 4.5-8.2-3.3 3-5 4.2-9.9 3.7-3.7-0.4-6.5-2.4-9.7-4.1 3.4-1.2 5.8-4.9 8.4-7.3-3.5-0.1-8.1 2-11.2-0.7 1.3-1.2 2.6-2.4 3.8-3.8 2.6-3 7.8-9.2 11-11.4-9.2 1-17.4 7.5-20.7 8.5 1.9-3.1 4.3-9.5 6.7-12.2-4.1 1.2-6.2 0.3-10.9 2.8-0.1-3.4 0-4.9 0.6-8.4 0.8-3.7 1.9-7 4.4-10.2-6.3 1.9-10.8 16.2-17 15.3 2-4.1 2.7-8.5 4.3-13-4.1 1-4.7 7.8-10.1 6.6 0.9-2.7 1.8-5.4 1.9-8.5 0.1-3.2-0.4-6.7 0.6-9.5-4.2 0.8-5 4.4-7.2 7.7-1.7 2.7-5.1 4.7-9.1 4.7 2.6-6-1.7-9.4-2.1-15.2-2.7 2.6-2.1 5.9-3.2 9.1-0.5 1.6-2.4 3.2-3.7 4.8-0.4-3.6-1.4-6.9-4.2-9.9-2.9-3.2-6.7-5.4-9.2-9.1-0.4 5.8 4.6 12.2-0.4 17.1-1.7-2.7-1.6-6.6-3.1-9.6-1.4-2.8-4.6-3.7-6-6.3-0.8 4.2 1.8 6.2 2.1 10.1 0.4 3.8-2.8 5.9-2.9 9.2-1-4-3.4-9-7.3-11.6-4.5-3-7.9-3.9-9.6-9.9-4.4 3.9-1.7 9.3 0.4 13.6 2.5 5.3 5.2 10 2.9 15.6l-1.4-1.4c-1.3-0.6-1.2 0-2.7-0.5-2.3-0.7-4.5 0.7-6.8-0.6-1.6-0.9-3.9-2.1-4.8-3.7-1.5-2.9-4.4 0-7-1.2-1.7-0.8-4.1-3.3-5.5-4.5-2.1 2.1 1.3 9.4 3.1 11 3.8 3.3 5.5 5.3 3.4 11.3-2.2-1.8-6.4-2.5-9.1-3 0 2.4 3.7 7.3 4.9 9.7-1.3-0.5-2.8-1.8-4.3-2.2-2.2-0.6-3.5 0.3-5.4 0.6-2.8 0.4-7.5-0.1-10.4-0.9 1.6 5.8 11.8 5.4 11.3 13.3-2 0.3-3.2 0-5.2 0.2-2.1 0.3-4.4 1.2-6.5 1.5 2.7 1.2 5.2 1.8 7.2 2.9 2 1.2 4.8 3.7 6 5.7-4-0.5-7.3-1.8-11.3 0.4-3.7 2-7.4 2.4-11.4 3.5 2 1.4 9 1.7 11.7 2.1 3.2 0.5 6 1.6 9.1 2.6-3.2 1.8-7.3 3.5-10.3 5.3 2.9 0.5 8.3 2.4 11.2 1-5.7 3.4-5.9 9.4-17.9 11.3 3.5 0.1 7.6 1.5 11.3 0.1 3.6-1.4 4.7-2 8.5-0.9-2.2 1.3-5.8 4.7-6.8 7 2.3 0.1 4.4-0.5 6.6-0.6-3 8.9-20.6 9.1-19.2 17.8 2.8-3 5.1-2.5 9.4-2.9 2.8-0.3 6.2 1.5 9.5 1.3-1.2 2.6-1.6 5.4-4.7 7.3 2.9-0.9 7.7-4.7 10.7-3.1-1 3.7-0.4 6.8-3.5 9.7-2.7 2.5-7.3 3.5-8.2 7.4 1.7-0.3 3.4-1.3 5.1-1.6 2.2-0.4 3.8-0.3 5.8-0.6 2.8-0.4 6.4-4.3 9.1-2.8-0.3 2.6-1.4 5.3-1.8 7.8 3.3-1.3 5.2-6 9.1-6.9 0.4 3.5-3.1 6.5-4.4 9.5-1.2 2.7-1.8 6.4-2.1 9.2 3-0.2 6.5-3.2 8.7-5.4 1.5-1.5 5.8-8.5 8.6-6.2 0.9 0.7 0 2 0.4 3 0.4 0.8 1.3 1.5 1.8 2.3 1 1.7 1.5 3.5 1.7 5.4 0.7 4.4-0.3 9.3 0.7 13.6 0.9-1.5 1.5-3.8 2.9-5.3 1.3-1.5 3.3-2.5 4.6-4.2 1.3-1.7 2.1-4.3 3.3-6.3 0.6 4.5 0.9 7.9 0.8 12.6 0.3-2.9 4.4-7.5 7-8.8 0 5.6-6.9 16.2-1.9 21.1 1.2-4 4.8-8.1 7.9-11 3.1-2.9 5.6-6 8.5-9.1 0.1 0.1 0.6 0.3 0.8 0.3 0 0.4 0.1 0.8 0.1 1.2 0.6-0.1 0.3 1 0.9 0.8-0.2 0.2 0.9 0.8 0.7 1 2.3 5 4.1 7.5 9.4 9.6-1.6-2.6-3.1-6.6-2.5-10.7 0.4-2.2 1.3-9.7 3.1-9.2 6.8 3 10.9 22.8 14.7 20.5 1.1-0.6-1.3-3.5-1.2-4.9 0.1-2.3 1.2-6.7 1.9-9 0.6-2 1.5-4.2 2-6.3 0.5-2.4-0.1-4.2 0-6.7 4 3.3 10.7 6.4 13.3 9.1-0.9-3.7-2.1-7.1-3.5-10.7-1.3-3.1-3.8-6.7-4.4-9.9 1.6 1.2 3.8 1.1 5.6 1.6 1.9 0.6 4 2.1 6 2.2 0.7-4.7-3.4-7.1-3.7-11.4 2.7-0.1 5-1.2 7.7-0.7 2.5 0.4 3.7 0.1 5.7 1.2 2.4 1.3 5.3 3.1 7.9 3.6 2.3 0.5 4.4 2 6.9 1.9 0.5-5.7-4-9.2-6.2-14-1.2-2.7-1.7-4.1-4.2-6.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m40.3 95.3c-4.7-7.9 1.9-22.8 5.3-30.2 5-10.7 15.6-14.5 25.4-19.5 8.8-4.5 19.8-4.2 29.6-2.2 9.6 2 15.6 8.3 22.3 15 7.7 7.7 9 16.9 10.1 27.2 1 10.3-1.5 19.5-7 28.6-12 19.9-34.7 25.6-55.6 19-15-4.8-33.8-26.3-30.5-43.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m32.9 59.6c1.8 1.5 2.8 4.8 4.3 6.9 1.6 2.3 3.4 3.5 5.5 5.3 1.7-1.8 4.1-4.2 3.5-6.9-2.2-0.6-5-0.9-7.3-1.3-2.2-0.3-3.7-2.7-5-3.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m66.8 46.7c-2.6-3.3-1.6-7.3-1.7-11.4 1.2 1.4 1.9 3.4 3.2 4.9 1 1.3 2.5 2.5 3 4.1-1.2 1.1-4.1 1.4-4.8 2.9z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m120 53.9c-1.2-3.4 1.2-5.1 4-6.2 3.4-1.4 4.9-2.6 7.2-5.5-0.6 4.4-2.9 5.3-5.2 8.3-1.1 1.4-0.8 2.8-2.3 4-1.1 1-3.7 1.4-3.5-0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m132.9 103.7c2.1 0.8 4.1 3.1 5.7 5 1.5 2 2 2.6 3.7 4.6-3.1-2.3-7.5-2.3-10.8-3.6 0.2-1.5 1.1-3.5 2.3-4.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m102.8 133.5c2.3 2.5 4.3 4.1 7.4 5.8 2.9 1.6 5.2 2.8 6.4 6.1 0.3-2.9-0.7-5.5-2.3-7.8-1.4-2-3.7-4.5-2.9-7.1-1.7-0.8-7.2 1.4-7.2 3.8z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m64.6 129c-2.5 0.6-3.9 3.3-5.2 5.3-1.6 2.4-3.8 3.6-5.6 5.6 2.1-2.8 2.6-7.1 3.7-10.7 0.7-2 0.9-3.3 2.8-2.3 1.1 0.6 3.1 2.8 4.1 3.8z"
        />
        <path
          id="&lt;Path&gt;"
          className="s1"
          d="m44.6 108c-2-2.1-10.5 0.9-12.8 1.9 1.8-2.6 4.9-5.7 7.3-7.9 4.2-3.7 3.6 3.6 5.2 6.2z"
        />
      </g>
      <g id="&lt;Group&gt;">
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m48.5 115.6c-13.5-19.6-9.2-49.6 10-63.7 21.7-16 52.7-11.7 68 10.9 13.8 20.3 9.6 47.3-10 62.5-23 17.8-51.8 9.6-69.3-11.3-0.3-0.4-1.2 0.1-0.9 0.6 24.3 38.8 88.7 22.8 90.4-23.5 1.7-45.1-55.1-67.3-85.6-35.1-14.2 15-16.6 43.8-3.3 60.3 0.4 0.4 1-0.2 0.7-0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m58.5 50.4c-2.9-2-2.6-9.2-1.8-12.1 0.4-1.3 1.2-2.6 1.7-3.8 0.8-1.9 1.9-4 1.9-6.1 0-2.6-1.2-4.6-2.3-6.8-0.4-0.8-1-1.4-1.5-2.2-3.2-5.3-2.9-13.3 0.6-18.7 0.3-0.4-0.3-0.8-0.6-0.4-3.1 3.7-5.2 8.2-4.2 13.2 1.6 7.3 8.3 10 6 18.8-1.6 6.5-8.5 14-0.2 18.6 0.4 0.2 0.8-0.3 0.4-0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m56.5 0.4c-3.3 6.8 2.3 10.3 7.6 13.7 2.9 1.8 5.9 3.4 7.5 6.7 1.7 3.7 0.2 6.9 1 10.5 1.2 5 5.8 6 7.8 10.6 0.2 0.4 1.1 0.2 0.9-0.3-1.1-3.8-3.6-4-5.9-7-3.3-4.2-0.6-9.7-2.8-14.3-3.6-7.7-19.5-9-15.4-19.6 0.2-0.5-0.5-0.7-0.7-0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m78.2 36.7c-2.9-8.5 4.8-11.6 7.1-18.5 1.8-5.6-2.7-10-2.3-15.6 0-0.4-0.7-0.5-0.7 0-0.3 2.5 0.1 4.4 0.9 6.8 2 6.5 0.8 9.5-3 14.9-3 4.1-5.1 7.8-2.7 12.7 0.2 0.5 0.8 0.1 0.7-0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m82.6 2.8c3 6.1 10.3 9.3 12.4 15.6 1.3 3.9-0.1 7.9 1.2 11.7 1.6 4.6 3.9 7.5 3.6 13 0 0.3 0.4 0.5 0.5 0.2 1.2-3.3 0.7-5.8-0.6-8.9-1.3-2.9-2.6-5-2.9-8.3-0.2-2.1 0.2-4.2-0.2-6.3-1.4-7.5-9.6-11.2-13.3-17.4-0.2-0.4-1-0.1-0.7 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m91.2 136c-0.5 11.3 9.8 11.7 17.5 16.4 8.8 5.2 5.4 19.8 17.2 21.2 0.4 0.1 0.5-0.5 0.1-0.6-10.4-3.8-7.1-13.6-14-19.9-7.1-6.4-19.7-4.5-19.9-17 0-0.6-0.9-0.8-0.9-0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m126 172.9c-6.1-9.3 2.5-17.9 1.5-27.5-0.4-3.6-1.7-7-3.7-10-2-2.9-6.6-6.2-7.4-9.4-0.1-0.4-0.8-0.4-0.8 0.1 0 2.7 0.7 3.2 2.4 5.2 5.6 6.8 9.5 11.5 7.5 21-1.7 7.8-6 14.1-0.2 21.1 0.3 0.3 0.9-0.1 0.7-0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m126.8 144.3c1.4 2.6 3.7 3.9 6.2 5.3 1.7 0.8 3.3 1.6 4.8 2.8 1.7 1.3 2.6 3.1 3.8 4.9 0.2 0.3 0.6 0 0.6-0.3-0.9-7.2-11.1-8-14.8-13.1-0.2-0.3-0.8 0-0.6 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m141.6 155.6c-0.3-9.9-8.7-16.6-8.8-26.2 0-6 1.5-12.1-3.8-16.1-0.7-0.5-1.3 0.5-0.7 1 6.2 5.3 1.8 14 3.8 20.7 2.4 7.5 7.6 12.4 8.7 20.6 0.1 0.5 0.9 0.4 0.8 0z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m80.5 135.3c-5 4.7-0.2 11.2 1 16.5 1.7 7-2.7 11.1-3.7 17.6-0.4 3.6 0.7 6.6 2.1 9.7 0.2 0.5 0.8 0.2 0.7-0.3-2.2-5.9-1.4-10.6 0.8-16.2 1-2.5 2-4.7 2-7.4-0.2-6.2-7.2-13.7-2.2-19.2 0.4-0.4-0.3-1-0.7-0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m80.7 179c0.6-8.1 8.8-11.2 13.7-16.6 3.8-4.2 5.9-9.1 5.2-14.8-0.1-0.5-0.7-0.4-0.8 0-0.7 4.5-1.1 8.2-3.9 12.1-2.3 3.2-5.3 5.4-8.4 7.9-3.7 3.1-7 6.3-6.7 11.5 0 0.5 0.8 0.4 0.9-0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m122.7 56.3c4.7-7.7 14.7-2 21.4-5.6 4.5-2.3 6.8-5.2 12.2-6.4 3.3-0.6 4.2-0.4 6.3-3 0.4-0.4-0.2-0.9-0.6-0.6-3.6 3.2-9 2.1-12.9 4.7-3 1.9-4.2 4.3-8.3 5.2-2.1 0.5-4.6 0.1-6.8 0.1-4.8 0-10.2 0.1-12.1 5.2-0.2 0.5 0.5 0.9 0.8 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m131.7 70c2.1-0.6 4-1.4 5.6-2.8 1.6-1.3 3.6-3.3 4.1-5.3 0.1-0.4-0.4-0.8-0.8-0.5-1.5 1.3-2.4 3.3-3.9 4.7-1.5 1.4-3.3 2.5-5.2 3.2-0.5 0.1-0.2 0.8 0.2 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m140.7 62.9c2.8-4.9 9.2-5.8 12.2-10.6 1.3-2.1 2.5-3.6 4.6-5 0.7-0.5 1.5-0.7 2.2-1.2 1.6-1.3 2.7-2.7 3.1-4.7 0.1-0.6-0.8-0.8-1-0.2-1.4 3.7-4.4 4-7.1 6.3-2.1 1.7-2.7 4.6-4.8 6.5-3.3 3.1-8.1 4-9.9 8.6-0.2 0.4 0.4 0.7 0.7 0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m115.5 49.5c1.5-8.8 10.2-9.4 15.8-14.4 5-4.5 6.4-10.9 12.2-14.8 0.4-0.2 0-0.7-0.3-0.6-7.8 3.3-9.2 12.9-16.6 17-5.2 2.9-12 5.8-11.9 12.7 0 0.5 0.7 0.6 0.8 0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m130.6 51.6c4.4-1.7 6-4.8 6.7-9.4 0.7-4.2 1.6-7.8 3.2-11.7 1.2-3 1.5-7.5 3.2-10.1 0.2-0.4-0.2-0.7-0.5-0.5-1.3 0.9-1.2 0.9-1.7 2.3-1.4 3.2-1.9 6.9-3.3 10.3-2.7 6.5-0.8 14.6-7.9 18.5-0.4 0.2-0.1 0.7 0.3 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m119.9 52.5c0.5-4.3 3.8-5.4 7.4-7 2.4-1.1 5.3-2.7 5.6-5.6 0-0.4-0.6-0.5-0.7-0.2-1.7 3.9-5.4 4.7-8.9 6.5-2.4 1.3-4.6 3.3-4 6.3 0.1 0.4 0.6 0.4 0.6 0z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m125.4 52.3c0.9-3 3.4-4.1 5.4-6.3 1.7-1.8 1.9-3.7 2-6.1 0-0.3-0.4-0.4-0.5-0.1-0.5 1.3-0.5 2.8-1.1 4.1-0.7 1.4-1.9 2.3-3.1 3.3-1.6 1.3-3.2 2.7-3.5 4.9 0 0.5 0.6 0.6 0.8 0.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m173.8 94.4c-1.5-2.4-2.8-3.2-5.6-3.5-1.8-0.2-3.5 0.3-5.3 0-4.4-0.7-6.9-3.2-10-5.8-5.7-4.7-11.4-8.2-18-2.9-0.4 0.3 0.1 1 0.5 0.8 9.3-5.6 14.3 2.1 21.1 6.6 4.8 3.2 13.1 0.7 16.6 5.2 0.3 0.4 0.9 0 0.7-0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m134.6 99.8c3.5 0.8 5.5 0.9 8.9-0.1 1.4-0.4 2.6-1.2 4.1-1.6 3.6-0.9 6.4 0.1 10 0.6 1.5 0.2 2.7 0.5 4.2 0.2 3.7-0.6 7.9-5.8 11.6-3.3 0.6 0.5 1.2-0.5 0.6-0.9-1.5-1.2-1.7-1.4-3.6-1.3-6.4 0.5-5.1 4.8-14.3 3.6-2.3-0.4-4.3-1.2-6.8-0.8-1.5 0.2-2.8 0.9-4.2 1.4-3.6 1.3-6.5 1.5-10.4 1.3-0.6 0-0.7 0.8-0.1 0.9z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m7.7 124c-1.6-9.7 9.2-10.2 14.9-14.6 1.9-1.6 3-3.3 4-5.6 1.1-2.5 1.6-5.5 3.8-7.3 2.7-2.2 6.5-0.9 9.7-1.4 0.5-0.1 0.5-1.1-0.1-1.1-4.4-0.1-8.3-1.3-11.6 2.6-3.8 4.5-3.3 9.9-9.1 13.1-6.1 3.3-14.8 5.8-12.4 14.5 0.1 0.5 0.9 0.4 0.8-0.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m7.5 124.3c1.8-8.4 13.6-3.1 18.3-3.7 2.2-0.2 4-1.2 6.1-1.8 5.7-1.5 11.7 2.1 15.7-2.6 0.4-0.5-0.3-1.1-0.8-0.7-2.8 2.6-9.6 0.6-13.4 1.5-2.6 0.6-4.9 2.1-7.7 2.4-2.9 0.3-5.8-0.8-8.7-1-4-0.3-10.5 0.9-10.1 6 0 0.4 0.6 0.3 0.6-0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m54.3 123c-6.1 1.3-6.1 6.2-6.2 11.6-0.1 5.2-2.2 6.6-5.1 10.2-3.7 4.7 0.1 9.9-6.5 13.6-0.6 0.3-0.2 1.1 0.4 0.9 1.9-0.8 3.5-1.6 4.5-3.4 0.8-1.3 0.6-2.7 1-4q0-4.1 2.8-7.6 1.5-1 2.7-2.4c3.9-6.1-2.4-15 6.7-18.1 0.4-0.2 0.2-0.9-0.3-0.8z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m37.3 159.2c2.9-0.8 5.9-1.6 8.3-3.4 3.9-3 5.3-7.2 10.1-9.2 2.8-1.2 6-1.5 8.4-3.5 3.5-2.8 3.1-7.3 6.2-10.4 0.3-0.4-0.1-0.9-0.5-0.6-2.8 1.8-2.6 4.2-4.1 7-2.8 5.1-7.6 4.7-12.1 7-1.9 1-3.2 2.3-4.5 3.9-3.5 4.5-6.7 6.4-12 8.5-0.4 0.2-0.2 0.9 0.2 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m11.6 44.8c-0.2 3.2 0.7 6.5 3.4 8.6 3.2 2.4 6.1 3.6 7.9 7.6 0.7 1.4 1 2.9 2 4.2 1.1 1.4 2.5 2.2 4 3.1 3 1.8 4.2 3.7 6.2 6.6 1.8 2.6 2.9 3.3 6.3 3.2 0.8-0.1 1-1.3 0.1-1.3-5.2 0.1-5.2-3.9-8.1-6.9-2.4-2.4-5.4-3.1-7.5-5.9-2-2.8-1.7-6.2-4.4-8.6-3.9-3.4-8.8-3.4-9.1-10.6 0-0.4-0.8-0.4-0.8 0z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m11.7 44.8c3.1 7.5 7.1 3.9 13.4 3.9 5.2 0.1 6.7 3.8 10.7 5.7 5 2.3 9.8-0.9 13.9 4.5 0.5 0.7 1.5-0.2 1-0.9-1.5-2-2.8-3.5-5.2-4.1-1.1-0.2-2.1 0-3.2-0.1-5.5-0.3-5.7-0.6-9.8-3.6-1.9-1.5-3.3-2.6-5.8-2.8-5.4-0.5-10 4.8-14.4-2.9-0.2-0.4-0.7-0.1-0.6 0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m0.9 75.3c2.1 0.5 4 0.8 6.2 0.2 4.4-1.1 7-4.6 12.1-3.9 5.4 0.8 7.3 1.3 11.6-2.5 0.5-0.4-0.1-1.2-0.7-0.8-3.5 2.7-5.4 3.1-9.9 2.4-1.5-0.3-2.7-0.7-4.3-0.4-2.1 0.3-3.8 1.7-5.7 2.7-3.1 1.7-5.7 2.1-9.3 1.7-0.4 0-0.4 0.5 0 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m1 75.3c6.3 4.6 14.1 2.9 20.9 6.1 2.7 1.3 5.2 3.3 8.2 3.8 3.1 0.6 6.4-0.3 9.5 0 0.7 0 0.8-1 0.1-1.1-3.7-0.7-7.6 0.5-11.3-0.7-2.5-0.8-4.6-2.6-7-3.6-6.5-2.9-13.6-1.3-20-5-0.4-0.2-0.7 0.2-0.4 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m4.9 98.5c4.6-0.5 9.2-1.4 12.9-4.4 4.1-3.3 5.9-8.2 11.4-9.5 0.7-0.2 0.6-1.2-0.1-1.1-3.7 0.4-5.9 2.6-8.1 5.3-1.9 2.4-3.8 4.7-6.5 6.1-3 1.7-6.5 2-9.8 2.9-0.4 0.1-0.3 0.8 0.2 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m4.5 98.8c3.6-0.1 7 1.6 10.7 1 3.8-0.7 8.9-4.3 12.3-0.7 0.5 0.6 1.4-0.2 0.9-0.7-2.4-2.7-5.5-2.1-8.7-1.2-2.4 0.8-4.6 1.7-7.2 1.5-2.8-0.1-5.2-1.1-8.1-0.6-0.3 0.1-0.3 0.7 0.1 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m37.8 117c-6.1 0.4-6.1 6.7-6.8 11.4-1.2 7.6-10.5 7.4-11.9 14.5 0 0.4 0.7 0.6 0.8 0.2 2-5.4 8.3-5.8 11-10.5 2.9-4.9-0.6-13.3 7-14.9 0.5-0.1 0.4-0.7-0.1-0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m19.8 143.2c5.1-4.3 11.6-2.1 17-5.2 3-1.7 5.2-3.6 8.6-4.6 1.9-0.5 2.6-0.4 4-1.9 0.3-0.5-0.3-0.9-0.7-0.6-2.4 1.6-5.5 1.2-8 2.7-3.2 1.9-5 4.1-8.9 4.8-4.8 0.9-9.1 0.4-12.6 4.3-0.3 0.3 0.3 0.8 0.6 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m60.7 144.1c-3.4-0.1-2.5 3.3-1.5 5.4 1.8 4.2 3.3 5.6 2.4 10.8-0.7 4 0.7 6.6 0.8 10.5 0 0.5 0.7 0.6 0.8 0.1 0.7-3.1-1.1-5.6-0.8-8.8 0.3-2.7 1.5-5.1 0.7-7.9-0.7-2.3-6.2-7.9-2.3-9.5 0.3-0.1 0.2-0.6-0.1-0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m63.2 170.3c1.3-6 6.9-7.9 9.6-12.9 1.7-3 2.8-4.2 6-5.7 1.5-0.8 2.2-1.2 2.8-2.9 0.2-0.5-0.6-0.9-0.9-0.4-1.3 2.1-3.8 2.2-5.7 3.7-2 1.6-2.7 4.2-4.1 6.2-3 4.4-8.2 6-8.5 11.9 0 0.6 0.7 0.6 0.8 0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m39.9 53.7c-6-4.2 0.5-11.3-1.5-16.7-0.7-1.8-2.2-3.1-3.4-4.5-3.3-3.5-4.5-6.9-3.7-11.8 0.1-0.5-0.6-0.6-0.7-0.2-0.9 2.7-1.4 5.7-0.2 8.4 1.9 4.3 6.8 5.8 7.1 11.1 0.4 5.1-4.5 11.5 2 14.3 0.4 0.2 0.7-0.4 0.4-0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m30.8 20.7c0.4 2.1 1.5 3.7 3.4 4.8 2.9 1.6 5.9-0.1 8.9 1.6 2.3 1.4 3.6 4.5 6.3 5.3 2.4 0.7 6.4-1.6 7.9 1.6 0.2 0.5 0.9 0.3 0.9-0.2-0.6-3.9-3.6-2.4-6.5-2.5-4.8-0.3-5.4-4.3-9-5.9-3.7-1.7-9.4 2.4-11-4.9-0.1-0.5-1-0.3-0.9 0.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m98.9 33.9c0.3-7.9 6.9-6.6 12.2-9 2-0.9 3.2-1.9 4.3-3.8 0.7-1.2 1-2.5 1.6-3.7 1.5-3.2 4.1-4.9 7.3-6.1 0.3-0.1 0.1-0.7-0.2-0.6-3.2 0.9-5.9 2.1-7.7 5-1.7 2.9-1.7 6-5 7.8-1.5 0.8-3.4 1.1-5.1 1.5-4.8 1.2-9.2 3.2-8.1 8.9 0.1 0.4 0.7 0.4 0.7 0z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m123.2 11c-4.6 4.4-1.5 8-1.9 13.7-0.2 3.3-2.4 5.5-2.8 8.7-0.3 2.6 1.2 4.6 1.6 7.1 0.1 0.5 0.8 0.5 0.8 0 0.2-2-0.5-3.5-0.7-5.5-0.4-3.6 1.1-4.6 2-7.9 1.6-5.3-3.2-10.6 1.6-15.5 0.4-0.4-0.2-1-0.6-0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m146.3 81.6c6.9 2.7 10.4-3 16-5.8 5-2.5 9.2-5.4 9.6-11.6 0-0.3-0.5-0.5-0.6-0.1-1 2.6-2 5.3-4 7.3-2 1.9-4.4 2.6-6.8 3.9-4.9 2.7-7.7 6.9-14.1 5.8-0.3-0.1-0.4 0.4-0.1 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m171.1 63.6c-4.7 5-8.9 6.3-14.8 3-2-1.1-3.9-2.1-5.9-3-2.3-1-7.3-3.8-9.8-1.9-0.5 0.4 0 1 0.6 0.9 5-1.7 12.4 4.1 16.6 6.1 5.7 2.7 10.1-0.2 13.8-4.6 0.2-0.3-0.3-0.8-0.5-0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m132.1 121.7c1.9 6.1 7.6 4.3 12.7 3.7 3.8-0.6 6.3-0.2 9.4 2.3 0.9 0.8 1.2 1.9 2.3 2.5 1.1 0.6 1.6 0.5 2.8 0.7 5.3 0.6 6.2-0.9 10.7 3.5 0.4 0.4 1-0.1 0.7-0.6-1.5-2.3-3.3-3.7-6.1-4.3-3.4-0.7-5.1 0.8-8.7-1.7-0.9-0.6-1.4-1.7-2.3-2.4-5.9-4.7-17.2 4.2-20.7-4-0.2-0.5-1-0.2-0.8 0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m140.8 99.8c1.9 0.8 4.2 1.5 5.9 2.7 4 2.7 2.5 3.4 4.8 5.6 2 2.1 4.2 2.3 6.4 4 3.6 2.7 3.7 6.8 6.1 10 0.9 1.1 2.2 2 3 3.1 2.3 2.8 2.3 5.4 3 8.8 0.1 0.4 0.7 0.4 0.8-0.1 0.2-3.3 0-6.3-2-9.1q-0.6-0.7-1.3-1.3-3.7-2.3-4.4-6.8c-0.7-1.8-0.2-2-1.5-3.6-1.2-1.4-1.8-1.2-3.3-2.2-3-2-5.5-4.6-8-7-2.8-2.5-5.6-3.8-9.2-4.9-0.5-0.2-0.8 0.5-0.3 0.8z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m31 21c0.2 3.1 4.8 7.9 8 5 0.2-0.2 0-0.6-0.3-0.6-1.8 0.2-3.1 0.4-4.7-0.8-1.2-1-1.9-2.4-2.5-3.8-0.1-0.4-0.6-0.1-0.5 0.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m73.3 26.9c-0.7-4.6 3.5-7.8 3.2-12.2-0.3-4-5.4-6.9-2.1-11.1 0.2-0.2-0.1-0.5-0.3-0.3-3.3 2.6-1.2 5.1 0.2 8.2 1.8 4 0.6 6.1-0.9 9.7-0.8 2-1.3 3.6-0.6 5.8 0.1 0.3 0.5 0.2 0.5-0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m73.9 3.8c-0.3 3.3 2 4.5 4 6.8 2.8 3.3 2.5 7.5 4.7 11.1 0.3 0.4 0.8 0.1 0.7-0.3-0.9-3-1.5-6.3-3-9-1.7-3.2-5.6-4.8-5.8-8.7 0-0.3-0.5-0.2-0.6 0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m96.4 24.3c1.2-3.1 4.4-4.6 5.2-7.9 0.8-3.5-0.3-6.4 3.2-8.7 0.4-0.3 0-0.8-0.4-0.6-2.9 1.2-3.3 3.5-3.4 6.4-0.2 2.9-0.9 4.7-2.8 6.9-1.1 1.2-1.9 2.2-2.3 3.7-0.1 0.4 0.4 0.6 0.5 0.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m104.3 7.6c-1.2 2.5-0.9 5 0.2 7.5 0.7 1.8 1.8 3.1 1.9 5.1 0.2 2.1-1.2 3.7-1.1 5.8 0 0.6 0.9 0.7 0.9 0.1 0.2-3 1.9-4.9 0.8-8-1.2-3.6-3.6-6.2-2.2-10.3 0.2-0.3-0.3-0.5-0.5-0.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m119.6 32.7c0.7-2.9 4.9-3 6.9-4.5 2.2-1.7 2.4-4.6 5-6.1 0.3-0.2 0.1-0.6-0.2-0.6-3.3 0.3-3.7 5.2-6.5 6.6-2 1-5.9 1.7-5.8 4.5 0 0.5 0.6 0.5 0.6 0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m126.1 37.4c2.1-1.5 2.4-4.9 3.2-7.3 0.8-2.6 1.2-5.6 2.6-8.1 0.2-0.2-0.1-0.7-0.4-0.5-1.6 1-1.9 3.9-2.4 5.6-0.3 1.3-0.7 2.5-1.1 3.8-0.6 1.9-0.8 4.5-2.3 6-0.3 0.3 0.1 0.8 0.4 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m136.6 42.5c4-3.4 10.2-1.3 13.4-6 0.4-0.5-0.3-0.9-0.7-0.5-2.3 2.6-5 2.9-8.3 3.5-1.9 0.4-3.6 1-4.8 2.6-0.2 0.3 0.2 0.6 0.4 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m141.1 50.7c2.3-1.3 3.4-3.3 4.3-5.7 1.2-3.3 2-5.8 4.8-8.2 0.2-0.2 0-0.7-0.3-0.6-2.3 0.8-3.5 3-4.3 5.2-1.2 3.2-1.8 6.6-4.9 8.7-0.3 0.2 0.1 0.7 0.4 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m146.7 57.3c2.3-0.5 3.9 1.3 6 1.3 3.1 0.1 5.3-2 8.5-1 0.4 0.1 0.7-0.4 0.4-0.6-2.3-1.4-4.2-0.5-6.6 0.3-2.1 0.6-3.5 0-5.4-0.6-1.1-0.4-1.9-0.4-3-0.1-0.4 0.2-0.3 0.8 0.1 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m150.4 63.9c2.1 0.5 3.6-0.8 5-2.2 1.9-2 3.4-4.3 6.5-4 0.5 0.1 0.7-0.6 0.2-0.8-4.9-2-6.9 6.5-11.5 6.4-0.3 0-0.5 0.5-0.2 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m155 79.8c4.1-0.1 8.2 6.2 12.3 3.3 0.3-0.2 0-0.7-0.3-0.6-2.9 0.7-4.5-0.4-6.9-1.9-1.6-1-3.2-1.6-5.1-1.4-0.3 0.1-0.3 0.6 0 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m154.1 87.1c3-0.1 5.3-2.2 8.3-2.2 2.3 0.1 3.8-0.1 5.5-1.8 0.4-0.3-0.1-0.9-0.5-0.6-1.3 1-2.4 1.5-4.1 1.5-0.8 0-1.7 0-2.5 0.1-2.4 0.5-4.2 2.1-6.7 2.3-0.4 0-0.3 0.7 0 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m132.2 131.2c-0.2 2.5 1.8 3.8 4.1 4.3 3.3 0.8 6.8 0.6 9.2 3.5 0.2 0.3 0.7-0.1 0.6-0.4-2.3-5.7-12.2-1-13.3-7.4 0-0.4-0.5-0.4-0.6 0z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m145.8 138.1c-0.3-4.5-3.2-9.3-5.7-12.9-0.3-0.5-1.1 0-0.8 0.5 2.3 4.1 4.4 8 5.8 12.5 0.1 0.4 0.7 0.3 0.7-0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m150.1 105.3c2 1.5 4 2.5 6.5 2.4 4.5-0.3 8-3 12.6-2 0.3 0.1 0.5-0.5 0.2-0.6-2.1-1.1-4-0.8-6.3-0.2-4.8 1.5-8.1 2.8-12.7-0.1-0.3-0.2-0.6 0.3-0.3 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m169.4 105c-2.2-1.6-4.9-2.9-7.5-3.9-2.3-0.9-4.1-3.2-6.5-3.7-0.4-0.1-0.7 0.6-0.3 0.8 2.1 1.2 3.8 2.9 6.1 3.8 2.7 1.1 5.3 2.4 7.9 3.7 0.4 0.1 0.7-0.5 0.3-0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m97.4 155.7c-1.9 4.3 0.7 5.1 3 8.2 1.1 1.5 0.8 3.7 2.3 4.9 2 1.5 5 1.2 5.8 4.2 0.1 0.3 0.6 0.4 0.6 0 0.2-4.1-5-3.2-6.4-6.1-0.9-1.6-0.8-2.8-2.1-4.2-2.3-2.2-3.7-3.1-2.7-6.8 0.1-0.3-0.4-0.5-0.5-0.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m109.3 172.9c0.4-5.1-5.2-8.5-2.7-13.8 1.4-3 3.1-5.2 1.4-8.6-0.3-0.5-1-0.1-0.8 0.4 1.8 4.8-2.7 7.1-2.5 11.5 0.1 3.8 3.4 6.7 3.8 10.5 0.1 0.4 0.7 0.4 0.8 0z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m75.1 167.1c2.1-4.8-1.1-10.1 1.8-14.7 0.2-0.2-0.1-0.6-0.4-0.5-4.4 2.1-0.9 11.3-2 15-0.1 0.4 0.5 0.6 0.6 0.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m75.2 167.2c1.8-2.6 2.8-5.7 5-8.1 1.2-1.3 3.1-2.8 3.1-4.7 0-0.4-0.4-0.6-0.7-0.3-1.2 2-2.7 3.6-4.1 5.4-1.7 2.2-2.6 4.9-3.9 7.3-0.3 0.4 0.3 0.8 0.6 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m25.9 38.8c3.9 3.9 3.6 12.1 9.5 14 0.3 0.1 0.5-0.4 0.2-0.6-5.2-3-4.9-10-9.3-13.8-0.2-0.2-0.6 0.2-0.4 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m26.2 38.9c2.6 3.2 7.7 2.8 10.4 6 0.3 0.3 0.9 0.1 0.8-0.3-0.3-1.7-2.5-2.5-3.9-3.1-2.3-0.9-4.9-1.5-6.9-3.1-0.3-0.3-0.7 0.2-0.4 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m11.5 85.4c1 1.3 2.3 1.7 3.9 1.8 2.5 0.1 4.3 0.1 6.6 1.3 0.4 0.2 0.8-0.1 0.5-0.5-2.4-3.4-7.7-0.4-10.6-3-0.3-0.3-0.6 0.2-0.4 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m11.6 85.5c1.7 0.9 3.5 0.3 5-0.7 0.8-0.6 1.6-1.3 2.4-1.8 1-0.8 2.2-1 3.2-1.7 0.3-0.2 0-0.6-0.2-0.7-1.6-0.3-3.2 1.1-4.4 2.1-1.9 1.6-3.2 2.4-5.8 2.2-0.4 0-0.5 0.5-0.2 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m11.4 62.4c1.7 3.5 6 2.6 8.5 5.1 1.8 1.7 3.7 4.8 6.5 4.1 0.5-0.2 0.4-0.9-0.2-0.9-3 0.4-4.6-3.4-6.9-4.9-2.5-1.7-5.5-1-7.4-3.7-0.2-0.3-0.7 0-0.5 0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m11 62.4c1.6 0.4 3.1 1.1 4.7 1.1 2.9 0 5.2-2.3 8.2-0.9 0.5 0.2 0.9-0.6 0.4-0.9-1.8-1.1-3.4-0.7-5.3-0.1-1.6 0.6-2.9 1-4.6 0.8-1.1-0.2-2.1-0.6-3.2-0.7-0.4 0-0.6 0.6-0.2 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m36.8 145c1.9-0.6 2.6-2.3 2.9-4.1 0.2-1.1 0.3-2.3 0.4-3.4 0.3-1.6 0.9-2.5 1.9-3.7 0.3-0.3-0.1-0.6-0.4-0.5-1.6 0.6-2.2 2.6-2.4 4.1-0.4 2.7-0.1 5.4-2.7 7-0.3 0.3-0.1 0.8 0.3 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m36.9 145c2 0.1 3.7-1 5.3-2.3 2-1.8 3.6-3.4 6.3-4.2 0.4-0.1 0.4-0.8-0.1-0.8-1.9-0.1-3.6 1.2-4.9 2.4-2.1 1.9-3.8 3.6-6.6 4.3-0.3 0.1-0.4 0.6 0 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m18.7 128.5c2.3-0.4 3.9-1.7 5.2-3.5 0.6-0.9 1.2-1.9 1.8-2.8 0.8-1.1 1.8-1.8 2.8-2.7 0.2-0.3 0.1-0.7-0.3-0.7-1.8 0.4-3 2.5-3.9 3.9-1.5 2.4-2.9 4.4-5.7 5.2-0.4 0.1-0.3 0.7 0.1 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m18.2 128.8c5.2 1.2 8.7-4.4 13.9-4.1 0.5 0 0.6-0.6 0.2-0.8-4.8-2.1-9 4.9-13.9 4.3-0.4-0.1-0.5 0.5-0.2 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m19 104.7c2.4 0.1 4.8-0.3 7.2-0.7 0.6-0.1 0.5-1-0.1-0.9-2.4 0.3-4.7 0.8-7.1 0.9-0.4 0-0.4 0.7 0 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m19.1 104.8c1.5-0.8 2.5-2.1 3.4-3.5 0.5-0.8 1-1.6 1.6-2.3 0.6-0.6 1.3-0.9 2-1.5 0.2-0.2 0.1-0.5-0.2-0.6-1.4-0.3-2.7 1.4-3.4 2.4-1.1 1.7-2 3.8-3.7 4.8-0.4 0.3-0.1 0.9 0.3 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m64.2 33.5c0.7 3.4-2.9 11.3 2.1 12.8 0.4 0.1 0.8-0.5 0.4-0.8-4-2.3-1-8.4-2-12.1-0.1-0.3-0.6-0.2-0.5 0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m64.3 33.5c-0.8 5 4.6 6.1 6.1 10.2 0.2 0.5 1 0.2 0.9-0.3-1.1-4.1-6.8-5.1-6.4-9.8 0-0.4-0.5-0.4-0.6-0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m50.5 142.7c6.9-2.8 3.3-12.8 8.9-16.3 0.5-0.3 0.2-1-0.4-0.8-2.4 0.8-3.2 3.7-3.7 5.9-1 3.9-1.3 8.4-5 10.7-0.3 0.2-0.1 0.6 0.2 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m51 142.6c1.4-0.9 3-1.5 4.3-2.6 0.9-0.9 1.7-1.9 2.4-2.9 1.9-2.6 3.2-5.4 6.1-7.1 0.5-0.3 0.2-1-0.4-0.8-2.5 0.9-4 3.5-5.4 5.6-0.9 1.4-1.8 2.8-2.9 4-1.3 1.4-3.2 2-4.5 3.4-0.3 0.3 0.1 0.6 0.4 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m27.9 112c5.9-1.9 7.4-8.9 13.4-10.4 0.5-0.1 0.4-0.9-0.2-0.9-2.5 0.2-4.4 1.8-5.9 3.8-2.2 2.8-4 5.6-7.5 7-0.4 0.1-0.1 0.6 0.2 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m27.6 112.3c5.5-1 10.1-4.5 15.9-3.5 0.5 0.1 0.7-0.7 0.2-0.8-5.2-1.9-11.5 1.9-16.3 3.7-0.3 0.1-0.1 0.6 0.2 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m30.6 58.1c1.8 1.7 3.7 3.9 6 4.9 2.3 1 4.6 0.2 6.8 1.5 0.3 0.2 0.6-0.1 0.4-0.4-1.4-1.6-3-1.1-4.9-1.3-3.3-0.3-5.5-3.2-8-5.1-0.3-0.3-0.6 0.2-0.3 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m30.7 58.2c4 4.2 4.6 11.8 11.2 13 0.6 0.1 0.7-0.9 0.1-1-6.2-1-6.8-8.8-10.9-12.4-0.3-0.2-0.6 0.1-0.4 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m43 64.2c0.8 0.4 1.6 0.9 2.4 1.3 0.5 0.1 0.8-0.5 0.4-0.7-0.8-0.5-1.7-0.8-2.5-1.2-0.3-0.1-0.6 0.4-0.3 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m101.8 133.7c0.6 3 3.3 4.7 5.9 5.9 3.9 1.9 7.4 3 8.9 7.4 0.1 0.3 0.6 0.1 0.6-0.2-0.2-3.1-2.8-5-5.4-6.3-3.8-1.9-7.5-2.9-9.5-7-0.1-0.3-0.6-0.2-0.5 0.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m117.2 146.1c1.2-6-5.3-10.1-6-15.7 0-0.4-0.5-0.4-0.6-0.1-0.7 2 0.7 4 1.7 5.6 2.1 3.4 4.1 6.1 4.3 10.2 0 0.4 0.5 0.3 0.6 0z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m144.3 114.1c-2.7-1.6-5.5-3.1-8.5-4.1-1.6-0.6-4.3-1.5-5.6 0.1-0.3 0.4 0.2 0.8 0.6 0.6 1.9-1.4 5.3 0.3 7.2 1.1 2 0.9 4 2 6 2.8 0.3 0.2 0.6-0.3 0.3-0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m132.9 104.7c3.3 0.4 5.1 3.3 7 5.8 1.3 1.6 3.1 4.2 5.4 4.2 0.3 0 0.5-0.4 0.2-0.6-1.3-0.9-2.5-1.6-3.5-2.8-1.2-1.3-2.1-2.7-3.2-4-1.5-1.8-3.4-3.7-5.9-3.3-0.4 0.1-0.4 0.7 0 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m82.8 133.5c16.9 3.2 35.3-7.5 44-21.8 0.2-0.3-0.3-0.6-0.5-0.3-10.1 13.4-25.9 24.4-43.4 21.5-0.4 0-0.4 0.5-0.1 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m128.4 107.3c4.2-7 5.2-14.9 4.1-23-0.1-0.4-0.7-0.4-0.7 0-0.4 8.4 0.3 15-3.9 22.7-0.2 0.3 0.3 0.6 0.5 0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m43.8 82.4c2.1-12.9 8.7-20.3 17.6-29.1 0.3-0.3-0.1-0.7-0.4-0.5-10 6.9-16.2 17.5-17.7 29.5 0 0.3 0.5 0.4 0.5 0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m43.7 95.2c1.3 9 4.6 21.2 13.3 25.9 0.4 0.1 0.7-0.3 0.4-0.6-7.9-6.3-11.5-15.6-13.2-25.4 0-0.3-0.5-0.2-0.5 0.1z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m98.4 47.3c9.6 3.4 17.7 8.6 23.9 16.8 0.2 0.3 0.7 0 0.5-0.3-4.7-8.7-15.1-14.2-24.2-17-0.3-0.1-0.5 0.4-0.2 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m125.4 68.4c0.5 1.1 1.2 2.2 2.2 2.9 0.2 0.3 0.5-0.1 0.3-0.4-0.7-0.9-1.3-1.8-1.9-2.7-0.2-0.4-0.8-0.2-0.6 0.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m103.6 53.3c8.7 3.1 15.7 10 20.2 17.9 0.2 0.4 0.7 0.1 0.6-0.2-3.1-7.9-12.5-16-20.6-18.2-0.4-0.1-0.6 0.4-0.2 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m96.5 130.2c4.8-0.8 10.7-3.4 13.8-7.2 0.3-0.3-0.1-0.7-0.4-0.4-4.3 3.2-8.5 5.2-13.5 7.2-0.3 0.1-0.1 0.5 0.1 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m114.3 120.6c7.6-7.7 15.1-16.4 14.1-27.9 0-0.3-0.6-0.3-0.6 0-0.4 5.9-1.4 11.1-4.7 16.2-2.6 4.1-6.1 7.6-9.3 11.3-0.2 0.3 0.2 0.7 0.5 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m99.8 124.7c9.7-3.7 17.8-12 21.4-21.8 0.1-0.3-0.4-0.6-0.5-0.3-5.5 9.4-10.8 17-21.2 21.5-0.3 0.2-0.1 0.7 0.3 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m108.3 114.6c1.3-0.9 2.6-2 3.6-3.3 0.2-0.2-0.1-0.5-0.4-0.3-1.3 1-2.3 2.2-3.6 3.1-0.4 0.3 0 0.8 0.4 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m115.6 106.6c0.8-1.5 1.9-2.9 2.4-4.5 0.1-0.4-0.3-0.6-0.5-0.3-1 1.3-1.8 2.9-2.5 4.5-0.2 0.3 0.4 0.6 0.6 0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m122 99.7c0.9-2.3 1.9-4.9 1.6-7.4 0-0.4-0.5-0.3-0.6 0-0.4 2.5-0.9 4.8-1.6 7.1-0.1 0.5 0.5 0.7 0.6 0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m50.2 107.3c4.4 9.1 13.2 15.8 22.9 18.6 0.4 0.1 0.6-0.4 0.2-0.6-9.5-3.9-17.7-8.8-22.7-18.2-0.1-0.3-0.6-0.1-0.4 0.2z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m53.7 106.1c0.4 1 1 1.8 1.7 2.5 0.3 0.2 0.6-0.2 0.4-0.4-0.6-0.7-1.1-1.5-1.5-2.4-0.2-0.3-0.7-0.1-0.6 0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m57.8 112.2c5 5.4 12.4 11.2 20.2 11.3 0.4 0 0.5-0.5 0.1-0.6-7.9-1.4-14.4-5.5-19.9-11.1-0.2-0.3-0.7 0.1-0.4 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m58.6 108.1c4.7 5.9 11.7 9.2 19 10.5 0.3 0.1 0.4-0.4 0.1-0.5-7.2-2-13.6-4.5-18.7-10.3-0.2-0.2-0.6 0.1-0.4 0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m65.8 109.8c0.8 0.8 1.8 1.6 2.9 2 0.3 0.1 0.5-0.3 0.3-0.4-1-0.7-1.9-1.2-2.8-2-0.2-0.3-0.7 0.1-0.4 0.4z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m82.7 124.7c2.8 0.8 6 0.7 8.7-0.4 0.3-0.2 0.1-0.6-0.2-0.6-2.9 0.4-5.4 1-8.3 0.4-0.4-0.1-0.5 0.5-0.2 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m80.8 128.7c3.7 0.8 7.4 0.9 11.2 0.7 0.3 0 0.4-0.4 0.1-0.4-3.8-0.2-7.5-0.2-11.2-0.9-0.4-0.1-0.5 0.5-0.1 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m86.4 120.3c5.8 0.3 13-0.4 17.5-4.5 0.3-0.3-0.1-0.7-0.4-0.5-4.8 3.6-11.1 4.7-17 4.4-0.4 0-0.4 0.5-0.1 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m87.6 115.1c1.1 0 2.2 0.1 3.3 0 0.3-0.1 0.3-0.6 0-0.6-1.1-0.1-2.2-0.1-3.2-0.1-0.4 0.1-0.5 0.7-0.1 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m95.4 115c2.3-0.7 4.7-1.5 6.8-2.8 0.3-0.2 0.1-0.6-0.2-0.5-2.3 0.9-4.5 2-6.9 2.8-0.3 0.1-0.1 0.7 0.3 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m67.8 49.7c1.3-0.8 2.6-1.4 3.9-2 0.4-0.1 0.2-0.6-0.1-0.5-1.6 0.2-2.9 1.1-4.2 2-0.4 0.3 0.1 0.8 0.4 0.5z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m75.8 46.2c3.3-1.7 6.7-1.6 10.2-1.2 0.4 0 0.5-0.5 0.1-0.6-3.3-1.2-7.6-0.5-10.6 1.2-0.4 0.2-0.1 0.7 0.3 0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m58.2 61.6c4.8-6.8 13.4-10.4 21.5-11 0.4 0 0.3-0.6 0-0.7-8.2-0.1-17.4 4.7-21.9 11.4-0.2 0.3 0.2 0.6 0.4 0.3z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m84 49c1.2 0 2.5 0.1 3.7-0.1 0.3 0 0.3-0.5 0-0.5-1.2-0.2-2.4-0.1-3.6-0.1-0.4 0.1-0.5 0.7-0.1 0.7z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m55 64.4c-1.3 0.7-2.5 2.3-2.5 3.9 0 0.3 0.4 0.5 0.6 0.2 0.3-0.6 0.5-1.3 0.9-1.9 0.4-0.7 0.9-1.2 1.4-1.6 0.4-0.3 0-0.9-0.4-0.6z"
        />
        <path
          id="&lt;Path&gt;"
          className="s2"
          d="m71.4 62.5c1.9-1.7 3.9-2.3 6.3-2.7 0.3-0.1 0.3-0.6 0-0.6-2.5-0.3-5 1.2-6.7 2.8-0.3 0.3 0.1 0.8 0.4 0.5z"
        />
      </g>
    </svg>
  )
}

export default Sun