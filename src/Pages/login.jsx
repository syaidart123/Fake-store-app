import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragment/FormLogin";

const LoginPage = () => {
  return (
    <div>
      <AuthLayouts title="Login" type="login">
        <FormLogin />
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;
