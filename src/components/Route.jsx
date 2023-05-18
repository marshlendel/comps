import useNavigationContext from "../hooks/useNavigationContext";

const Route = ({ children, path, element }) => {
  const { currentPath } = useNavigationContext();
  return <>{(path === currentPath) &&  (element || children)}</>;
};

export default Route