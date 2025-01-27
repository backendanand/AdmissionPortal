import React from 'react'
import AdminLayout from '../../../Layouts/Admin/AdminLayout'

function Index({ courses }) {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <h1>Course</h1>
                    <div className='card card-body'>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">SNo</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Fees</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        courses.map((course, index) => {
                                            return (
                                                <tr>
                                                    <th>{index + 1}</th>
                                                    <td>{course.name}</td>
                                                    <td>{course.duration}</td>
                                                    <td>${course.fees}</td>
                                                    <td></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Index.layout = page => <AdminLayout children={page} />

export default Index