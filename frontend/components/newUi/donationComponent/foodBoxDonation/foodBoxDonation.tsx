import { DonationSectionPage } from "../../donation/donation";

export default function FoodBoxDonation() {
  const img = "/AppealNew/food/4.jpg";
  const title = "Food Pack";
  const desc = `It was asked from the final Messenger of Allah  صلی اللہ علیہ وسلم  which aspect of Islam is
better?? He replied: that you provide food 
`;
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
