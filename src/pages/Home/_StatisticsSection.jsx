function StatisticsSection () {
    return (
        <>
            <div className="bg-slate-500 mt-16 px-5">
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                        <div className="py-5">
                            <div className="text-center">
                                <div className="text-red-500 text-7xl pb-2"><i class="ph ph-package"></i></div>
                                <div className="text-4xl text-white font-bold">15 +</div>
                                <div className="text-slate-300 text-xl">Courses</div>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className="text-center">
                                <div className="text-red-500 text-7xl pb-2"><i class="ph ph-smiley"></i></div>
                                <div className="text-4xl text-white font-bold">10,000 +</div>
                                <div className="text-slate-300 text-xl">Happy Students</div>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className="text-center">
                                <div className="text-red-500 text-7xl pb-2"><i class="ph ph-chalkboard-teacher"></i></div>
                                <div className="text-4xl text-white font-bold">25 +</div>
                                <div className="text-slate-300 text-xl">Certified Teachers</div>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className="text-center">
                                <div className="text-red-500 text-7xl pb-2"><i class="ph ph-mask-happy"></i></div>
                                <div className="text-4xl text-white font-bold">250 +</div>
                                <div className="text-slate-300 text-xl">Happy Clients</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default StatisticsSection;