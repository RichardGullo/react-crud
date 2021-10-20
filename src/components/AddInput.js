import React from 'react';

function AddInput(){

        return (
            <form>
                <div className="input-group input-group-lg">
                    <input id="add-inputField" name="add-inputField" type="text" className="form-control input-lg mr-1"/>
                    <button id="add-button" className="btn btn-primary">Add Item</button>
                </div>
            </form>
        );
}

export default AddInput;



