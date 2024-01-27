import SectionHeading from "../../common/SectionHeading";
import ReviewSlider from "./ReviewSlider";
import Button from "../../common/Button";
import { FadeInBottom } from "../../common/FadeInBottom";


const Review = ({ reviews }: { reviews: Array<any> }) => {
  return (
    <FadeInBottom>
      <section className="bg-white-200 py-16" id="review">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading titleJp="お客様の声" titleEn="Review" />
        </div>
        <ReviewSlider reviews={reviews} />
        <div className="mt-16">
          <Button title="View more" href="/reviews/" />
        </div>
      </section>
    </FadeInBottom>
  );
};

export default Review;
