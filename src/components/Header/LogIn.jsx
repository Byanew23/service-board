export default function LogInForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login form submitted");

    // TBD: Implement login logic
  };

  const inputClasses = "border-1 rounded-xl p-2 mb-3";

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="mb-7 self-start font-bold text-3xl">Вход</h2>
        <label htmlFor="username" className="ml-1 mb-1 font-medium">
          Имейл
        </label>
        <input
          label="Username"
          type="text"
          id="username"
          placeholder="Имейл"
          required
          className={inputClasses}
        />
        <label htmlFor="password" className="mb-1 font-medium">
          Парола
        </label>
        <input
          type="password"
          id="password"
          placeholder="Парола"
          required
          className={inputClasses}
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
          className="bg-indigo-600 text-white rounded-xl p-2 mt-2 hover:cursor-pointer"
        >
          Вход
        </button>
      </form>
      <a className="hover:cursor-pointer ml-1 mt-4 text-indigo-600 hover:text-black transition-colors duration-200">
        Забравена парола?
      </a>
    </div>
  );
}
