import Layout from "../../components/Layout/Layout";

function Course () {
    return (
        <>
            <Layout>
                <div className="bg-slate-500 min-h-[250px] flex justify-center items-center">
                    <div className="text-4xl text-white">Advanced Diploma in Culinary, Baking & Pastry Arts – 2 Years</div>
                </div>
                <div className="container mx-auto mt-20">
                    <div className="text-black text-center text-2xl">
                        Culinary arts, in which culinary means “related to cooking”, are the cuisine arts of food preparation,
                        cooking, and presentation of food, usually in the form of meals. People working in this field –
                        especially in establishments such as restaurants – are commonly called “chefs” or “cooks”, although,
                        at its most general, the terms “culinary artist” and “culinarian” are also used. Table manners (“the
                        table arts”) are sometimes referred to as a culinary art.
                    </div>
                    <div className="md:flex mt-20 gap-10">
                        <div className="md:w-4/12">
                            <div className="py-5">
                                <div className="text-black text-2xl font-bold">Advanced Diploma in Culinary,<br />
                                    Baking & Pastry Art
                                </div>
                            </div>
                            <div>
                                <img src="./assets/images/details.jpg" alt="details" />
                            </div>
                            <div className="py-5">
                                <div className="text-black text-2xl font-bold">Duration : 2 Year</div>
                                <div className="text-black text-2xl font-bold">Course Fee : 1,80,000tk</div>
                            </div>
                        </div>

                        <div className="md:w-8/12 text-nowrap">
                            <div className="text-slate-500 text-xl leading-8">
                                Kitchen organization Kitchen planning & basic kitchen equipment <br />
                                Costing & portion control Menu planning <br />
                                Cookery methods "theory" Practical & demonstration<br />
                                Maintain Food and Personal Hygiene & Safety in work place<br />
                                Principles of purchasing, storage,<br />
                                Recognize Biological, Physical, Chemical and allergic contaminants.<br />
                                Bakery & Pastry Catering <br />
                                Catering management Catering management<br />
                                Food & Beverage service Food & Beverage service<br />
                                Housekeeping & Laundry operations, Front office <br />
                                Food & Beverage Sales & Marketing <br />
                                Food carving <br />
                                Barista (coffee making art)<br />
                                Analyze dishes, ingredients, hygiene, contaminants, portions, costing, pricing, food cultures etc.<br />
                                Prepare bakery food items like: Apple pie, Bun, Pastry<br />
                                Present food in artistic and eye catching manner<br />
                                Prepare basic dishes that feature in many cuisines throughout the world.<br />
                                Demonstrate their acquire knowledge and skills confidently.<br />
                                Tests & final examination Tests & final examination<br />
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="text-center text-red-500 text-3xl">Training Methods:</div>
                        <div className="card glass mt-10">
                            <div className="card-body">
                                <div className="px-10 text-2xl font-bold text-slate-500"><i className="ph ph-asterisk"></i> Assignment</div>
                                <div className="px-10 text-2xl font-bold text-slate-500"><i className="ph ph-asterisk"></i> Theory lectures</div>
                                <div className="px-10 text-2xl font-bold text-slate-500"><i className="ph ph-asterisk"></i> Practical lectures and demonstration c Group work</div>
                                <div className="px-10 text-2xl font-bold text-slate-500"><i className="ph ph-asterisk"></i> Presentation</div>
                                <div className="px-10 text-2xl font-bold text-slate-500"><i className="ph ph-asterisk"></i> Theory 40% and practical 60% Theory 40% and practical 60%</div>
                                <div className="px-10 text-2xl font-bold text-slate-500"><i className="ph ph-asterisk"></i> Group lectures with Audio Visual Aids</div>
                                <div className="px-10 text-2xl font-bold text-slate-500"><i className="ph ph-asterisk"></i> Group discussion</div>
                                <div className="px-10 text-2xl font-bold text-slate-500"><i className="ph ph-asterisk"></i>Role play</div>
                                <div className="px-10 text-2xl font-bold text-slate-500"><i className="ph ph-asterisk"></i>Demonstration Demonstration</div>
                                <div className="px-10 text-2xl font-bold text-slate-500"><i className="ph ph-asterisk"></i>Practical application sessions</div>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Course;