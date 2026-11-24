import React, { useState } from 'react';
import { Link } from 'react-router-dom';import './Register.css';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

function handleSubmit(e) {
  e.preventDefault();
  setError('');
  setSuccess('');

  if (!fullName || !email || !password || !confirmPassword || !role) {
    setError('Please fill in all fields.');
  } else if (!email.includes('@')) {
    setError('Please enter a valid email address.');
  } else if (password.length < 6) {
    setError('Password must be at least 6 characters.');
  } else if (password !== confirmPassword) {
    setError('Passwords do not match.');
  } else {
    const user = {
      fullName,
      email,
      password,
      role
    };

    localStorage.setItem('user', JSON.stringify(user));

    setSuccess('Account created successfully!');
  }
}

  return (
    <div className="portal-container">
      <div className="portal-header">
        <h2>Academic Progress</h2>
        <p>Learn • Grow • Succeed</p>
      </div>

      <div className="register-card">
        <h1>Create Account</h1>
        <p className="subtitle">Join our community</p>

        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-wrapper">
              <User size={19} />
              <input placeholder="Full Name" value={fullName}
                onChange={(e) => setFullName(e.target.value)} />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <Mail size={19} />
              <input type="email" placeholder="Email Address" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <Lock size={19} />
              <input type={showPassword ? 'text' : 'password'}
                placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <button type="button" className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Eye size={19} /> : <EyeOff size={19} />}
              </button>
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <Lock size={19} />
              <input type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm Password" value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
              <button type="button" className="password-toggle"
                onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <Eye size={19} /> : <EyeOff size={19} />}
              </button>
            </div>
          </div>

          <div className="input-group">
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Choose Account Type</option>
              <option value="Student">Student</option>
              <option value="Advisor">Advisor</option>
            </select>
          </div>

          <button type="submit" className="register-btn">Register</button>
        </form>

        <div className="divider">or</div>
       <p className="login-link">
  Already have an account? <Link to="/login">Login</Link>
</p>
      </div>
    </div>
  );
}

export default Register;