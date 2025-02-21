import { Head, Link } from '@inertiajs/react'
import avatar from "@/assets/img/avatar-male.png";
import { useState } from 'react';

export default function Edit({ applicant }) {
    console.log(applicant);
    const [profileComplete, setProfileComplete] = useState(false);
    const [appliedForPost, setAppliedForPost] = useState(false);

    return (
        <>
            <Head title="Update Profile"></Head>
            <div className="container my-4">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3">
                        <div className="card p-3 text-center">
                            <img
                                src={avatar}
                                width="100"
                                height="100"
                                alt="Profile"
                                className="rounded-circle mx-auto mb-2"
                            />
                            <h5>{`${applicant.first_name} ${applicant.middle_name ?? ""} ${applicant.last_name}`}</h5>
                            <p className="text-muted">Software Engineer</p>
                        </div>
                        <div>
                            {
                                !profileComplete || !appliedForPost ? (
                                    <ul className="list-group">
                                        <li className={`list-group-item ${profileComplete ? 'text-success' : 'text-danger'}`}>
                                            <Link href="/applicant/profile/edit">
                                                <i className="fas fa-check-circle"></i> Complete your profile
                                            </Link>
                                        </li>
                                        <li className={`list-group-item ${appliedForPost ? 'text-success' : 'text-danger'}`}>
                                            <Link href="/applicant/apply">
                                                <i className="fas fa-check-circle"></i> Apply for a post
                                            </Link>
                                        </li>
                                    </ul>
                                )
                                    :
                                    <></>
                            }

                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-md-9">

                    </div>
                </div>
            </div>
        </>
    )
}
