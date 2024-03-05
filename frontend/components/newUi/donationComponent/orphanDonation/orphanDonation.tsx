import { DonationSectionPage } from "../../donation/donation";

export default function OrphanDonation() {
  const img = "/AppealNew/Orphan/4.jpeg";
  const title = "orphan";
  const desc = `This golden teaching of treating orphans with kindness is a definite way of 'improving human
life' and making every individual an honourable person of a society.
`;
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
