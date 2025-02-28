import useScrollVisibility from "./useScrollVisibility";

export default function LogIn({ openLogin }) {
  const isVisible = useScrollVisibility(300);

  return (
    <div className={`flex items-center ${!isVisible ? "pr-3" : ""}`}>
      <button
        onClick={() => openLogin()}
        className={`bg-indigo-600 w-25 ${
          isVisible ? "h-12" : "h-10"
        } rounded-2xl text-white hover:cursor-pointer`}
      >
        Вход
      </button>
    </div>
  );
}
