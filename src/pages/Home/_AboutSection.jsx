function AboutSection () {
    return (
        <>
            <div className="container mx-auto mt-20">
                <div className="md:flex gap-16">
                    <div className="md:w-1/2">
                        <img className="rounded-xl w-full" src="./assets/images/7-1.png" alt="chef" />
                    </div>

                    <div className="md:w-1/2">
                        <div className="text-4xl text-red-500 py-10">About Us</div>
                        <div className="text-5xl">WHO WE ARE</div>
                        <div className="text-2xl py-2">
                            Bangladesh Hotel Management & Tourism Training Institute (BHMTTI),
                            established in 1990, is the first and oldest leading private Government approved institute in Bangladesh.
                            We are the only private institute to be approved by the Ministry of Civil Aviation & Tourism,
                            Government of the People’s Republic of Bangladesh.
                        </div><br /><br /><br />

                        <div className="text-2xl py-2">
                            We are a Registered Training Organization (RTO) of Bangladesh
                            Technical Education Board (BTEB) and Partner Organization of Skills for
                            Employment Investment Program (SEIP) of Ministry of Finance,
                            the People’s Republic of Bangladesh for Tourism & Hospitality Training.
                            We are also an approved center of world-renowned Qualification Provider City & Guilds, UK.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutSection;