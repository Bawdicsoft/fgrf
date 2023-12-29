import Image from "next/image"
import Link from "next/link"

const YemenAppeal = () => {
    return (<div className="py-10 md:py-16 px-5 md:px-10 max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-teal-500 font-bold text-xl md:text-3xl lg:text-4xl text-center">Yemen Appeal</h2>
            <p className="text-base text-center pt-8 py-3">Donate to help Yemen: we need urgent support from everyone reading this, right now.</p>
            <p className="text-base text-center py-3">Since 2014, Yemen has been in the middle of the worlds worst humanitarian crisis, battling a crippling civil war, famine and disease outbreaks. Millions of people are starving, and there is virtually no healthcare system.</p>
            <p className="text-base text-center py-3">According to some reports, Yemen only has 10 health workers per 10,000 people and nearly a quarter of districts throughout the country have no doctors.</p>
            <p className="text-base text-center py-3">The UN warns that the coronavirus pandemic could delete Yemen from maps all over the world. Due to the pandemic, the UK government has cut relief funding for Yemen by 60%. Without these funds, Yemeni lives will be lost. We cannot let that happen</p>
            <p className="text-base text-center py-3">Penny Appeal are on the ground in Yemen, delivering food, water and hygiene kits to crisis-affected areas and IDP camps, as well as PPE and Covid-19 Testing kits to hospitals.</p>
            <div className="flex justify-center items-center py-8">
                <Link href={"/"} className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg">DONATE NOW</Link>
            </div>
        </div>
        {/* Donate to Save Live in Yemen */}
        <div className="pt-16 grid grid-cols-1">
            <h2 className="text-teal-500 font-bold text-xl md:text-3xl lg:text-4xl text-center pb-6">Donate to Save Live in Yemen</h2>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EK8MjR8u_7w" title="Yemen Emergency - Donate Now!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        {/* Give a Gift that Grows */}
        {/* <div className="pt-16">
            <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center pb-4">Give a Gift that Grows</h2>
            <Image src={"/donation/feedOurWorld/feildworking.jpeg"} alt="" width={700} height={700} className="h-full w-full" />
            <p className="text-base text-center pt-8 py-3">Change the lives of entire communities for generations to come by providing support through one of our sustainable food projects. Although we feed the hungry by providing meals and food packs in order to help relieve the immediate hunger, ultimately Penny Appeal's objective is to establish long-term, sustainable food projects that reduce the dependency of hunger-struck countries on immediate food aid.</p>
            <p className="text-base text-center py-3">Our sustainable food projects include training sessions on growing a variety of crops, allocating responsibilities for growing and procuring vegetables, and selling the produce in local markets; all part of the means to improve the long-term health and economic security of thousands of families.</p>
        </div> */}

    </div>)
}
export default YemenAppeal