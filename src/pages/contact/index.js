import Layout from "../../components/common/Layout";
import ContactForm from "../../components/contact/contact-form";

export default function Form() {
  return (
    <Layout>
      <div className="flex h-40 items-center justify-center bg-gradient-right-pink md:h-80">
        <h2 className="font-accent text-xl font-bold uppercase md:text-4xl">Contact</h2>
      </div>
      <div className="container mx-auto mt-5 max-w-[1200px] px-4 md:px-56 md:pb-40 md:pt-24">
        {/* <form onSubmit={registerUser}>
          <div className="mb-3">
            <label htmlFor="email">メールアドレス</label>
            <input id="email" name="email" type="email" className="form-control" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              問合せ内容
            </label>
            <textarea id="message" name="message" className="form-control" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              送信
            </button>
          </div>
        </form> */}

        <ContactForm />
      </div>
    </Layout>
  );
}
