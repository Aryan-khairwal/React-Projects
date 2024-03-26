import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitInfo() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Aryan-khairwal')
  //     .then((response) => response.json())
  //     .then((response) => setData(response))
  // }, [])


  return (
    <>
      <div className='w-40'>
        <img src={data.avatar_url} alt="github profile picture" className='W-10 bg-cover' />
      </div>
      <h1>Github Followers : {data.followers} </h1>

    </>
  )
}

export default GitInfo

export const gitInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Aryan-khairwal')
  return response.json();
}
