import DonateSection from "@/components/donationApeal/feedOurWold/donatSection";
import FeedOurWoldBannerSection from "@/components/donationApeal/feedOurWold/feedOurWoldBannerSection";
import FidyaDocSection from "@/components/donationApeal/fidyaORkaffarah/fidyaDocSection";
import FedyaKaffaraBannerSec from "@/components/donationApeal/fidyaORkaffarah/fidyakaffarahBannerSection";
import GhazaUnderTakDocs from "@/components/donationApeal/palestineEmergency/gazaUnderTack";
import PalestinBannerSection from "@/components/donationApeal/palestineEmergency/palestinBannerSection";
import WinterEmergency from "@/components/donationApeal/winterEmergency/winterEmergency";
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
            {/* fidya-or-kaffarah */}
            {myParams === "fidya-or-kaffarah" && <div>
                <FedyaKaffaraBannerSec />
                <FidyaDocSection />
            </div>}
            {/* winter-emergency */}
            {myParams === "winter-emergency" && <div>
                <WinterEmergency />
            </div>}



















        </div>
    );
}