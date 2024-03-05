import { DonationSectionPage } from "../../donation/donation";

export default function IftarDonation() {
  const img = "/AppealNew/iftar/iftar3.jpeg";
  const title = "Iftar";
  const desc = `The Prophet صَّلى الـّٰلـُه َعَلْيِه َوٰاِلٖه َوَسَّلم  said, "The one who provides Iftar will gain reward equivalent to the reward of the one observing fast"
(Sahih ibn Khuzaymah, vol. 3, p. 192, Hadith 1887)
It is mentioned in another narration: “The one who feeds a fasting person with permissible
food or water, the Angels will seek forgiveness for him during Ramadan and Jibrīl
will seek forgiveness for him on the Night of Power”
(Mu’jam Kabeer, vol. 6, p. 261. Hadith 6162)`;
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
