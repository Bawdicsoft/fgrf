// import OrphanBannerSection from "@/components/newUi/appeal/orphan/orphanBanner";
// import OrphanDocs from "@/components/newUi/appeal/orphan/orphanDoc";
import OrphanBannerSection from "@/components/newUi/ourDepartment/Orphan/orphanBanner";
import OrphanDocs from "@/components/newUi/ourDepartment/Orphan/orphanDoc";
import Covid19BannerSection from "@/components/newUi/ourDepartment/disasterMange/covid19/covid19Banner";
import Covid19Docs from "@/components/newUi/ourDepartment/disasterMange/covid19/covid19Doc";
import DisasterBannerSection from "@/components/newUi/ourDepartment/disasterMange/disasterBanner";
import DisasterDocs from "@/components/newUi/ourDepartment/disasterMange/disasterDoc";
import Disasters from "@/components/newUi/ourDepartment/disasterMange/disasters";
import MorroccoBannerSection from "@/components/newUi/ourDepartment/disasterMange/moroccoEarthquake/moroccoEarthquakeBanner";
import MoroccoEarthquakeDocs from "@/components/newUi/ourDepartment/disasterMange/moroccoEarthquake/moroccoEarthquakeDoc";
import PakistanFloodBannerSection from "@/components/newUi/ourDepartment/disasterMange/pakistanFlood/pakistanFloodBanner";
import PakistanFloodDocs from "@/components/newUi/ourDepartment/disasterMange/pakistanFlood/pakistanFloodDoc";
import PalestinianBrotherSistersBanner from "@/components/newUi/ourDepartment/disasterMange/palestinianBrotherSisters/palestinianBrotherSistersBanner";
import PalestinianBrotherSistersDocs from "@/components/newUi/ourDepartment/disasterMange/palestinianBrotherSisters/palestinianBrotherSistersDoc";
import TurkeySyriaEarthQuackBannerSection from "@/components/newUi/ourDepartment/disasterMange/turkeySyriaEarthquake/turkeySyriaEarthQuackBanner";
import TurkeySyriaEarthQuackDocs from "@/components/newUi/ourDepartment/disasterMange/turkeySyriaEarthquake/turkeySyriaEarthQuackDoc";
import EducationBannerSection from "@/components/newUi/ourDepartment/educationSkill/educationBanner";
import EducationDocs from "@/components/newUi/ourDepartment/educationSkill/educationDoc";
import EnvironmentDepBannerSection from "@/components/newUi/ourDepartment/environmentDep/envDepBanner";
import EnvironmentDocs from "@/components/newUi/ourDepartment/environmentDep/envDepDoc";
import EnvironmentDepartments from "@/components/newUi/ourDepartment/environmentDep/environmentDeps";
import PlantationBanner from "@/components/newUi/ourDepartment/environmentDep/plantation/plantationBanner";
import PlantationDocs from "@/components/newUi/ourDepartment/environmentDep/plantation/plantationDoc";
import BloodDonationsBanner from "@/components/newUi/ourDepartment/healthCare/bloodDonations/bloodDonationsBanner";
import BloodDonationsDocs from "@/components/newUi/ourDepartment/healthCare/bloodDonations/bloodDonationsDoc";
import HealthCareDocs from "@/components/newUi/ourDepartment/healthCare/disasterDoc";
import EyecampsBannerSection from "@/components/newUi/ourDepartment/healthCare/eyecamps/eyecampsBanner";
import EyecampsDocs from "@/components/newUi/ourDepartment/healthCare/eyecamps/eyecampsDoc";
import FaizanRehabilitationCenterBanner from "@/components/newUi/ourDepartment/healthCare/faizanRehabilitationCenter/faizanRehabilitationCenterBanner";
import FaizanRehabilitationCenterDocs from "@/components/newUi/ourDepartment/healthCare/faizanRehabilitationCenter/faizanRehabilitationCenterDoc";
import HealthCareBannerSection from "@/components/newUi/ourDepartment/healthCare/healthBanner";
import HealthCares from "@/components/newUi/ourDepartment/healthCare/healthCars";
import MedicalClinicBanner from "@/components/newUi/ourDepartment/healthCare/medicalClinic/medicalClinicBanner";
import MedicalClinicDocs from "@/components/newUi/ourDepartment/healthCare/medicalClinic/medicalClinicDoc";
import MedicalVanBanner from "@/components/newUi/ourDepartment/healthCare/medicalVan/medicalVanBanner";
import MedicalVanDocs from "@/components/newUi/ourDepartment/healthCare/medicalVan/medicalVanDoc";
import MasjidBannerSection from "@/components/newUi/ourDepartment/masjid/masjidBanner";
import MasjidDocs from "@/components/newUi/ourDepartment/masjid/masjidDoc";
import WaterBannerSection from "@/components/newUi/ourDepartment/waterProject/waterBanner";
import WaterDocs from "@/components/newUi/ourDepartment/waterProject/waterDoc";

