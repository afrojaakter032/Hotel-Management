function ServiceSection () {
    return (
        <>
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-5">
                    <div>
                        <div className="card bg-base-100 border-b-4 border-b-red-500 border shadow-xl py-5">
                            <div className="card-body">
                                <div className="text-center">
                                    <div className="text-red-500 text-4xl"><i className="ph ph-user"></i></div>
                                    <div className="text-2xl">Professional Builde</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card bg-base-100 border-b-4  border-b-red-500 border shadow-xl py-5">
                            <div className="card-body">
                                <div className="text-center">
                                    <div className="text-red-500 text-4xl"><i className="ph ph-user"></i></div>
                                    <div className="text-2xl">We Deliver Quality</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card bg-base-100 border-b-4  border-b-red-500 border shadow-xl py-5">
                            <div className="card-body">
                                <div className="text-center">
                                    <div className="text-red-500 text-4xl"><i className="ph ph-presentation-chart"></i></div>
                                    <div className="text-2xl">Always On Time</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card bg-base-100 border-b-4  border-b-red-500 border shadow-xl py-5">
                            <div className="card-body">
                                <div className="text-center">
                                    <div className="text-red-500 text-4xl"><i className="ph ph-headset"></i></div>
                                    <div className="text-2xl">We Are Pasionate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSection;