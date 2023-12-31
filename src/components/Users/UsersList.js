import React from 'react'

import Card from '../UI/Card'
import classes from './UserList.module.css'

const UserList = (props) => {
    props.users.map((user) => console.log(user))
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    < li key={Math.random().toString()} >
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card >
    )
}

export default UserList