import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, LogOut, User as UserIcon } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header
      className="glass"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "16px 0" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "white" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #3AD4FF, #2E57A5)",
              padding: "8px",
              borderRadius: "10px",
              display: "flex",
            }}
          >
            <GraduationCap size={24} color="white" />
          </div>
          <h2 style={{ margin: 0, fontSize: "1.25rem" }}>
            Place<span style={{ background: 'linear-gradient(135deg, #3AD4FF, #2E57A5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ment</span>
          </h2>
        </Link>
        <nav>
          <ul style={{ display: "flex", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
            <li>
              <Link
                to="/"
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                About
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                  >
                    Profile
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {!user ? (
            <Link to="/login" className="btn-primary" style={{ padding: "8px 20px", textDecoration: 'none', borderRadius: '10px', background: 'linear-gradient(135deg, #3AD4FF, #2E57A5)', color: 'white', fontWeight: '600' }}>
              Sign In
            </Link>
          ) : (
            <button 
              onClick={handleLogout}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "8px", 
                background: "rgba(255, 255, 255, 0.05)", 
                border: "1px solid rgba(255, 255, 255, 0.1)", 
                color: "white", 
                padding: "8px 16px", 
                borderRadius: "10px", 
                cursor: "pointer",
                fontWeight: "500"
              }}
            >
              <LogOut size={16} /> Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
