import { FC, useCallback, useState } from "react";
import Button from "../components/Button";
import Alert from "../components/Alert";
import UserInfo from "../components/UserInfo";
import { IUser } from "../models/UserModel";
import { getRandomNumber } from "../helpers/number";

const URL = "https://jsonplaceholder.typicode.com/users";

interface IItem {
  user: IUser | null;
  cached: boolean;
}

const usersCacheMap: Map<number, IUser> = new Map();

const MainPage: FC = () => {
  const [item, setItem] = useState<IItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  const receiveRandomUser = useCallback(async () => {
    setError(null);
    const id = getRandomNumber(1, 10);
    if (usersCacheMap.has(id)) {
      const cached = usersCacheMap.get(id);
      setItem({ user: cached || null, cached: true });
      return;
    }
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    if (response.ok) {
      const user = data as IUser;
      usersCacheMap.set(id, user);
      setItem({ user: user || null, cached: false });
    } else {
      setItem(null);
      setError("User not found!");
    }
  }, []);

  return (
    <main>
      <UserInfo user={item?.user || null} cached={item?.cached} />
      <Alert message={error} />
      <Button title="get random user" onClick={receiveRandomUser} />
    </main>
  );
};

export default MainPage;
