import { Link } from 'react-router-dom'
import '../styles/styles.scss'
import { User } from '../types/types';
import { useSelectUserStore,  } from '../store/useUsersStore';
import Loader from './Loader';
import { useQuery } from '@tanstack/react-query'
import {  UserResponce } from '../types/types'
import { instance } from '../api/UsersApi';

const UserCard = () => {
  const setUser = useSelectUserStore((state)=>state.setUser)
  const getData = async () => {
    const { data } = await instance.get<UserResponce>(``);
    return data.data
  }
  const handleSelect = (user:User) => {
    console.log(user)
    setUser(user)
    console.log(user)
  }
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getData,
  })
 
  return (
    <div className='userCards' >
      { isLoading ? <Loader/> :
        data?.map((user: User)=>(
          <div className='userCard' key={user.id} >
              <img 
                  src={user.avatar} 
                  className='userCard__img'/>
              <div className='userCard__info'>
                  <h3>{user.first_name} + {user.last_name}</h3>
                  <p>{user.email}</p>
                  <Link 
                    to={`/${user.id}`} 
                    onClick={()=> handleSelect(user)}>
                      Подробнее
                  </Link>
              </div>
          </div>
        ))
      }
    </div>
    
  )
}

export default UserCard
