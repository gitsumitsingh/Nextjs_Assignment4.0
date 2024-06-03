import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

const Home = () => {
  const [data, setData] = useState([]);
  
  const getData = async () => {
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json()
    setData(data.results)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <main>
      <h1>Client Side Rendering (CSR)</h1>
      <ul>
        {data.map(item => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </main>
  )
}

export default Home
