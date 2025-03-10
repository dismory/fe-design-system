import React, { useState } from "react";
import clsx from "clsx";
import abstractlyLogo from "/abstractly.svg";
import { RiCloseFill } from "react-icons/ri";
import { RiMenuFill } from "react-icons/ri";
import { createPortal } from "react-dom";

interface NavbarLinkProps {
  label: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ label }) => {
  return (
    <button
      className={clsx(
        "navbar__link",
        "text-base font-medium text-neutral-600",
        "h-9 px-3 text-left xl:h-11 xl:px-0 xl:text-center"
      )}
    >
      {label}
    </button>
  );
};

interface NavbarButtonProps {
  label: string;
  variant: "primary" | "secondary";
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
  label,
  variant = "primary",
}) => {
  return (
    <button
      className={clsx(
        "navbar__button",
        "flex h-11 items-center justify-center rounded-sm px-[18px] text-base font-medium shadow-sm",
        variant === "primary" && "bg-indigo-700 text-white",
        variant === "secondary" &&
          "border-[0.5px] border-neutral-200 bg-white text-neutral-900 hover:border-1"
      )}
    >
      {label}
    </button>
  );
};

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "navbar",
          "fixed top-0 left-0 z-1010 flex h-screen w-[95vw] flex-col items-stretch justify-between gap-6 bg-white p-4 pt-8 xl:static xl:h-17 xl:w-auto xl:flex-row xl:items-center xl:justify-center xl:gap-24 xl:bg-transparent xl:p-0",
          isOpen
            ? "translate-x-0 xl:translate-x-0"
            : "-translate-x-full xl:translate-x-0",
          "transition-[translate,display] duration-300 ease-in-out xl:transition-none"
        )}
      >
        <div
          className={clsx(
            "navbar__header",
            "flex shrink-0 items-center justify-between"
          )}
        >
          <img src={abstractlyLogo} alt="Abstractly Logo" className="h-8" />
          <button
            className={clsx(
              "navbar__close",
              "flex size-5 cursor-pointer items-center justify-center",
              "xl:hidden"
            )}
            onClick={() => setIsOpen(false)}
          >
            <RiCloseFill className={clsx("fill-neutral-600")} />
          </button>
        </div>

        <div
          className={clsx(
            "navbar__links",
            "flex grow gap-2 xl:gap-8",
            "flex-col items-stretch xl:flex-row xl:items-center"
          )}
        >
          <NavbarLink label="Home" />
          <NavbarLink label="Features" />
          <NavbarLink label="Pricing" />
          <NavbarLink label="About us" />
          <NavbarLink label="Contact" />
        </div>

        <div
          className={clsx(
            "navbar__actions",
            "flex flex-col items-stretch gap-4 xl:flex-row xl:items-center"
          )}
        >
          <NavbarButton label="Learn more" variant="secondary" />
          <NavbarButton label="See pricing" variant="primary" />
        </div>
      </div>

      <div
        className={clsx(
          "navbar-substitute",
          "w-auto py-4.5 sm:mr-0 sm:ml-0 xl:hidden"
        )}
      >
        <div
          className={clsx(
            "navbar__header",
            "flex shrink-0 items-center justify-between"
          )}
        >
          <img src={abstractlyLogo} alt="Abstractly Logo" className="h-8" />
          <button
            className={clsx(
              "navbar__menu",
              "flex size-5 cursor-pointer items-center justify-center",
              // "md:hidden",
              isOpen && "hidden"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <RiMenuFill className={clsx("fill-neutral-600")} />
          </button>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <div
            className={clsx(
              "navbar__backdrop",
              "fixed inset-0 z-1000 bg-neutral-950/70",
              "transition-opacity duration-300 ease-in-out"
            )}
            onClick={() => setIsOpen(false)}
          />,
          document.body
        )}
    </>
  );
};

export default Navbar;
