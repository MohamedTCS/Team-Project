
import { useState, useEffect } from "react";
import "./Profile.css";

function Profile({ user }) {

  const student = user || {
    name: "Ahmed Mohamed",
    email: "ahmed@example.com",
    studentId: "STU-2026-0001",
    gpa: 0.0,
  };

  const [email, setEmail] = useState(student.email);
  const [isEditing, setIsEditing] = useState(false);
  const [savedEmail, setSavedEmail] = useState(student.email);

  useEffect(() => {
    setEmail(student.email);
    setSavedEmail(student.email);
  }, [student.email]);

  const handleSave = (e) => {
    e.preventDefault();

    setSavedEmail(email);
    setIsEditing(false);

  
  };

  const handleCancel = () => {
    setEmail(savedEmail);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">

        {/* Page Header */}
        <div className="profile-header">
          <div>
            <h1>My Profile</h1>
            <p>Manage your personal and academic information</p>
          </div>

          <span className="student-badge">Student Account</span>
        </div>

        {/* Profile Card */}
        <div className="profile-card">

          <div className="profile-top">
            <div className="profile-avatar">
              {student.name.charAt(0).toUpperCase()}
            </div>

            <div className="profile-identity">
              <h2>{student.name}</h2>
              <p>{savedEmail}</p>
              <span>Student</span>
            </div>
          </div>

          <div className="profile-divider"></div>

          {/* Academic Overview */}
          <h3 className="section-title">
            Academic Overview
          </h3>

          <div className="academic-card">
            <div>
              <span>Current GPA</span>
              <h2>{Number(student.gpa).toFixed(1)}</h2>
              <p>Your current academic performance</p>
            </div>

            <div className="gpa-icon">GPA</div>
          </div>

          {/* Personal Information */}
          <div className="section-header">
            <h3 className="section-title">
              Personal Information
            </h3>

            {!isEditing && (
              <button
                className="edit-button"
                onClick={() => setIsEditing(true)}
              >
                Edit Email
              </button>
            )}
          </div>

          <form onSubmit={handleSave}>
            <div className="profile-fields">

              <div className="field-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={student.name}
                  disabled
                />
                <small>Name cannot be changed</small>
              </div>

              <div className="field-group">
                <label>Student ID</label>
                <input
                  type="text"
                  value={student.studentId}
                  disabled
                />
              </div>

              <div className="field-group full-width">
                <label>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEditing}
                  required
                />
              </div>

            </div>

            {isEditing && (
              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-button"
                >
                  Save Changes
                </button>
              </div>
            )}
          </form>

        </div>

        <p className="profile-footer">
          Academic Progress & Early Warning System
        </p>

      </div>
    </div>
  );
}

export default Profile;
