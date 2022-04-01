import React from 'react';

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "") {
            alert("All input are required !!");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name: '', email: ''});
    };

    render() {
        return (
            <div className='row-item1'>
                <h3 className='subHead'>Contact List</h3>
                <form onSubmit={this.add}>
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Enter name here" 
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter email here"
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                        />
                    </div>
                  
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}

export default AddContact;