export default function OurDepartmentAppeal({
  params,
}: {
  params: { slug: string };
}) {
  const myParams = params.slug;
  return (
    <div className=" ">
      {/* Disaster department */}
      {myParams === "disaster" && (
        <div
          className="bg-center bg-cover bg-no-repeat bg-blend-multiply"
          style={{
            backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
            height: "100%",
          }}
        >
          <div className="max-w-7xl mx-auto ">
            {/* <DisasterBannerSection />
          <DisasterDocs /> */}
            <Disasters />
          </div>
        </div>
      )}
      {/* Disasters */}

      {myParams === "disaster-covid-19" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <Covid19BannerSection />
            <Covid19Docs />
          </div>
        </div>
      )}
      {myParams === "disaster-morocco-earthquake" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <MorroccoBannerSection />
            <MoroccoEarthquakeDocs />
          </div>
        </div>
      )}
      {myParams === "disaster-pakistan-flood" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <PakistanFloodBannerSection />
            <PakistanFloodDocs />
          </div>
        </div>
      )}
      {myParams === "disaster-turkey-syria-earthquake" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <TurkeySyriaEarthQuackBannerSection />
            <TurkeySyriaEarthQuackDocs />
          </div>
        </div>
      )}
      {myParams === "disaster-palestine-brothers-sisters" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <PalestinianBrotherSistersBanner />
            <PalestinianBrotherSistersDocs />
          </div>
        </div>
      )}

      {/* Health Care Department*/}
      {myParams === "health-care" && (
        <div
          className="bg-center bg-cover bg-no-repeat bg-blend-multiply"
          style={{
            backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
            height: "100%",
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* <HealthCareBannerSection />
          <HealthCareDocs /> */}
            <HealthCares />
          </div>
        </div>
      )}
      {myParams === "health-care-eye-camps" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <EyecampsBannerSection />
            <EyecampsDocs />
          </div>
        </div>
      )}
      {myParams === "health-care-blood-donations" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <BloodDonationsBanner />
            <BloodDonationsDocs />
          </div>
        </div>
      )}
      {myParams === "health-care-medical-van" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <MedicalVanBanner />
            <MedicalVanDocs />
          </div>
        </div>
      )}
      {myParams === "health-care-faizan-rehabilitation-center" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <FaizanRehabilitationCenterBanner />
            <FaizanRehabilitationCenterDocs />
          </div>
        </div>
      )}
      {myParams === "health-care-medical-clinic" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <MedicalClinicBanner />
            <MedicalClinicDocs />
          </div>
        </div>
      )}

      {/* water-project*/}
      {myParams === "water-project" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <WaterBannerSection />
            <WaterDocs />
          </div>
        </div>
      )}
      {/* environment-department*/}
      {myParams === "environment-department" && (
        <div
          className="bg-center bg-cover bg-no-repeat bg-blend-multiply"
          style={{
            backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
            height: "100%",
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* <EnvironmentDepBannerSection />
          <EnvironmentDocs /> */}
            <EnvironmentDepartments />
          </div>
        </div>
      )}
      {myParams === "environment-department-plantation" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <PlantationBanner />
            <PlantationDocs />
          </div>
        </div>
      )}

      {/* education*/}
      {myParams === "education" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto">
            <EducationBannerSection />
            <EducationDocs />
          </div>
        </div>
      )}
      {/* orphan*/}
      {myParams === "orphan" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto">
            <OrphanBannerSection />
            <OrphanDocs />
          </div>
        </div>
      )}
      {/* masjid*/}
      {myParams === "masjid" && (
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto ">
            <MasjidBannerSection />
            <MasjidDocs />
          </div>
        </div>
      )}
    </div>
  );
}
