import { DonationSectionPage } from "../../donation/donation";

export default function WinterDonation() {
  const img = "/AppealNew/winter/8.png";
  const title = "Winter";
  const desc = `Allah will fulfil the needs
Our beloved Rasool صلی اللہ علیہ وسلم  has said, ‘He who fulfils the need of any
person, Allah will fulfil his needs in the religion and the
world.’ (Sahih Muslim, Kitab-uz-Zikr wad-Du’a, pp. 1447, Hadees 2699)`;
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
