import { DonationSectionPage } from "../../donation/donation";

export default function PalestineDonation() {
  const img = "/AppealNew/palestine/6.png";
  const title = "palestine";
  const desc = `Allah will remove trouble
 beloved Rasool صلی اللہ علیہ وآلہ وسلم has said ,
‘He who relieves the
worldly suffering of any Muslim, Allah will remove the trouble of the Day of Judgement from
him.’
(Sunan-ut-Tirmizi, Kitab-ul-Hudood, vol. 3, pp. 115)`;
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
