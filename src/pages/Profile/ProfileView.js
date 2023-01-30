import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
// import { Link } from 'react-router-dom'
import { PrimaryLoadingButton } from 'components/StyledButton'
import { useAuth } from 'contexts'
import { useNavigate } from 'react-router'
import Exam from '../../assets/images/exam.png'
import Navbar from './Navbar'

const ProfileView = () => {
  const history = useNavigate()
  const auth = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState({
    new: '',
    confirm: '',
    newErr: '',
    confirmErr: ''
  })

  const start = () => {
    console.log('here')
    history('/main')
  }

  return (
    <div className="profile-container row pb-4 m-0">
      <Navbar />
      <div className="col-12 col-md-6">
        <div className="d-flex  mt-3 mt-md-5">
          <div className="profile-box mx-4 p-4 radius text-center">
            <h2 className="welcome pt-3 pb-4">Exam</h2>
            <div className="login-form input-type">
              <form
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    start()
                  }
                }}
              >
                <div className="d-flex">
                  <img src={Exam} alt="" className="input" />
                  <TextField
                    label="User Name"
                    variant="standard"
                    className="w-100 mb-4"
                    value={email}
                    required
                    error={
                      auth.error && auth.error.errorType === 1 ? true : false
                    }
                    helperText={
                      auth.error && auth.error.errorType === 1
                        ? auth.error.message
                        : ''
                    }
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="d-flex">
                  <img src={Exam} alt="" className="input" />
                  <TextField
                    label="Password"
                    type="password"
                    variant="standard"
                    className="w-100 mb-4"
                    value={password}
                    required
                    error={
                      auth.error && auth.error.errorType === 2 ? true : false
                    }
                    helperText={
                      auth.error && auth.error.errorType === 2
                        ? auth.error.message
                        : ''
                    }
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <PrimaryLoadingButton
                  label="Start Exam"
                  className="login_btn"
                  loading={auth.isAuthenticating}
                  onClick={start}
                />
              </form>
              {/* <div className="d-flex justify-content-between mt-3 forgot-pass">
                <Link to="/register" className="small">
                  {`Don't have an account? Sign up`}
                </Link>
                <Link to="/forgot_password" className="small">
                  Forgot/Reset your password?
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileView
