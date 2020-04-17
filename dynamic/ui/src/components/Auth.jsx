import React from 'react';
import {Link, Redirect } from "react-router-dom";
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
} from "react-reactive-form";
import {putDataFromServer, redirectToMainPage, unauthenticated} from "../store/auth/actions";
import {
    Submit,
    GlobalBodyStyle,
    GlobalDocumentStyle,
    Container,
    FormInput,
    Form,
    ModernCheckbox
} from "./StyledComponents";
import '../index.css';

const Input = ({ handler, touched, hasError, meta}) => (
    <div>
        <label htmlFor={`${meta.name}`}><b>{meta.label}</b></label>
        <input type={`${meta.type}`} placeholder={`Enter ${meta.label}`} name={`${meta.name}`} {...handler()}/>
        <span>{touched && hasError("required") && `${meta.label} is required`}</span>
    </div>
);
export default class Registration extends React.Component {
    loginForm = FormBuilder.group({
        login: ["", Validators.required],
        password: ["", Validators.required],
        rememberMe: false
    });

    handleSubmit=(e) => {
        e.preventDefault();
        console.log("Form values", this.loginForm.value);
        this.props.loadDataToRequest(this.loginForm.value, this.props.ws);
    };
    render() {
        if (this.props.redirect) {
            return <Redirect to={this.props.redirect} />
        }
        return (
            <FieldGroup
                control={this.loginForm}
                render={({ get, invalid }) => (
                    <Form id="SignIn" onSubmit={this.handleSubmit}>
                        <Container>
                            <GlobalBodyStyle/>
                            <GlobalDocumentStyle/>
                        <h1>LOGIN</h1>
                        <p>Please fill in this form to Login.</p>
                        <hr/>
                            <FieldControl
                                name="login"
                                render={Input}
                                meta={{ label: "Login", name: "login", type: "text"}}
                            />

                            <FieldControl
                                name="password"
                                render={Input}
                                meta={{ label: "Password", name: "password", type: "password" }}
                            />

                            <FieldControl
                                name="rememberMe"
                                render={({handler}) => (
                                    <div>

                                        <ModernCheckbox id="checkbox" name="rememberMe" style={{width: 'auto', margin: '1vw'}}{...handler("checkbox")}/>
                                        <label htmlFor="checkbox"><span className="ui"></span><b>Remember me</b></label>
                                    </div>
                                )}
                            />
                        </Container>
                        <Submit type="submit" disabled={invalid} onClick={this.onSubmit}>
                            Login</Submit>
                        <Container wayToAlternativeForm>
                            <p>Create an account? <Link to="/signUp">Sign Up</Link></p>
                        </Container>
                    </Form>
                )}
            />
        );
    }
}
