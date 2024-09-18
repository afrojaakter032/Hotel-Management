import Layout from "../../components/Layout/Layout";

function Contact () {
    return (
        <>
            <Layout>
                <div className="bg-slate-500 min-h-[250px] flex justify-center items-center">
                    <div className="text-4xl text-white">Contact Us</div>
                </div>
                <div className="container mt-16 mx-auto">
                    <div className="md:flex gap-10 mb-20">
                        <div className="md:w-4/12">
                            <div className="card glass">
                                <div className="card-body">
                                    <div className="text-red-500 text-4xl text-center"><i class="ph ph-phone"></i></div>
                                    <div className="text-black font-bold text-2xl text-center">Call Us</div>
                                    <div className="text-center">+880 1712 168 190</div>
                                    <div className="text-center">+880 1712 168 190</div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-4/12">
                            <div className="card glass">
                                <div className="card-body">
                                    <div className="text-red-500 text-4xl text-center"><i class="ph ph-map-pin"></i></div>
                                    <div className="text-black font-bold text-2xl text-center">Address</div>
                                    <div className="text-center">147/D, Green Road (3rd & 4th Floor),</div>
                                    <div className="text-center">Dhaka-1207, Bangladesh</div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-4/12">
                            <div className="card glass">
                                <div className="card-body">
                                    <div className="text-red-500 text-4xl text-center"><i class="ph ph-envelope"></i></div>
                                    <div className="text-black font-bold text-2xl text-center">Mail Us</div>
                                    <div className="text-center">bhmtti@gmail.com</div>
                                    <div className="text-center">info@hotelmanagementbd.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="md:w-1/2 bg-black rounded-l-lg py-12">
                            <div className="py-12 px-20">
                                <div className="text-white text-5xl">Become a client</div><br />
                                <div className="text-white text-4xl">Do you have any</div>
                                <div className="text-white text-4xl">questions? Talk to our</div>
                                <div className="text-white text-4xl">analysts</div>
                            </div>

                            <div className="md:flex px-20 gap-4 w-full">
                                <label className="input input-bordered flex items-center gap-2 w-full mb-3">
                                    <input type="text" className="grow" placeholder="Your Name" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 w-full">
                                    <input type="email" className="grow" placeholder="Your Email" />
                                </label>
                            </div>

                            <div className="md:flex px-20 gap-4 pt-6">
                                <label className="input input-bordered flex items-center gap-2 w-full mb-3">
                                    <input type="number" className="grow" placeholder="Your Phone" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 w-full">
                                    <input type="text" className="grow" placeholder="Your Subject" />
                                </label>
                            </div>
                            <div className="px-20 pt-6">
                                <textarea className="textarea w-full" placeholder="Message"></textarea>
                            </div>
                            <div className="px-20 pt-6">
                                <button className="btn text-xl">Send Message</button>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <img src="./assets/images/chef.jpg" className="rounded-r-lg h-full" alt="chef" />
                        </div>
                    </div>
                    <div className="mt-16">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.6658000920997!2d90.4081568674456!3d23.795004848386917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7adebbab3b7%3A0x1a4648e7d9414ad8!2sPearl%20Hotel!5e0!3m2!1sen!2sbd!4v1709559441769!5m2!1sen!2sbd"
                        width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>



                </div>


            </Layout>
        </>
    )
}

export default Contact;