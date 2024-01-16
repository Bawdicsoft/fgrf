// import DonateSection from "@/components/donationApeal/feedOurWold/donatSection";
// import FeedOurWoldBannerSection from "@/components/donationApeal/feedOurWold/feedOurWoldBannerSection";
// import FidyaDocSection from "@/components/donationApeal/fidyaORkaffarah/fidyaDocSection";
// import FedyaKaffaraBannerSec from "@/components/donationApeal/fidyaORkaffarah/fidyakaffarahBannerSection";
// import GhazaUnderTakDocs from "@/components/donationApeal/palestineEmergency/gazaUnderTack";
// import PalestinBannerSection from "@/components/donationApeal/palestineEmergency/palestinBannerSection";
// import WinterEmergency from "@/components/donationApeal/winterEmergency/winterEmergency";
// import YemenAppeal from "@/components/donationApeal/yemenCrisis/YemenApppeal";
// import YemanCrisisBannerSection from "@/components/donationApeal/yemenCrisis/yemenCrisisBannerSection";

import DonateSection from "@/components/newUi/appeal/feedOurWold/donatSection";
import FeedOurWoldBannerSection from "@/components/newUi/appeal/feedOurWold/feedOurWoldBannerSection";
import FidyaDocSection from "@/components/newUi/appeal/fidyaORkaffarah/fidyaDocSection";
import FedyaKaffaraBannerSec from "@/components/newUi/appeal/fidyaORkaffarah/fidyakaffarahBannerSection";
import GhazaUnderTakDocs from "@/components/newUi/appeal/palestineEmergency/gazaUnderTack";
import PalestinBannerSection from "@/components/newUi/appeal/palestineEmergency/palestinBannerSection";
import WinterEmergency from "@/components/newUi/appeal/winterEmergency/winterEmergency";
import YemenAppeal from "@/components/newUi/appeal/yemenCrisis/YemenApppeal";
import YemanCrisisBannerSection from "@/components/newUi/appeal/yemenCrisis/yemenCrisisBannerSection";

export default function donationAppeal({
  params,
}: {
  params: { slug: string };
}) {
  const myParams = params.slug;
  return (
    <div className=" bg-gray-200">
      {/* Palestine Emergency */}
      {myParams === "palestine-emergency" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <PalestinBannerSection />
          <GhazaUnderTakDocs />
        </div>
      )}
      {/* feed-our-world */}
      {myParams === "feed-our-world" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <FeedOurWoldBannerSection />
          <DonateSection />
        </div>
      )}
      {/* Yeman crisis */}
      {myParams === "yemen-crisis" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <YemanCrisisBannerSection />
          <YemenAppeal />
        </div>
      )}
      {/* fidya-or-kaffarah */}
      {myParams === "fidya-or-kaffarah" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <FedyaKaffaraBannerSec />
          <FidyaDocSection />
        </div>
      )}
      {/* winter-emergency */}
      {myParams === "winter-emergency" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <WinterEmergency />
        </div>
      )}
    </div>
  );
}
