import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './pages/Home'
import { UsersPage } from './pages/UsersPage'

const App = () => {
  console.log(window.location.pathname)
  if (window.location.pathname === '/') {
    return (
      <>
        <ChakraProvider resetCSS>
          <BrowserRouter>
            <Routes>
              <Route path="*">
                <Route path="home2" element={<Home />} />
                <Route index element={<UsersPage />} />
                <Route path="*" element={<div>Not found</div>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </>
    )
  }
  return (
    <>
      <ChakraProvider resetCSS>
        <Routes>
          <Route path="*">
            <Route path="home2" element={<Home />} />
            <Route index element={<UsersPage />} />
            <Route path="*" element={<div>Not found</div>} />
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  )
}

export default App
