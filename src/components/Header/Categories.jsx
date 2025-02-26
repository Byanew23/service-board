import useScrollVisibility from "./useScrollVisibility";

export default function Categories() {
  const isVisible = useScrollVisibility(300);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ul className={`flex justify-center gap-x-5 mr-17 `}>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
        <li>Six</li>
      </ul>
    </div>
  );
}
