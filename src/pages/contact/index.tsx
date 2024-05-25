import React from "react";
import Layout from "../../components/common/Layout";
import ContactForm from "../../components/contact/ContactForm";

export default function Form() {
  return (
    <Layout>
      <div className="flex h-40 items-center justify-center bg-slate-800 md:h-80">
        <h1 className="font-accent text-xl font-bold uppercase text-white-100 md:text-4xl">Contact</h1>
      </div>
      <div className="container mx-auto mt-5 max-w-[1200px] px-4 md:px-56 md:pb-40 md:pt-24">
        <ContactForm />
      </div>
    </Layout>
  );
}
