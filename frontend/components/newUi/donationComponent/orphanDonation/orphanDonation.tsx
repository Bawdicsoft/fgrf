import { DonationSectionPage } from "../../donation/donation";

export default function OrphanDonation() {
  const img = "/AppealNew/Orphan/4.jpeg";
  const title = "orphan";
  const desc =
    "Lorem et expedita similique maxime doloribus inventore quam incidunt saepe voluptatem quos quae reprehenderit quisquam reiciendis esse quod fugiat consectetur. Atque voluptates hic corrupti. Beatae debitis laudantium, libero eos dolorem maxime nulla quisquam iure officia.";
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
