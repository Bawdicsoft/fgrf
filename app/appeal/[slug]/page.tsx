// import DonateSection from "@/components/donationApeal/feedOurWold/donatSection";
// import FeedOurWoldBannerSection from "@/components/donationApeal/feedOurWold/feedOurWoldBannerSection";
// import FidyaDocSection from "@/components/donationApeal/fidyaORkaffarah/fidyaDocSection";
// import FedyaKaffaraBannerSec from "@/components/donationApeal/fidyaORkaffarah/fidyakaffarahBannerSection";
// import GhazaUnderTakDocs from "@/components/donationApeal/palestineEmergency/gazaUnderTack";
// import PalestinBannerSection from "@/components/donationApeal/palestineEmergency/palestinBannerSection";
// import WinterEmergency from "@/components/donationApeal/winterEmergency/winterEmergency";
// import YemenAppeal from "@/components/donationApeal/yemenCrisis/YemenApppeal";
// import YemanCrisisBannerSection from "@/components/donationApeal/yemenCrisis/yemenCrisisBannerSection";

import DonateSection from "@/components/newUi/appeal/foodBox/donatSection";
import FeedOurWoldBannerSection from "@/components/newUi/appeal/foodBox/foodBoxBannerSection";
import FidyaDocSection from "@/components/newUi/appeal/fidyaORkaffarah/fidyaDocSection";
import FedyaKaffaraBannerSec from "@/components/newUi/appeal/fidyaORkaffarah/fidyakaffarahBannerSection";
import HandPumpBannerSection from "@/components/newUi/appeal/handPump/handPumpBanner";
import HandPumpDocs from "@/components/newUi/appeal/handPump/handPumpDoc";
import MasjidBannerSection from "@/components/newUi/appeal/masjid/masjidBanner";
import MasjidDocs from "@/components/newUi/appeal/masjid/masjidDoc";
import OrphanBannerSection from "@/components/newUi/appeal/orphan/orphanBanner";
import OrphanDocs from "@/components/newUi/appeal/orphan/orphanDoc";
import GhazaUnderTakDocs from "@/components/newUi/appeal/palestineEmergency/gazaUnderTack";
import PalestinBannerSection from "@/components/newUi/appeal/palestineEmergency/palestinBannerSection";
import WinterEmergency from "@/components/newUi/appeal/winterEmergency/winterEmergency";
import YemenAppeal from "@/components/newUi/appeal/yemenCrisis/YemenApppeal";
import YemanCrisisBannerSection from "@/components/newUi/appeal/yemenCrisis/yemenCrisisBannerSection";
import FoodBoxBannerSection from "@/components/newUi/appeal/foodBox/foodBoxBannerSection";
import SadaqahBannerSection from "@/components/newUi/appeal/sadaqah/sadaqahBanner";
import SadaqahDocs from "@/components/newUi/appeal/sadaqah/sadaqahDoc";
import WaterWellBannerSection from "@/components/newUi/appeal/waterWell/waterWellBanner";
import WaterWellDocs from "@/components/newUi/appeal/waterWell/waterWellDoc";
import ZakatBannerSection from "@/components/newUi/appeal/zakat/zakatBanner";
import ZakatDocs from "@/components/newUi/appeal/zakat/zakatlDoc";
import RamadanBannerSection from "@/components/newUi/appeal/ramadan/ramdanBanner";
import RamadanDocs from "@/components/newUi/appeal/ramadan/ramdanlDoc";

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
      {myParams === "food-box" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <FoodBoxBannerSection />
          <DonateSection />
        </div>
      )}

      {/* Yeman crisis */}
      {/* {myParams === "yemen-crisis" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <YemanCrisisBannerSection />
          <YemenAppeal />
        </div>
      )} */}

      {/* fidya-or-kaffarah */}
      {/* {myParams === "fidya-or-kaffarah" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <FedyaKaffaraBannerSec />
          <FidyaDocSection />
        </div>
      )} */}

      {/* winter-emergency */}
      {myParams === "winter-emergency" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <WinterEmergency />
        </div>
      )}
      {/* Masjid Build */}
      {myParams === "masjid-project" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <MasjidBannerSection />
          <MasjidDocs />
        </div>
      )}
      {/* Hand Pump Project */}
      {myParams === "hand-pump-project" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <HandPumpBannerSection />
          <HandPumpDocs />
        </div>
      )}
      {/* Orphan */}
      {myParams === "orphan" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <OrphanBannerSection />
          <OrphanDocs />
        </div>
      )}
      {/* Sadaqah */}
      {myParams === "sadaqah" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <SadaqahBannerSection />
          <SadaqahDocs />
        </div>
      )}
      {/* water-well-project */}
      {myParams === "water-well-project" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <WaterWellBannerSection />
          <WaterWellDocs />
        </div>
      )}
      {/* Zakat */}
      {myParams === "zakat" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <ZakatBannerSection />
          <ZakatDocs />
        </div>
      )}
      {/* Zakat */}
      {myParams === "ramadan" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <RamadanBannerSection />
          <RamadanDocs />
        </div>
      )}
    </div>
  );
}
