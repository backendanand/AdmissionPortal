import React from 'react'
import Navbar from '../../Components/Admin/Navbar'
import Footer from '../../Components/Admin/Footer'
import { usePage } from '@inertiajs/react'

export default function AdminLayout({ children }) {
    const { flash } = usePage().props
    return (
        <>
            <Navbar />

            {flash.success && (
                <div class="alert alert-success" role="alert">
                    {flash.success}
                </div>
            )}

            {flash.error && (
                <div class="alert alert-error" role="alert">
                    {flash.error}
                </div>
            )}

            {children}

            <Footer />
        </>
    )
}
