import { FC, MouseEventHandler, useState } from "react";
import Button from "./components/Button";
import { IUser } from "./models/UserModel";
import UserInfo from "./components/UserInfo";
import Header from "./components/Header";
import { getRandomNumber } from "./helpers/number";
import Alert from "./components/Alert";

const URL = "https://jsonplaceholder.typicode.com/users";

const App: FC = () => {
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
    <>
      <Header />
      <Button title="get random user" onClick={handleButtonClick} />
      <Alert message={error} />
      <UserInfo user={item} />
    </>
  );
};

export default App;
