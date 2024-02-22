import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragment/FormRegister";

const RegisterPage = () => {
  return (
    <div>
      <AuthLayouts title="Register" type="register">
        <FormRegister />
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;
