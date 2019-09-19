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
                <div className="container section">
                    <div class="row">
                    <div className="col l6 m6 s12 center hide-on-large-only hide-on-med-only show-on-small">
                            <Info2 />
                        </div>
                        <form class="col l6 m6 s12 white lighten-1">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="date" type="date" class="validate" />
                                    <label>Fecha de ingreso</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="history" type="text" class="validate" />
                                    <label for="history">Historia Clínica</label>
                                </div>
                                <div className="input-field col s12">
                                    <select class="browser-default grey-text" >
                                        <option  disabled selected value="">Aseguradora</option>
                                        <option value="1">ARL SURA</option>
                                        <option value="2">COOMEVA</option>
                                        <option value="3">COLPENSIONES</option>
                                    </select>
                                </div>
                                <div className="input-field col s12">
                                    <select class="browser-default grey-text">
                                        <option disabled selected value="">Tipo de vinculación</option>
                                        <option value="1">Beneficiario</option>
                                        <option value="2">Contribuyente</option>
                                    </select>
                                </div>
                                <div class="input-field col s12">
                                    <input id="first_name" type="text" class="validate" />
                                    <label for="first_name">Nombre</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="last_name" type="text" class="validate" />
                                    <label for="last_name">Apellido</label>
                                </div>
                            </div>
                            <div className="margin-bottom">
                                <div className="col s6">
                                    <a href="/" class="col-content black-text">Cancelar</a>
                                </div>
                                <div className="col s6">
                                    <a class="waves-effect waves-light btn col-content right align green darken-4">Siguiente</a>
                                </div>
                            </div>
                        </form>
                        <div className="col l6 m6 s12 hide-on-small-only">
                            <Info2 />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Form2;
