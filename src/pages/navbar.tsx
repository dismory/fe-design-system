import clsx from "clsx";
import useTitle from "../hooks/useTitle";
import Navbar from "../components/Navbar";

function NavbarPage() {
  useTitle("Navbar Component");

  return (
    <div
      className={clsx(
        "h-screen w-screen px-4 pt-4 sm:px-8 xl:px-28",
        "bg-linear-148 from-neutral-50 from-9% to-neutral-300 to-100%"
      )}
    >
      <Navbar />
    </div>
  );
}

export default NavbarPage;
