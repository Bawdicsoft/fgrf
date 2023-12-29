import DonateSection from "@/components/donationApeal/feedOurWold/donatSection";
import FeedOurWoldBannerSection from "@/components/donationApeal/feedOurWold/feedOurWoldBannerSection";
import GhazaUnderTakDocs from "@/components/donationApeal/palestineEmergency/gazaUnderTack";
import PalestinBannerSection from "@/components/donationApeal/palestineEmergency/palestinBannerSection";
import YemenAppeal from "@/components/donationApeal/yemenCrisis/YemenApppeal";
import YemanCrisisBannerSection from "@/components/donationApeal/yemenCrisis/yemenCrisisBannerSection";

export default function donationAppeal({ params }: { params: { slug: string } }) {
    const myParams = params.slug;
    return (
        <div className="max-w-7xl mx-auto">
            {/* Palestine Emergency */}
            {myParams === "palestine-emergency" && <div>
                <PalestinBannerSection />
                <GhazaUnderTakDocs />
            </div>}
            {/* feed-our-world */}
            {myParams === "feed-our-world" && <div>
                <FeedOurWoldBannerSection />
                <DonateSection />
            </div>}
            {/* Yeman crisis */}
            {myParams === "yemen-crisis" && <div>
                <YemanCrisisBannerSection />
                <YemenAppeal />
            </div>}



















        </div>
    );
}