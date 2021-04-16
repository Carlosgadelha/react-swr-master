// import React, { useEffect, useState } from 'react';
import React, { useCallback }  from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import api from '../services/api';
import {mutate as mutateGlobal} from 'swr';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => { 
  const {data, mutate} = useFetch <User[]> (`users`)

  const handleNameChange = useCallback((id: number)=> {
    api.put(`users/${id}`,{name: 'Bartolomeu'})

    const updateUsers = data?.map(user =>{
      if(user.id === id){
        return{ ...user, name: 'Bartolomeu'}
      }
      
      return user;
    })
    mutate(updateUsers, false)
    mutateGlobal(`users/${id}`,{id, name: 'Bartolomeu'})
  },[data, mutate]);

  if(!data){
    return <p> Carregando ... </p>
  }


  // const [data, setData]  = useState<User[]>([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3333/users`).then(response =>{
  //     response.json().then( users => {
  //       setData(users);
  //     })
  //   })
    
  // },[]);

 
  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
          <button type = "button" onClick = {() => handleNameChange(user.id)}>
            Alterar Nome
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;