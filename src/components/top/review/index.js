import SectionHeading from "@/components/common/sectionHeading";
import ReviewSlider from "./reviewSlider";
import Button from "@/components/common/button";

const Review = ({ reviews }) => {
  return (
    <section className="bg-white-200 py-16" id="features">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading titleJp="お客様の声" titleEn="Review" />
      </div>
      <ReviewSlider reviews={reviews} />
      <div className="mt-16">
        <Button title="View more" href="/reviews/" />
      </div>
    </section>
  );
};

export default Review;
