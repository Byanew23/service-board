export default function LogIn() {
  function handleClick() {
    console.log("pedal");
  }

  return (
    <div className="flex items-center">
      <button
        onClick={handleClick}
        className="bg-indigo-600 w-25 h-12 rounded-2xl text-white hover:cursor-pointer"
      >
        SIGN IN
      </button>
    </div>
  );
}
