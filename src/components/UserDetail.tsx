import { Link } from 'react-router-dom'
import { useSelectUserStore } from '../store/useUsersStore'

const UserDetail = () => {
    const user = useSelectUserStore((state)=>state.user)
    console.log("detail", user)
    const clearUser = useSelectUserStore((state) => state.clearUser);

    const handleCLear = () => {
      clearUser();
      console.log("clear", user)
    };

    return (
        <div className="userCard" onClick={handleCLear}>
            <img src={user?.avatar} className="userCard__img" />
            <div className="userCard__info">
                <h3>{user?.first_name} {user?.last_name}</h3>
                <p>Email: {user?.email}</p>
                <p>ID: {user?.id}</p>
                <Link to="/">Назад</Link>
        </div>
        </div>
    )
}

export default UserDetail
