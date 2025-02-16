import logo from "../assets/logo.png";

export default function HeaderLogo() {
  const handleClick = () => {
    window.location = '/'
  }
  return (
    <div className="w-40 m-auto" onClick={() => handleClick()} >
      <img src={logo} alt="Logo" />
    </div>
  );
}
