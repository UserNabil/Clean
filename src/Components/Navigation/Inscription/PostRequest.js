import React from 'react';
import axios from 'axios';

export default class PostRequest extends React.Component {
    state = {
        name: '',
        firstname: '',
        mail: '',
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    }
    handleChangeFirstName = event => {
        this.setState({ firstname: event.target.value });
    }
    handleChangeMail = event => {
        this.setState({ mail: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            firstname: this.state.firstname,
            mail: this.state.mail,
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="user-box">
                        <input type="text" required="" onChange={this.handleChangeName} />
                        <label>Nom</label>
                    </div>
                    <div className="user-box">
                        <input type="text" required="" onChange={this.handleChangeFirstName} />
                        <label>Prénom</label>
                    </div>
                    <div className="user-box">
                        <input type="mail" required="" onChange={this.handleChangeMail} />
                        <label>E-mail</label><br />
                    </div>
                    <button type='submit'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span><br />
                        V A L I D E R
                    </button>
                </form>
            </div>
        )
    }
}