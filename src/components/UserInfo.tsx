import { FC } from "react";
import { User } from "../models/UserModel";

interface IUserInfoProps {
  user: User | null;
}

const UserInfo: FC<IUserInfoProps> = props => {
  const { user } = props;

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
        <tr>
          <td>{user.name}</td>
          <td>{user.phone}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserInfo;
