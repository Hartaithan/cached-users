import { FC, Fragment, MouseEventHandler, useState } from "react";
import Button from "../components/Button";
import Alert from "../components/Alert";
import UserInfo from "../components/UserInfo";
import { IUser } from "../models/UserModel";
import { getRandomNumber } from "../helpers/number";

const URL = "https://jsonplaceholder.typicode.com/users";

const MainPage: FC = () => {
  const [item, setItem] = useState<IUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  const receiveRandomUser = async () => {
    setError(null);
    const id = getRandomNumber(1, 10);
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    if (response.ok) {
      const user = data as IUser;
      setItem(user || null);
    } else {
      setItem(null);
      setError("User not found!");
    }
  };

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation();
    receiveRandomUser();
  };

  return (
    <Fragment>
      <Button title="get random user" onClick={handleButtonClick} />
      <Alert message={error} />
      <UserInfo user={item} />
    </Fragment>
  );
};

export default MainPage;
