import React, { useState } from "react";

function LoginPage() {
  const tile = process.env.PUBLIC_URL + "/tile.png";
  const logo = process.env.PUBLIC_URL + "/logo.png";

  const [data, setData] = useState("");
  const [password, setPassword] = useState("");
  const [final, setFinal] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  
  function handleMail(event) {
    setData(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleFinal(event) {
    event.preventDefault();

    if (!isEmailSubmitted) {
      setIsEmailSubmitted(true);
      setPassword(""); // Clear password input field
    } else {
      const endpoint = isRegister ? "register" : "login";
      try {
        const response = await fetch(`http://localhost:8080/api/${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data, password: password }),
        });

        const result = await response.json();
        if (response.ok) {
          setFinal(data);
          console.log(result.message);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  return (
    <div className="Page">
      <div className="left">
        <img src={tile} alt="tile" />
      </div>
      <div className="rightpart">
        <div className="border-container">
          <div className="right-log">
            <div className="company">
              <img src={logo} alt="coursecompass" id="compass" />
              <p>CourseCompass</p>
            </div>
            <div className="welcome">
              <p>Welcome to CourseCompass!</p>
            </div>
            <form>
              <div className="form-group">
                {isEmailSubmitted ? (
                  <input
                    onChange={handlePassword}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    required
                  />
                ) : (
                  <input
                    onChange={handleMail}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email address"
                    value={data}
                    required
                  />
                )}
              </div>
              <button onClick={handleFinal} type="button">
                {isEmailSubmitted ? "Submit" : "Continue"}
              </button>
              <div className="separator">
                <hr className="line" />
                <span>or</span>
                <hr className="line" />
              </div>
              <button type="button" className="google-button">
                Sign in with Google
              </button>
            </form>
            <p className="signin">
              {isRegister ? (
                <>
                  Already have an account?{" "}
                  <a href="#" onClick={() => setIsRegister(false)}>
                    Sign In
                  </a>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <a href="#" onClick={() => setIsRegister(true)}>
                    Register
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      {final}
    </div>
  );
}

export default LoginPage;
