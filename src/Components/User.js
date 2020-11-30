import React,{useEffect, useState} from 'react';
import SkeletonProfile from '../skeletons/SkeletonProfile';

const User = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        setTimeout(async() => {
            const payload = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await payload.json();

            setUsers(json);
        }, 3000);
        
    }, []);

    return (
        <div style={{flexGrow: 5, maxWidth: 300}}>
            <h2>User Info</h2>

            {users && users.map(user => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <hr/>
                    </div>
                ))
            }

            {!users && [1,2,3].map(n => <SkeletonProfile key={n}/>)}
        </div>
    )
}

export default User;