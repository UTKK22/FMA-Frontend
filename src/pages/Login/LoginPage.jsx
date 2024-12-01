import React, { useState } from "react";
import styles from "../Login/loginPage.module.css";
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
const LoginPage = ({ setIsLoggedIn,page }) => {
  const [currState, setCurrState] =  useState(page === "signup" ? "Sign up" : "Sign in");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      currState === "Sign in"
        ? "http://localhost:3000/login"
        : "http://localhost:3000/signup";
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        if (currState === "Sign up") {
            
            alert("Signup successful! Please sign in to continue.");
            setFormData({ name: "", email: "", password: "", phone: "" });
           setCurrState("Sign in");
            navigate("/"); 
          }
    else{
        localStorage.setItem("token", data.token);
  
        // If signing up, store the user data locally
        if (currState === "Sign up") {
          localStorage.setItem("user", JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          }));
        } else {
          // If signing in, fetch the user data from the server
          const userResponse = await fetch(`http://localhost:3000/user/${formData.email}`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${data.token}`,
            },
          });
  
          if (userResponse.ok) {
            const userData = await userResponse.json();
            localStorage.setItem("user", JSON.stringify({
              name: userData.name,
              email: userData.email,
              phone: userData.phone,
              userId: userData.userId,
            }));
          } else {
            console.error('Failed to fetch user data');
            alert("Unable to fetch user data");
          }
        }
  
        setIsLoggedIn(true);
        navigate("/home");
    }
      }
       else {
        alert(data.error || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error has occurred");
    }

  };
  
  return (
    <div className={styles.loginpage}>
      <div className={styles.loginupper}>
        <div className={styles.loginformsection}>
          <div className={styles.logo}>
            <img
              src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732252821/mnpw8ydvkgypep60azfe.png"
              alt="Logo"
            />
          </div>
          <div>
            <div>
                <p>
                  {currState=='Sign in'? "Welcome Back  👋":"Welcome  👋"}  
                </p>
            </div>
            <div>
              <p>
                Today is a new day. It's your day. You shape it. {currState=='Sign in'? "Sign in": "Sign up"} to
                start ordering.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {currState === "Sign up" && (
                <>
                <label>Name</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="eg. John A"
                required
              />
              <label>Phone Number</label>
               <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10 digit mobile number"
                />
                </>
              
            )}
           
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Example@email.com"
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              required
            />
            
            <button type="submit">
              {currState === "Sign up" ? "Continue" : "Sign in"}
            </button>
          </form>
          <div className={styles.changer}>
          <p>
            {currState === "Sign in"
              ? "Don’t you have an account?"
              : "Already have an account?"}{" "}
            <span
              onClick={() =>
                setCurrState(currState === "Sign in" ? "Sign up" : "Sign in")
              }
            >
              {currState === "Sign in" ? "Sign up" : "Sign in"}
            </span>
          </p>
          </div>
         
        </div>
        <div className={styles.loginimagesection}>
          <img
            src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732191178/tuzkdurxeaxkjn3xmw46.png"
            alt="Food"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
