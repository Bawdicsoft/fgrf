import { DonationSectionPage } from "../../donation/donation";

export default function ZakatDonation() {
  const img = "/AppealNew/Zakat/zakat4.jpeg";
  const title = "zakat";
  const desc =
    "Zakat is one of the five pillars of Islam and it is an obligatory act.  The meaning of Zakat is “to purify”.  In essence, Zakat is purity or to purify.  To purify our own wealth all Muslims are obliged to pay a portion of their wealth.Zakat is an obligation upon any Muslim who has reached puberty, is sane and has had more than the minimum required amount of wealth (Nisaab) for one year. Please use our Zakat Calculator below to work out your Zakat.";
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
