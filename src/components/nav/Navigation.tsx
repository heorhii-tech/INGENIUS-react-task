import { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavigationProps } from "../../types/types";

const Navigation: FC<NavigationProps> = ({ courseId }) => {
  return (
    <div className="navigation">
      <NavLink to="/">Home</NavLink>
      {courseId && <NavLink to={`/courses/${courseId}`}>Back</NavLink>}
    </div>
  );
};

export default Navigation;
