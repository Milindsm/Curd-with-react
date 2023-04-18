import React,{useState} from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';


const AddUser = props => {
    const [enteredUsername,setEnteredUsername]= useState('');
    const [enteredAge,setEnteredAge]= useState('');
    const [error,setError]= useState('');
    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){
            setError({
                title:'Invalid input',
                message:'Please enter a valid name and age!'
            })
            return;
        }
        if (+enteredAge <1){   //+ is used to convert the string to number so that comparision with 1 can be done
            setError({
                title:'Invalid age',
                message:'Please enter a valid age!'
            })
            return;
        }
            
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    
    }
    const usernameChangeHandler = (event)=>{
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    const errorHandler = () =>{
        setError(null);
    };
    
    return(
        <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}></input>
                <label htmlFor='age'>Age(Year)</label>
                <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}></input>
                <Button type='submit'>Add User</Button>
            </form>
            
        </Card>
        </div>
    )
};

export default AddUser;