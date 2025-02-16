export default function LogIn({ openLogin }) {
  function handleClick() {
    console.log("pedal");
  }

  return (
    <div className="flex items-center">
      <button
        onClick={() => openLogin()}
        className="bg-indigo-600 w-25 h-12 rounded-2xl text-white hover:cursor-pointer"
      >
        SIGN IN
      </button>
    </div>
  );
}
