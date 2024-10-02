import { NavLink } from "react-router-dom";
import { PathType } from "../../paths";
import { Route } from "../../routes";

type Props = {
  title: Route["title"];
  path: PathType;
};

// const Icons = {};

export const IconLink = ({ title, path }: Props) => {
  return (
    <NavLink to={path} className="">
      {title}
    </NavLink>
  );
};
