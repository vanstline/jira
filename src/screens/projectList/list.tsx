import { User } from "screens/projectList/searchPanel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: string;
  organization: string;
}

interface IProps {
  users: User[];
  list: Project[];
}

export const List = (props: IProps) => {
  const { users, list } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users?.find((user) => user.id === project.personId)?.name || ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
