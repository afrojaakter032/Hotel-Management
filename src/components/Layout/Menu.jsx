import { Link } from "react-router-dom";

function Menu () {
    return (
        <>
            <div className="md:flex">
                <div className="md:w-8/12">
                    {/* mobile menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-3xl"><i className="ph ph-list"></i></div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <details open>
                                    <summary>About</summary>
                                    <ul>
                                        <li><a>Management Team</a></li>
                                        <li><a>Trainer List</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Course Details</a></li>
                            <li><a>Verification</a></li>
                            <li><a>Success Stories</a></li>
                            <li><a>Gallery</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    {/* desktop menu */}
                    <ul className="menu hidden lg:menu-horizontal  gap-5">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <details open>
                                <summary>About</summary>
                                <ul className="z-[9999]">
                                    <li><a>Management Team</a></li>
                                    <li><a>Trainer List</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Course Details</a></li>
                        <li><a>Verification</a></li>
                        <li><a>Success Stories</a></li>
                        <li><a>Gallery</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="md:w-4/12">
                    <div className="flex gap-4 justify-center items-center pt-4">
                        <a href="#" className="text-red-500 text-3xl"><i className="ph ph-facebook-logo"></i></a>
                        <a href="#" className="text-red-500 text-3xl"><i className="ph ph-instagram-logo"></i></a>
                        <a href="#" className="text-red-500 text-3xl"><i className="ph ph-linkedin-logo"></i></a>
                        <div>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-80 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;
