
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
 const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [errors, setErrors] = useState({});
const [success, setSuccess] = useState('');

function handleSubmit(e) {
  e.preventDefault();

  const newErrors = {};

  if (!email.trim()) {
    newErrors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = 'Please enter a valid email';
  }

  if (!password) {
    newErrors.password = 'Password is required';
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    navigate('/profile');
  }
}
  return (
    <div className="login-container">

      <div className="login-header">
        <div className="logo">
          🎓
          <div>
            <h2>Student Portal</h2>
            <p>Learn • Grow • Succeed</p>
          </div>
        </div>
      </div>

      <div className="login-card">

        <h1>Welcome Back!</h1>
        <p className="subtitle">Login to your account</p>
          {errors.email && (
            <p className="error-message">{errors.email}</p>
          )}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span>✉</span>
           <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
         {errors.password && (
         <p className="error-message">{errors.password}</p>
        )}

          <div className="input-group">
            
            <span>🔒</span>
           
           <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
           {success && (
           <p className="success-message">{success}</p>
           )}
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <p className="register-link">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

        <div className="login-illustration">
          🎓
        </div>

      </div>
    </div>
  );
}

export default Login;
