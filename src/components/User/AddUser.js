import React,{useState, useRef} from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';


const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collgeNameRef = useRef();

    
    const [error,setError]= useState('');
    
    const addUserHandler = (event)=>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredCollge = collgeNameRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length ===0 || enteredCollge.trim().length ===0){
            setError({
                title:'Invalid input',
                message:'Please enter a valid name,age and collge!'
            })
            return;
        }
        if (+enteredUserAge <1){   //+ is used to convert the string to number so that comparision with 1 can be done
            setError({
                title:'Invalid age',
                message:'Please enter a valid age!'
            })
            return;
        }
            
        props.onAddUser(enteredName,enteredUserAge,enteredCollge);
        
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
                <input id='username' type='text' ref={nameInputRef}></input>
                <label htmlFor='age'>Age(Year)</label>
                <input id='age' type='number' ref={ageInputRef}></input>
                <label htmlFor='collge'>College Name</label>
                <input id='collge' type='text' ref={collgeNameRef}></input>
                <Button type='submit'>Add User</Button>
            </form>
            
        </Card>
        </div>
    )
};

export default AddUser;