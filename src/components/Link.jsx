import clsx from "clsx";
import useNavigationContext from "../hooks/useNavigationContext";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigationContext();

  const classes = clsx("text-blue-500", className, {
    [activeClassName]: currentPath === to,
  });

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
