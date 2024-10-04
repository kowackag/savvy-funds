import { useState } from "react";
import clx from "classnames";

import { appRoutes } from "../../../routes";
import { IconSidebar } from "../IconSidebar/IconSidebar";
import { NavLink } from "react-router-dom";
import { Logo } from "../../../components/icons/Logo";

export const Sidebar = () => {
  const [isOpen, setISOpen] = useState<boolean>(true);
  return (
    <div className={clx("sm:py-6 sm:px-8 relative", { ["md:w-80"]: isOpen })}>
      <button
        onClick={() => setISOpen((state) => !state)}
        className="hidden sm:block w-6 h-10 bg-primary text-neutral10 absolute top-8 -right-6 rounded-tr-2xl rounded-br-2xl"
      >
        xd
      </button>
      <Logo />
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
                className="flex items-center justify-center sm:justify-start gap-2 "
              >
                <IconSidebar
                  title={title}
                  className={clx("p-3 sm:border border-neutral00", {
                    ["border !border-neutral40 bg-primary/5 "]: !isOpen,
                  })}
                />
                <p
                  className={clx(
                    "text-m font-medium text-neutral500 hidden sm:block",
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
