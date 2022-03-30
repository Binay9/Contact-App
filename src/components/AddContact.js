import React from 'react';

class AddContact extends React.Component {
    render() {
        return (
            <div>
                <h3>Contact List</h3>
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name here" />
                    </div>

                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email here"/>
                    </div>
                  
                    <button type="submit" classNameName="btn btn-secondary">Add</button>
                </form>

            </div>
        );
    }
}

export default AddContact;