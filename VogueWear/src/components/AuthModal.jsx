import { useState } from "react";
import "../styles/AuthModal.css";

function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!isLogin) {
      if (!name || !confirmPassword) {
        setError("Please fill all fields");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <p className="modal-label">
          {isLogin ? "WELCOME BACK" : "CREATE AN ACCOUNT"}
        </p>

        <h2>{isLogin ? "Login" : "Register"}</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        {error && <p className="auth-error">{error}</p>}

        <button className="login-btn" onClick={handleSubmit}>
          {isLogin ? "Login" : "Create Account"}
        </button>

        <p className="switch-auth">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
