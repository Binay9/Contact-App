import React from 'react';

class AddContact extends React.Component {
    render() {
        return (
            <div className='row-item1'>
                <h3 className='subHead'>Contact List</h3>
                <form>
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name here" />
                    </div>

                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email here"/>
                    </div>
                  
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}

export default AddContact;