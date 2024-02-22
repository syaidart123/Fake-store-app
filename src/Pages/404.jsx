import { useRouteError } from "react-router-dom";
import errorImg from "../assets/images/error2.png";
import Button from "../components/Elements/Button/Index";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="flex justify-center bg-slate-100 min-h-screen items-center">
        <div className="w-full max-w-xs">
          <img src={errorImg} alt="ErrorImage" className="w-full h-44" />
          <h1 className="text-3xl font-bold">OOps !</h1>
          <p className="my-5 text-xl">Sorry, Unexpected error has accured</p>
          <p className="text-lg">{error.statusText || error.message}</p>
          <Button
            className="mt-5 bg-purple-800"
            onClick={() => (window.location.href = "/")}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
