import React from "react";
import Info2 from "./info2Component";
import axios from "axios";

class Form2 extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            date: "",
            clinic_history: "",
            insurance: "",
            insurance_type: "",
            first_name: "",
            last_name: ""
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("entre al SUBMIT!!!")
        axios.post("https://indeportes-api.now.sh/api/athletes", this.state.form)
            .then(athlete => this.setState({
                loading: false
            })
            )
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error
                });
            });
    };

    render() {
        return (
            <React.Fragment>
                <div class="row">
                    <form class="col s6">
                        <div class="row">
                            <div class="input-field col s6">
                                <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
                                <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate" />
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input disabled value="I am not editable" id="disabled" type="text" class="validate" />
                                <label for="disabled">Disabled</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12">
                                This is an inline input field:
          <div class="input-field inline">
                                    <input id="email_inline" type="email" class="validate" />
                                    <label for="email_inline">Email</label>
                                    <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="pl-5 col-md-6 order-lg-2 order-md-2 order-sm-1 order-1">
                    <Info2 />
                </div>
            </React.Fragment>
        );
    }
}

export default Form2;
