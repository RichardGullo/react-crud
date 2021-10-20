import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

function Table(){

        return (
            <div className="table-scroll">
            <table id="main-table" className="table table-hover">
                <tbody id="table-body">
                <tr>
                    <td>Hello</td>
                    <td className ="crud-buttons">
                        <FontAwesomeIcon icon={faEdit} data-id="0" data-action="edit" />
                        <FontAwesomeIcon icon={faTrash} data-id="0" data-action="delete" />   
                    </td>
                </tr>
                <tr>
                    <td>Hello</td>
                    <td className ="crud-buttons">
                        <FontAwesomeIcon icon={faEdit} data-id="0" data-action="edit" />
                        <FontAwesomeIcon icon={faTrash} data-id="0" data-action="delete" />   
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        );
}

export default Table;



