import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Container, Heading } from '@chakra-ui/react'

export const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <main>
        <Container maxW="container.xl">
          <h1>Home 3</h1>
          <Heading m={10}>
            React 18 + Redux-Toolkit + RKT Query + Chakra UI + React router 6 DEMO
          </Heading>
          <Link to="/home3">Home</Link> | <Link to="/posts">Posts list</Link>
        </Container>
      </main>
    </>
  )
}
