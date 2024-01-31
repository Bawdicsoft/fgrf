import { DonationSectionPage } from "../../donation/donation";

export default function HandPumpDonation() {
  const img = "/AppealNew/handPump/3.jpg";
  const title = "hand pump";
  const desc =
    "Lorem et expedita similique maxime doloribus inventore quam incidunt saepe voluptatem quos quae reprehenderit quisquam reiciendis esse quod fugiat consectetur. Atque voluptates hic corrupti. Beatae debitis laudantium, libero eos dolorem maxime nulla quisquam iure officia.";
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
