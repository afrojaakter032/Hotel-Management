function CourseSection () {
    return (
        <>
            <div className="container mx-auto mt-16">
                <div className="text-center">
                    <div className="text-red-500 text-2xl py-2">Popular Courses</div>
                    <div className="text-5xl text-yellow-600 py-2">OUR ACADEMIC PROGRAMME</div>
                    <div className="text-red-500 text-2xl py-2">BANGLADESH HOTEL MANAGEMENT & TOURISM TRAINING INSTITUTE</div>
                </div>
                <div className="md:flex mt-16 gap-10">
                    <div className="md:w-4/12">
                        <div className="card glass">
                            <figure>
                                <img
                                src="./assets/images/card1.png"
                                alt="car!" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-red-500">FOOD & BEVERAGE SERVICE</h2>
                                <div className="flex gap-4 justify-center align-middle mt-1">
                                    <div>
                                        <div className="text-xl"><i class="ph ph-clock"></i> 04/06 MONTHS</div>
                                    </div>
                                    <div>
                                        <div className="text-xl"><i class="ph ph-graduation-cap"></i> Certification</div>
                                    </div>
                                </div>
                                <div className="card-actions justify-center mt-2">
                                    <button className="btn btn-error text-white text-xl">Course Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-4/12">
                        <div className="card glass">
                            <figure>
                                <img
                                src="./assets/images/card1.png"
                                alt="car!" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-red-500">FOOD & BEVERAGE PRODUCTION (COOKING)</h2>
                                <div className="flex gap-4 justify-center align-middle mt-1">
                                    <div>
                                        <div className="text-xl"><i class="ph ph-clock"></i> 04/06 MONTHS</div>
                                    </div>
                                    <div>
                                        <div className="text-xl"><i class="ph ph-graduation-cap"></i> Certification</div>
                                    </div>
                                </div>
                                <div className="card-actions justify-center mt-2">
                                    <button className="btn btn-error text-white text-xl">Course Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-4/12">
                        <div className="card glass">
                            <figure>
                                <img
                                src="./assets/images/card1.png"
                                alt="car!" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-red-500">FRONT OFFICE MANAGEMENT</h2>
                                <div className="flex gap-4 justify-center align-middle mt-1">
                                    <div>
                                        <div className="text-xl"><i class="ph ph-clock"></i> 04/06 MONTHS</div>
                                    </div>
                                    <div>
                                        <div className="text-xl"><i class="ph ph-graduation-cap"></i> Certification</div>
                                    </div>
                                </div>
                                <div className="card-actions justify-center mt-2">
                                    <button className="btn btn-error text-white text-xl">Course Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseSection;