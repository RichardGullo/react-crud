import React from 'react';

function AddInput(props){

        return (
            <form>
                <div className="input-group input-group-lg">
                    <input onChange = {props.onChangeTodoText} value = {props.onTodoText} id="add-inputField" name="add-inputField" type="text" className="form-control input-lg mr-1"/>
                    <button onClick={props.onAddItem} id="add-button" className="btn btn-primary">Add Item</button>
                </div>
            </form>
        );
}

export default AddInput;



