import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Box } from '@mui/system'
import LinearProgress from '@mui/material/LinearProgress'

// const Home = React.lazy(() => import('pages/Home'))
// const Landing = React.lazy(() => import('pages/Landing'))
const Login = React.lazy(() => import('pages/Login'))
const Main = React.lazy(() => import('pages/Main'))
const Profile = React.lazy(() => import('pages/Profile'))
// const Interpreters = React.lazy(() => import('pages/WorkTime'))
// const ManageAccounts = React.lazy(() => import('pages/ManageAccounts'))
// const ForgotPasswordContainer = React.lazy(() => import('pages/ForgotPassword'))
// const ResetPasswordContainer = React.lazy(() => import('pages/ResetPassword'))

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
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </React.Suspense>
    </div>
  )
}
