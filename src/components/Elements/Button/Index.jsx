const Button = ({
  className = "bg-black",
  children = "...",
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button
      className={`h-8 px-4 font-semibold rounded-full ${className} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
// function Button({
//   className = "bg-black",
//   children = "...",
//   type = "button",
//   onClick = () => {},
// }) {
//   return (

//   );
// }

export default Button;
