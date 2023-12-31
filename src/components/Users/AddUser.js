import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../ErrorModal/ErrorModal';

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please Enter a valid age and name (non-empty values)'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'invalid age',
                message: 'Please Enter a valid age (>0).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    };

    const errorHandler = () => {
        setError(null);
    }


    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;