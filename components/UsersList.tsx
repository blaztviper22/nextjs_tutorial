import { fetchUsers } from "@/utils/actions";
import DeleteButton from "./DeleteButton";

async function UsersList() {
    const users = await fetchUsers();
  return (
    <div className="mt-4">
        {users.length? 
            <div className="max-w-lg">
                {users.map(user => {
                    return <h4 key={user.id} className="capitalize text-lg flex justify-between items-center mb-2">
                        {user.firstname} {user.lastname}
                        <DeleteButton id={user.id} />
                    </h4>
                })}
            </div> 
            : 
            <div>
                No users found...
            </div>
        }
    </div>
  )
}

export default UsersList