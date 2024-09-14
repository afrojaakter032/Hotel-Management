function Footer () {
    return (
        <>
            <div className="bg-slate-950 mt-32">
                <div className="container mx-auto px-5">
                    <div className="md:flex py-10">
                        <div className="md:w-1/2">
                            <div>
                                <div className="text-white text-2xl">ABOUT OUR COMPANY</div>
                                <div className="flex py-4 gap-2">
                                    <a className="text-3xl btn btn-circle text-red-500 flex justify-center align-middle" href="#"><i class="ph ph-facebook-logo"></i></a>
                                    <a className="text-3xl btn btn-circle text-red-500 flex justify-center align-middle" href="#"><i class="ph ph-instagram-logo"></i></a>
                                    <a className="text-3xl btn btn-circle text-red-500 flex justify-center align-middle" href="#"><i class="ph ph-linkedin-logo"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div>
                                <div className="text-white text-2xl">CONTACT US</div>
                                <div className="flex gap-2 py-5">
                                    <div><i className="ph ph-clock text-red-500 text-2xl pt-1"></i> </div>
                                    <div className="text-slate-300 text-xl">10.00 AM - 6.00 PM, Saturday- Thursday</div>
                                </div>
                                <div className="flex gap-2">
                                    <div><i className="ph ph-map-pin text-red-500 text-2xl pt-1"></i> </div>
                                    <div className="text-slate-300 text-xl">147/D, Green Road (3rd Floor), Dhaka-1207 (North side of Panthapath Traffic Signal)</div>
                                </div>
                                <div className="flex gap-2 py-5">
                                    <div><i className="ph ph-phone text-red-500 text-2xl pt-1"></i> </div>
                                    <div className="text-slate-300 text-xl">0171245698</div>
                                </div>
                                <div className="flex gap-2">
                                    <div><i className="ph ph-envelope-simple text-red-500 text-2xl pt-1"></i> </div>
                                    <div className="text-slate-300 text-xl">Info@hotelmanagementbd.com</div>
                                </div>
                            </div>
                            <a className="btn btn-error text-white text-xl mt-3">CALL US TODAY</a>
                        </div>
                    </div>
                    <div className="border-b border-b-slate-700"></div>
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <div className="md:flex gap-10">
                                <img className="w-72 py-10" src="./assets/images/logo.png" alt="car" />
                                <div className="mt-12 text-slate-300">Education & Online Course design by hotelmanagementbd</div>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-12">
                            <div className="flex justify-end  text-slate-300">Copyright © 2023. All rights reserved.</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;