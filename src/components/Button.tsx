import { ComponentPropsWithoutRef, FC } from "react";

interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
  title: string;
}

const Button: FC<IButtonProps> = props => {
  const { title, onClick, ...rest } = props;

  return (
    <button type="button" onClick={onClick} {...rest}>
      {title}
    </button>
  );
};

export default Button;
