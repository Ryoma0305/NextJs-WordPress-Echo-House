import { FadeInBottom } from "../../../components/common/FadeInBottom";
import SectionHeading from "../../../components/common/sectionHeading";

const About = () => {
  return (
    <FadeInBottom>
      <section className="about relative bg-[url('/images/1floor-6.jpg')] bg-cover bg-center bg-no-repeat px-4 py-16 before:absolute before:inset-0 before:bg-about-bg" id="about">
        <div className="about-textwrap relative">
          <SectionHeading titleJp="コンセプト" titleEn="About us" />
          <p className="about-text text-center leading-loose">
            エコーハウスは新今宮駅まで徒歩5分、通天閣、新世界まで徒歩7分、と大阪の中心地に位置し、
            <br />
            2018年にリニューアルオープンした女性専用シェアハウスです。
            <br />
            私達は、国籍やバックグラウンドが異なる住民の方々誰もが快適に過ごせるよう努め、
            <br />
            エコーハウスを選んで良かったと言ってもらえるようなサービスを提供していきたいと思っています。
          </p>
        </div>
      </section>
    </FadeInBottom>
  );
};

export default About;
