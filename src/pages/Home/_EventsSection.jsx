function EventSection () {
    return (
        <>
            <div className="container mx-auto mt-32 px-5">
                <div className="text-center">
                    <div className="text-3xl text-red-500 py-3">EVENTS</div>
                    <div className="text-xl">Our recent events and upcoming events.</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-10">
                    <div>
                        <div className="card glass">
                            <figure>
                                <img className="w-full"
                                src="./assets/images/event.jpg"
                                alt="car!" />
                            </figure>
                            <div className="card-body">
                                <a href="#" className="card-title text-red-500">Much waited SEIP (Skill for Employment investment Program)</a>
                                <div className="card-actions justify-end mt-2">
                                    <div>9/9/2024</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card glass">
                            <figure>
                                <img className="w-full"
                                src="./assets/images/event.jpg"
                                alt="car!" />
                            </figure>
                            <div className="card-body">
                                <a href="#" className="card-title text-red-500">Much waited SEIP (Skill for Employment investment Program)</a>
                                <div className="card-actions justify-end mt-2">
                                    <div>9/9/2024</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card glass">
                            <figure>
                                <img className="w-full"
                                src="./assets/images/event.jpg"
                                alt="car!" />
                            </figure>
                            <div className="card-body">
                                <a href="#" className="card-title text-red-500">Much waited SEIP (Skill for Employment investment Program)</a>
                                <div className="card-actions justify-end mt-2">
                                    <div>9/9/2024</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventSection;