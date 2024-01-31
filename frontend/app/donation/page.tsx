import { DonationSectionPage } from "@/components/newUi/donation/donation";
const img = "/AppealNew/food/4.jpg";
const title = "Food Pack";
const desc =
  "Lorem et expedita similique maxime doloribus inventore quam incidunt saepe voluptatem quos quae reprehenderit quisquam reiciendis esse quod fugiat consectetur. Atque voluptates hic corrupti. Beatae debitis laudantium, libero eos dolorem maxime nulla quisquam iure officia.";
export default function Donation() {
  return (
    <div className="bg-white shadow-inner ">
      <div className="max-w-5xl mx-auto"></div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
