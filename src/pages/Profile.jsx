import { useState, useEffect } from "react";
import "./Profile.css";

function Profile({ user }) {
  const savedUser = JSON.parse(localStorage.getItem("user") || "null");

  const profile = user || {
    name: savedUser?.fullName || "User",
    email: savedUser?.email || "",
    studentId: "Not assigned",
    gpa: 0,
    role: savedUser?.role || "Student"
  };

  const isAdvisor = profile.role === "Advisor";

  const [email, setEmail] = useState(profile.email);
  const [name, setName] = useState(profile.name);
  const [savedName, setSavedName] = useState(profile.name);
  const [savedEmail, setSavedEmail] = useState(profile.email);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setName(profile.name);
    setSavedName(profile.name);
    setEmail(profile.email);
    setSavedEmail(profile.email);
  }, [profile.name, profile.email]);

  const handleSave = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...savedUser,
      fullName: name,
      email: email
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    setSavedName(name);
    setSavedEmail(email);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(savedName);
    setEmail(savedEmail);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">

        <div className="profile-header">
          <div>
            <h1>{isAdvisor ? "Advisor Profile" : "My Profile"}</h1>
            <p>
              {isAdvisor
                ? "Manage your advisor account"
                : "Manage your personal and academic information"}
            </p>
          </div>

          <span className="student-badge">
            {profile.role} Account
          </span>
        </div>

        <div className="profile-card">

          <div className="profile-top">
            <div className="profile-avatar">
              {savedName.charAt(0).toUpperCase()}
            </div>

            <div className="profile-identity">
              <h2>{savedName}</h2>
              <p>{savedEmail}</p>
              <span>{profile.role}</span>
            </div>
          </div>

          <div className="profile-divider"></div>

          {isAdvisor ? (
            <>
              <h3 className="section-title">
                Advisor Overview
              </h3>

              <div className="academic-card">
                <div>
                  <span>Account Type</span>
                  <h2>Advisor</h2>
                  <p>Welcome to your advisor account</p>
                </div>

                <div className="gpa-icon">AD</div>
              </div>
            </>
          ) : (
            <>
              <h3 className="section-title">
                Academic Overview
              </h3>

              <div className="academic-card">
                <div>
                  <span>Current GPA</span>
                  <h2>{Number(profile.gpa).toFixed(1)}</h2>
                  <p>Your current academic performance</p>
                </div>

                <div className="gpa-icon">GPA</div>
              </div>
            </>
          )}

          <div className="section-header">
            <h3 className="section-title">
              Personal Information
            </h3>

            {!isEditing && (
              <button
                className="edit-button"
                onClick={() => setIsEditing(true)}
              >
                Edit 
              </button>
            )}
          </div>

          <form onSubmit={handleSave}>
            <div className="profile-fields">

              <div className="field-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={!isEditing}
                  required
                />
              </div>

              {!isAdvisor && (
                <div className="field-group">
                  <label>Student ID</label>
                  <input
                    type="text"
                    value={profile.studentId}
                    disabled
                  />
                </div>
              )}

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