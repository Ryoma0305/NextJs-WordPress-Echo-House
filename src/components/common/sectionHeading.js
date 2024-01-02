const SectionHeading = ({ titleJp, titleEn }) => {
  return (
    <div className="flex justify-center">
      <h2 className="section-title relative inline-flex flex-col justify-center text-center">
        <span className="relative z-0 font-accent text-xl font-medium before:absolute before:left-0 before:top-0 before:-z-[1] before:h-8 before:w-8 before:rounded-full before:bg-green">
          {titleEn}
        </span>
        <span className="section-title-text text-xs font-semibold">{titleJp}</span>
      </h2>
    </div>
  );
};

export default SectionHeading;
