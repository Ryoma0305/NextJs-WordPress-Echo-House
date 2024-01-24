import Link from "next/link";

const Contact = () => {
  return (
    <section>
      <p className="">
        <Link
          href="/contact/"
          className="relative z-0 flex h-40 flex-col items-center justify-center gap-2 bg-[url('/images/f5.jpg')] bg-cover bg-center text-center text-white-100 before:absolute before:inset-0 before:z-[-1] before:inline-block before:bg-contact before:opacity-5 before:transition-all before:duration-1000 before:ease-out-expo hover:before:opacity-100 md:h-[30rem] md:gap-4"
        >
          <span className="text-xs font-bold md:text-lg">お気軽にお問い合わせく下さい</span>
          <span className="font-accent text-xl font-black md:text-4xl">GET IN TOUCH</span>
        </Link>
      </p>
    </section>
  );
};

export default Contact;
