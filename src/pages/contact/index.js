import Layout from "../../components/common/Layout";
import ContactForm from "../../components/contact/ContactForm";

export default function Form() {
  return (
    <Layout>
      <div className="flex h-40 items-center justify-center bg-gradient-right-pink md:h-80">
        <h2 className="font-accent text-xl font-bold uppercase md:text-4xl">Contact</h2>
      </div>
      <div className="container mx-auto mt-5 max-w-[1200px] px-4 md:px-56 md:pb-40 md:pt-24">
        <ContactForm />
      </div>
    </Layout>
  );
}
