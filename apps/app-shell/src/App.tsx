import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loadable from 'react-loadable'

import Header from './components/ui/Header/Header'
import { Home } from './pages/Home'
import { Posts } from './pages/Posts'
import { MFErrorHandler } from './components/MFErrorHandler'
import { ChakraProvider } from '@chakra-ui/react'
import { hot } from 'react-hot-loader/root'

// react-loadable
const LoadableUsers = Loadable({
  loader: () => import('users/App'),
  loading: MFErrorHandler,
  delay: 3000,
})

const App = () => {
  return (
    <>
      <ChakraProvider resetCSS>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/">
              <Route path={'/posts'} element={<Posts />} />
              <Route path={'/users/*'} element={<LoadableUsers />} />
              <Route path={'/'} element={<Home />} />
              <Route path="*" element={<div>Not found (APP)</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default hot(App)
