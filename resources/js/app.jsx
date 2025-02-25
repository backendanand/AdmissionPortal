import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './Layouts/Client/Layout';

createInertiaApp({
    title: title => `${title} - Admission Portal`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]
        page.default.layout = page.default.layout || (page => <Layout renderBody={page} />)
        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})