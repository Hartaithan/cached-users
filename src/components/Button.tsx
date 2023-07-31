import { FC } from "react";

interface IButtonProps {
  onClick: any;
}

const Button: FC<IButtonProps> = props => {
  const { onClick } = props;

  return (
    <button type="button" onClick={onClick}>
      get random user
    </button>
  );
};

export default Button;
