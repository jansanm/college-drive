import React from "react";
import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header
      className="glass"
      style={{ position: "sticky", top: 0, zIndex: 100, padding: "16px 0" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              background: "var(--gradient)",
              padding: "8px",
              borderRadius: "10px",
              display: "flex",
            }}
          >
            <GraduationCap size={24} color="white" />
          </div>
          <h2 style={{ margin: 0, fontSize: "1.25rem" }}>
            Place<span className="gradient-text">Ment</span>
          </h2>
        </div>
        <nav>
          <ul style={{ display: "flex", gap: "32px", listStyle: "none" }}>
            <li>
              <a
                href="#hero"
                style={{
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#predict"
                style={{
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                Predict
              </a>
            </li>
            <li>
              <a
                href="#stats"
                style={{
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                Statistics
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn-primary" style={{ padding: "8px 20px" }}>
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
