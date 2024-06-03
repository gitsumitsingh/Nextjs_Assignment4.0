import React from 'react'
import fetch from 'isomorphic-unfetch'
import {dataeg} from './data';


const Home = ({ data }) => {
  return (
    <main>
      <h1>Static Site Generation (SSG)</h1>
      <ul>
        {data.map(item => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </main>
  )
}

export async function getStaticProps () {
  // const response = await fetch('https://swapi.dev/api/films/')
  // const data = await response.json()

  const data = await dataeg;
  return { props: { data } }

  // return { props: { data: data.results } }
}

export default Home
