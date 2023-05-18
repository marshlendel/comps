import clsx from "clsx";

const Button = (props) => {
  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
  } = props;

  const classes = clsx(
    rest.className,
    "flex items-center px-3 py-1.5 border hover:brightness-95",
    {
      "border-blue-600 bg-blue-500": primary,
      "border-black bg-gray-900": secondary,
      "border-green-600 bg-green-500": success,
      "border-yellow-600 bg-yellow-500": warning,
      "border-red-600 bg-red-500": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-white": !outline,
      "text-black": !primary && !secondary && !success && !warning && !danger,
      "text-blue-600": outline && primary,
      "text-gray-600": outline && secondary,
      "text-green-600": outline && success,
      "text-yellow-600": outline && warning,
      "text-red-600": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error("Can only select one button varation");
    }
  },
};

export default Button;
