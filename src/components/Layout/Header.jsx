import Menu from "./Menu";

function Header () {
    return (
        <>
            <header>
                <div className="container mx-auto px-5">
                    <div className="header-top md:flex items-center border-b">
                        <div className="md:w-3/12">
                            <img src="./assets/images/logo.png" alt="logo" />
                        </div>

                        <div className="md:w-9/12">
                            <div className="flex flex-wrap py-5 gap-10 justify-end">
                                <div className="flex gap-3">
                                    <div className="text-red-500 text-4xl pt-2">
                                        <i className="ph ph-map-pin"></i>
                                    </div>
                                    <div>
                                        <div className="font-bold">Email</div>
                                        <div>info@example.com</div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="text-red-500 text-4xl pt-2">
                                        <i className="ph ph-phone"></i>
                                    </div>
                                    <div>
                                        <div className="font-bold">Call Us</div>
                                        <div>+880 1712168190</div>
                                    </div>
                                </div>

                                <div>
                                    <button className="text-white btn btn-error text-xl">Admission</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Menu />
                </div>
            </header>
        </>
    )
}

 export default Header;