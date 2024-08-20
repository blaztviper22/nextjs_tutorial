import { fetchUsers } from "@/utils/actions";

async function UsersList() {
    const users = await fetchUsers();
  return (
    <div className="mt-4">
        {users.length? 
            <div>
                {users.map(user => {
                    return <h4 key={user.id} className="capitalize text-lg">
                        {user.firstname} {user.lastname}
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