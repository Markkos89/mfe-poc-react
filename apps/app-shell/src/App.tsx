import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'

import Header from './components/ui/Header/Header'
import { Home } from './pages/Home'

const UsersMFE = React.lazy(
  () => import(/* webpackPrefetch: true */ /* webpackMode: "lazy" */ 'users/App'),
)
const PostsMFE = React.lazy(
  () => import(/* webpackPrefetch: true */ /* webpackMode: "lazy" */ 'posts/App'),
)

import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/ErrorFallback'

const App = () => {
  return (
    <>
      <ChakraProvider resetCSS>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/">
                <Route
                  path={'/users/*'}
                  element={
                    <ErrorBoundary key="usersErrorBoundary" FallbackComponent={ErrorFallback}>
                      <UsersMFE />
                    </ErrorBoundary>
                  }
                />
                <Route
                  path={'/posts/*'}
                  element={
                    <ErrorBoundary key="postsErrorBoundary" FallbackComponent={ErrorFallback}>
                      <PostsMFE />
                    </ErrorBoundary>
                  }
                />
                <Route path={'/'} element={<Home />} />
                <Route path="*" element={<div>Not found (APP)</div>} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
