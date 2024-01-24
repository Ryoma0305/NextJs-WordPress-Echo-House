import { FadeInBottom } from "../../../components/common/FadeInBottom";
import SectionHeading from "../../../components/common/SectionHeading";

const Access = () => {
  return (
    <FadeInBottom>
      <section className="bg-white-200 px-4 py-16" id="access">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading titleJp="アクセス" titleEn="Access" />
          <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:items-center md:gap-8 md:text-xl">
            <div className="order-2 flex flex-col gap-4">
              <p>〒557-0016</p>
              <p>大阪府大阪市西成区花園北1丁目4-6 ECHO HOUSE</p>
              <p>ECHO HOUSE1-4-6, Hanazonokita, Nishninari-ku, Osaka-shi, Osaka-hu, Japan</p>
              <p className="mt-6">新今宮駅より徒歩３分</p>
              <p>3 minutes walk from Shin-imamiya station</p>
            </div>
            <div className="order-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.1380941037099!2d135.49856823767982!3d34.649411599936954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e762e33f7153%3A0xca90152aec449637!2z44CSNTU3LTAwMTYg5aSn6Ziq5bqc5aSn6Ziq5biC6KW_5oiQ5Yy66Iqx5ZyS5YyX77yR5LiB55uu77yU4oiS77yW!5e0!3m2!1sja!2sjp!4v1698539072898!5m2!1sja!2sjp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </FadeInBottom>
  );
};

export default Access;
