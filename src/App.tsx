import { FC, MouseEvent, useState } from "react";
import Button from "./components/Button";
import { User } from "./models/UserModel";
import UserInfo from "./components/UserInfo";
import Header from "./components/Header";
import { getRandomNumber } from "./helpers/number";

const URL = "https://jsonplaceholder.typicode.com/users";

const App: FC = () => {
  const [item, setItem] = useState<User | null>(null);

  const receiveRandomUser = async () => {
    const id = getRandomNumber(1, 10);
    const response = await fetch(`${URL}/${id}`);
    const _user = (await response.json()) as User;
    setItem(_user);
  };

  const handleButtonClick = (
    event: MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    receiveRandomUser();
  };

  return (
    <>
      <Header />
      <Button onClick={handleButtonClick} />
      <UserInfo user={item} />
    </>
  );
};

export default App;
