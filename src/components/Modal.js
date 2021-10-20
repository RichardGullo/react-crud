import React from 'react';

function Modal(){

        return (
              
            <div className="modal fade" id="myModal" tabIndex="-1">
                  <div className="modal-dialog modal-sm">
                      <div className="modal-content">
                          <form>
                              <div className="modal-header">
                                  <h5 className="modal-title">Edit Entry</h5>
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                              </div>
                              <div className="modal-body">
                                  <div className="form-group">
                                        <label>Name</label>
                                      <input id="modal-nameField" type="text" className="form-control" />
                                  </div>
                    
                              </div>
                              <div className="modal-footer">
                                  <button type="button" id="modal-confirmButton" className="btn btn-primary" data-dismiss="modal">Confirm</button>
                                  <button type="button" className="btn btn-dark" data-dismiss="modal">Cancel</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
    
        );
}

export default Modal;



