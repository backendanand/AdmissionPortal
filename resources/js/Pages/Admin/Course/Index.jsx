import React from 'react'
import AdminLayout from '../../../Layouts/Admin/AdminLayout'
import { Head, Link } from '@inertiajs/react';

function Index({ courses }) {
    return (
        <>
            <Head title='Courses'></Head>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h1>Courses</h1>
                            <Link href='/admin/courses/create' className='btn btn-primary'>Create</Link>
                        </div>
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
                                            courses.data.map((course, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th>{index + 1}</th>
                                                        <td>{course.name}</td>
                                                        <td>{course.duration}</td>
                                                        <td>${course.fees}</td>
                                                        <td>
                                                            <Link className='btn btn-info btn-sm' href={`/admin/courses/${course.id}/edit`}>Edit</Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <div>
                                    {
                                        courses.links.map((link, index) => {
                                            return (
                                                <Link
                                                    key={index}
                                                    href={link.url}
                                                    className={`btn ${link.active ? 'btn-primary' : 'btn-light'}`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Index.layout = page => <AdminLayout children={page} />

export default Index