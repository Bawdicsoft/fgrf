import FoodBoxDonation from "@/components/newUi/donationComponent/foodBoxDonation/foodBoxDonation";
import HandPumpDonation from "@/components/newUi/donationComponent/handPumpDonation/handPumpDonation";
import IftarDonation from "@/components/newUi/donationComponent/iftarDonation/iftarDonation";
import MasjidDonation from "@/components/newUi/donationComponent/masjidDonation/masjidDonation";
import OrphanDonation from "@/components/newUi/donationComponent/orphanDonation/orphanDonation";
import PalestineDonation from "@/components/newUi/donationComponent/palestine/palestineDonation";
import WaterWellDonation from "@/components/newUi/donationComponent/waterWellDonation/waterWellDonation";
import WinterDonation from "@/components/newUi/donationComponent/winterEmergency/winterEmergencyDonation";
import ZakatDonation from "@/components/newUi/donationComponent/zakatDonation/zakatDonation";

const Donation = ({ params }: { params: { slug: string } }) => {
  const donation = params.slug;
  return (
    <div>
      {/* iftar */}
      {donation === "iftar-donation" && (
        <div className="bg-gray-200">
          <IftarDonation />
        </div>
      )}
      {/* Zakat */}
      {donation === "zakat-donation" && (
        <div className="bg-gray-200">
          <ZakatDonation />
        </div>
      )}
      {/* Food Box */}
      {donation === "food-box-donation" && (
        <div className="bg-gray-200">
          <FoodBoxDonation />
        </div>
      )}
      {/* Winter Emergency */}
      {donation === "winter-emergency-donation" && (
        <div className="bg-gray-200">
          <WinterDonation />
        </div>
      )}
      {/* palestine Emergency */}
      {donation === "palestine-emergency-donation" && (
        <div className="bg-gray-200">
          <PalestineDonation />
        </div>
      )}
      {/* Orphan */}
      {donation === "orphan-donation" && (
        <div className="bg-gray-200">
          <OrphanDonation />
        </div>
      )}
      {/* Hand Pump */}
      {donation === "hand-pump-donation" && (
        <div className="bg-gray-200">
          <HandPumpDonation />
        </div>
      )}
      {/* water well */}
      {donation === "water-well-donation" && (
        <div className="bg-gray-200">
          <WaterWellDonation />
        </div>
      )}
      {/* masjid */}
      {donation === "masjid-donation" && (
        <div className="bg-gray-200">
          <MasjidDonation />
        </div>
      )}
    </div>
  );
};
export default Donation;
