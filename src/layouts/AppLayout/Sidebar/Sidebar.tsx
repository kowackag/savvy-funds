import { routes } from "../../../routes";
import { IconLink } from "../IconLink/IconLink";

export const Sidebar = () => {
  return (
    <div className="w-">
      Sidebar
      {routes
        .filter(({ layout }) => layout === "app")
        .map(({ path, title }) => (
          <IconLink key={path} path={path} title={title} />
        ))}
    </div>
  );
};
