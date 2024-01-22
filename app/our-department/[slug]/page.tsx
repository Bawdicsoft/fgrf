// import OrphanBannerSection from "@/components/newUi/appeal/orphan/orphanBanner";
// import OrphanDocs from "@/components/newUi/appeal/orphan/orphanDoc";
import OrphanBannerSection from "@/components/newUi/ourDepartment/Orphan/orphanBanner";
import OrphanDocs from "@/components/newUi/ourDepartment/Orphan/orphanDoc";
import DisasterBannerSection from "@/components/newUi/ourDepartment/disasterMange/disasterBanner";
import DisasterDocs from "@/components/newUi/ourDepartment/disasterMange/disasterDoc";
import EducationBannerSection from "@/components/newUi/ourDepartment/educationSkill/educationBanner";
import EducationDocs from "@/components/newUi/ourDepartment/educationSkill/educationDoc";
import EnvironmentDepBannerSection from "@/components/newUi/ourDepartment/environmentDep/envDepBanner";
import EnvironmentDocs from "@/components/newUi/ourDepartment/environmentDep/envDepDoc";
import HealthCareDocs from "@/components/newUi/ourDepartment/healthCare/disasterDoc";
import HealthCareBannerSection from "@/components/newUi/ourDepartment/healthCare/healthBanner";
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
    <div className=" bg-gray-200">
      {/* Disaster department */}
      {myParams === "disaster" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <DisasterBannerSection />
          <DisasterDocs />
        </div>
      )}
      {/* Health Care Department*/}
      {myParams === "health-care" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <HealthCareBannerSection />
          <HealthCareDocs />
        </div>
      )}
      {/* water-project*/}
      {myParams === "water-project" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <WaterBannerSection />
          <WaterDocs />
        </div>
      )}
      {/* water-project*/}
      {myParams === "environment-department" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <EnvironmentDepBannerSection />
          <EnvironmentDocs />
        </div>
      )}
      {/* education*/}
      {myParams === "education" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <EducationBannerSection />
          <EducationDocs />
        </div>
      )}
      {/* orphan*/}
      {myParams === "orphan" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <OrphanBannerSection />
          <OrphanDocs />
        </div>
      )}
      {/* masjid*/}
      {myParams === "masjid" && (
        <div className="max-w-7xl mx-auto bg-gray-200">
          <MasjidBannerSection />
          <MasjidDocs />
        </div>
      )}
    </div>
  );
}
