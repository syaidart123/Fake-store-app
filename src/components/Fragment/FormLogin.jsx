import { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/input/Index";
import Button from "../Elements/Button/Index";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailled, setLoginFailled] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/";
      } else {
        setLoginFailled(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      {loginFailled && (
        <p className="text-red-500 text-center mt-5">{loginFailled}</p>
      )}

      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="Username"
        htmlFor="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="***"
        htmlFor="password"
      />
      <Button className="bg-purple-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
