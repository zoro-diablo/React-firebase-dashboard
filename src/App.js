import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './routes/home/Home'
import Login from './routes/login/Login'
import List from './routes/list/List'
import Single from './routes/single/Single'
import New from './routes/new/New'
import { productInputs, userInputs } from './formSource'
import '../src/style/dark.scss'
import { DarkModeContext } from './context/darkModeContenxt'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const { darkMode } = useContext(DarkModeContext)

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=':userId'
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title='Add New User' />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path='products'>
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=':productId'
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title='Add New Product' />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
