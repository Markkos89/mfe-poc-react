import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './pages/Home'
import { PostsPage } from './pages/Posts'

import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'

// react-hot-loader
setConfig({
  showReactDomPatchNotification: false,
})

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
                <Route index element={<PostsPage />} />
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
            <Route index element={<PostsPage />} />
            <Route path="*" element={<div>Not found</div>} />
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  )
}

export default hot(App)
