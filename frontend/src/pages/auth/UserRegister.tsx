import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        {
          username: username,
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        },
      );
      if (response.status === 201) {
        console.log("Registration successful");
        navigate("/");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <div>User Registration</div>
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <input
          name="username"
          id="username"
          type="text"
          placeholder="Write your username here"
        ></input>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="Write your email here"
        ></input>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="••••••••"
        ></input>
        <button className="user-register-submit" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default UserRegister;
