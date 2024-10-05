import { useState } from "react";
import { NavLink } from "react-router-dom";
import clx from "classnames";

import { IconSidebar } from "../IconSidebar/IconSidebar";
import { Logo } from "../../../components/icons/Logo";
import { ArrowRight } from "../../../components/icons/ArrowRight";

import { appRoutes } from "../../../routes";

export const Sidebar = () => {
  const [isOpen, setISOpen] = useState<boolean>(true);
  return (
    <div className={clx("sm:py-6 sm:px-8 relative", { ["sm:w-72"]: isOpen })}>
      <button
        onClick={() => setISOpen((state) => !state)}
        className="hidden sm:flex sm:justify-center sm:items-center w-6 h-10 bg-primary text-neutral10 absolute top-8 -right-6 rounded-tr-2xl rounded-br-2xl "
      >
        <ArrowRight className={`${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className="hidden sm:pb-6 sm:items-center sm:gap-3 sm:flex px-3 text-headline-4">
        <Logo />
        <h1 className={clx("text-primary", { ["hidden"]: !isOpen })}>
          Savvy<span className="text-neutral700">Funds</span>
        </h1>
      </div>

      <ul className="flex justify-stretch items-stretch sm:flex-col sm:gap-4 border-t border-t-primary/10">
        <hr className="hidden sm:inline-block opacity-40 text-primary border-dashed"></hr>
        {appRoutes
          .filter(({ layout }) => layout === "app")
          .map(({ path, title }) => (
            <li
              key={path}
              className="hover:bg-secondary01/5 sm:hover:bg-neutral00 flex-grow"
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center justify-center sm:justify-start gap-2 text-neutral500 ${!isActive ? "" : isOpen ? "bg-primary sm:rounded-full peer [&>*:first-child]:text-neutral10 !text-neutral10 " : "bg-primary sm:bg-transparent [&>*:first-child]:bg-primary [&>*:first-child]:text-neutral10"}`
                }
              >
                <IconSidebar
                  title={title}
                  className={clx({
                    ["border sm:!border-neutral40 sm:bg-primary/5 peer:bg-primary"]:
                      !isOpen,
                  })}
                />
                <p
                  className={clx(
                    "text-m font-medium  hidden sm:block capitalize",
                    {
                      ["sm:hidden"]: !isOpen,
                    }
                  )}
                >
                  {title}
                </p>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};
