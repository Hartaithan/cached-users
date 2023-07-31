import { FC } from "react";

interface IAlertProps {
  message: string | null;
}

const Alert: FC<IAlertProps> = props => {
  const { message } = props;
  if (!message) return null;
  return (
    <div role="alert">
      <strong>Something went wrong!</strong>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
