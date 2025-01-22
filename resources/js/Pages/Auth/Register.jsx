import React, { useState } from 'react'
import { router } from '@inertiajs/react'

export default function Register() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/auth/register', values)
    }
    return (
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header bg-primary text-white text-center">
                            <h4>Register</h4>
                        </div>
                        <div class="card-body">
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="fullName" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="name" value={values.name} onChange={handleChange} placeholder="Enter your full name" required />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="email" value={values.email} onChange={handleChange} placeholder="Enter your email" required />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" value={values.password} onChange={handleChange} placeholder="Enter your password" required />
                                </div>
                                <div class="mb-3">
                                    <label for="confirmPassword" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" id="password_confirmation" value={values.password_confirmation} onChange={handleChange} placeholder="Confirm your password" required />
                                </div>
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer text-center">
                            <small>Already have an account? <a href="#" class="text-primary">Login</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
