import React from 'react'

export default function Footer() {
    return (
        <footer class="bg-dark text-white py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    </div>
                    <div class="col-md-4">
                        <h5>Quick Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-white text-decoration-none">Home</a></li>
                            <li><a href="#" class="text-white text-decoration-none">About</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Services</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: contact@example.com</p>
                        <p>Phone: +123 456 7890</p>
                        <p>Address: 123 Street, City, Country</p>
                    </div>
                </div>
                <hr class="border-light" />
                <div class="text-center">
                    <p class="mb-0">© 2025 Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
