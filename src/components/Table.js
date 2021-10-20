import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

function Table(props){

        return (
            <div className="table-scroll">
            <table id="main-table" className="table table-hover">
                <tbody id="table-body">
                    {props.todoList.map((todo) => <tr key={todo._id}>
                                                        <td>{todo.text}</td>
                                                        <td className ="crud-buttons">
                                                            <FontAwesomeIcon icon={faEdit} data-id= {todo._id}  data-action="edit" />
                                                            <FontAwesomeIcon  icon={faTrash} data-id={todo._id} data-action="delete" onClick={props.onDeleteEntry} /> 
                                                        </td>
                                                    </tr>)}
   
                </tbody>
            </table>
        </div>
        );
}

export default Table;



