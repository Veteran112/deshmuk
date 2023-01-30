import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { Box } from '@mui/system'
import LinearProgress from '@mui/material/LinearProgress'
import { Navbar } from 'layouts'

// const Home = React.lazy(() => import('pages/Home'))
// const Landing = React.lazy(() => import('pages/Landing'))
const Login = React.lazy(() => import('pages/Login'))
const Register = React.lazy(() => import('pages/Register'))
const Main = React.lazy(() => import('pages/Main'))
const Profile = React.lazy(() => import('pages/Profile'))
const Interpreters = React.lazy(() => import('pages/WorkTime'))
const ManageAccounts = React.lazy(() => import('pages/ManageAccounts'))
const ForgotPasswordContainer = React.lazy(() => import('pages/ForgotPassword'))
const ResetPasswordContainer = React.lazy(() => import('pages/ResetPassword'))

export const RouterConfig = () => {
  return (
    <div>
      <React.Suspense
        fallback={
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        }
      >
        <Routes>
          {/* List all public routes here */}
          {/* <Route exact path="/" element={<Landing />} /> */}
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/exam"
            element={
              <>
                <Profile />
              </>
            }
          />
          <Route exact path="/main" element={<Main />} />
          <Route
            exact
            path="/manage_users"
            element={
              <PrivateRoute>
                <>
                  <Navbar />
                  <ManageAccounts />
                </>
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/manage_users/:id"
            element={
              <PrivateRoute>
                <>
                  <Navbar />
                  <Interpreters />
                </>
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/forgot_password"
            element={<ForgotPasswordContainer />}
          />
          <Route
            exact
            path="/reset_password/:resetPasswordToken"
            element={<ResetPasswordContainer />}
          />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </React.Suspense>
    </div>
  )
}
