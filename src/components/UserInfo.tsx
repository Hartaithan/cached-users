import { FC } from "react";
import { IUser } from "../models/UserModel";

interface IUserInfoProps {
  user: IUser | null;
  cached?: boolean;
}

const UserInfo: FC<IUserInfoProps> = props => {
  const { user, cached = false } = props;

  if (!user)
    return (
      <table>
        <tbody>
          <tr>
            <td>Empty user</td>
          </tr>
        </tbody>
      </table>
    );

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr className={cached ? "cached" : undefined}>
          <td>{user.name}</td>
          <td>{user.phone}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserInfo;
