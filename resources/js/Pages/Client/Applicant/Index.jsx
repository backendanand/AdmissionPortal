import React from 'react'
import { useForm, Link } from '@inertiajs/react'

function Index() {
    const { data, setData, post, processing, errors } = useForm({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        phone: "",
        date_of_birth: "",
        gender: "",
        address: "",
        state: "",
        city: "",
        pincode: "",
        country: "",
        photo: null,
        institute_10th: "",
        percentage_10th: "",
        year_of_passing_10th: "",
        board_10th: "",
        institute_12th: "",
        percentage_12th: "",
        year_of_passing_12th: "",
        board_12th: "",
        institute_graduation: "",
        percentage_graduation: "",
        year_of_passing_graduation: "",
        board_graduation: "",
        institute_post_graduation: "",
        percentage_post_graduation: "",
        year_of_passing_post_graduation: "",
        board_post_graduation: "",
    });

    function handleSubmit(e) {
        e.preventDefault()
        post('/apply')
    }

    function handleChange(e) {
        setData(e.target.name, e.target.type === 'file' ? e.target.files[0] : e.target.value)
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Applicant Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-4">
                        <label className="form-label">First Name</label>
                        <input type="text" name="first_name" className="form-control" value={data.first_name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Middle Name</label>
                        <input type="text" name="middle_name" className="form-control" value={data.middle_name} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Last Name</label>
                        <input type="text" name="last_name" className="form-control" value={data.last_name} onChange={handleChange} required />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" value={data.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Phone</label>
                        <input type="text" name="phone" className="form-control" value={data.phone} onChange={handleChange} required />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4">
                        <label className="form-label">Date of Birth</label>
                        <input type="date" name="date_of_birth" className="form-control" value={data.date_of_birth} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Gender</label>
                        <select name="gender" className="form-control" value={data.gender} onChange={handleChange} required>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Photo</label>
                        <input type="file" name="photo" className="form-control" onChange={handleChange} />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12">
                        <label className="form-label">Address</label>
                        <input type="text" name="address" className="form-control" value={data.address} onChange={handleChange} required />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4">
                        <label className="form-label">State</label>
                        <input type="text" name="state" className="form-control" value={data.state} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">City</label>
                        <input type="text" name="city" className="form-control" value={data.city} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Pincode</label>
                        <input type="text" name="pincode" className="form-control" value={data.pincode} onChange={handleChange} required />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12">
                        <label className="form-label">Country</label>
                        <input type="text" name="country" className="form-control" value={data.country} onChange={handleChange} required />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-4" disabled={processing}>Submit</button>
            </form>
        </div>
    )
}

export default Index