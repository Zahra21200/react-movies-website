import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login(props) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        showPassword: false
    });

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setErrors({
                ...errors,
                emailError: value.length === 0 ? "Email is required" : !emailRegex.test(value) && "Invalid email format"
            });
        }

        if (name === "password") {
            setErrors({
                ...errors,
                passwordError: value.length < 8 ? "Password must be at least 8 characters long" : ""
            });
        }
    };

    const PasswordVisibility = () => {
        setFormData({
            ...formData,
            showPassword: !formData.showPassword
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push("/")
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter Your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.emailError} />
                <Form.Control.Feedback type="invalid">{errors.emailError}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type={formData.showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.passwordError} />
                    <Form.Control.Feedback type="invalid">{errors.passwordError}</Form.Control.Feedback>
                    <Form.Text className="text-muted">
                            <Button variant="link" onClick={PasswordVisibility}>
                                {formData.showPassword ? "Hide" : "Show"} Password
                            </Button>
                        </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Login;