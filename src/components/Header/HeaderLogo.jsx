import logo from "../assets/logo.png";
import useScrollVisibility from "./useScrollVisibility";

export default function HeaderLogo() {
  const isVisible = useScrollVisibility(300);

  const handleClick = () => {
    window.location = "/";
  };
  return (
    <div
      className={`transition-all duration-500 ${
        isVisible ? "w-40 m-auto mb-3" : "w-28  m-auto mb-3 "
      }`}
      onClick={() => handleClick()}
    >
      <img src={logo} alt="Logo" />
    </div>
  );
}
