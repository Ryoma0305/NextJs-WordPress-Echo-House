// "use client";

import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactSchema, ContactType } from "../../schema/contact";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.message.value
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    const result = await res.json();
  };

  const handleOnSubmit: SubmitHandler<ContactType> = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors: formatError, isValid, isSubmitting }
  } = useForm<ContactType>({
    mode: "onBlur",
    resolver: zodResolver(ContactSchema)
  });

  return (
    <form
      method="post"
      onSubmit={(event) => {
        void handleSubmit(handleOnSubmit)(event);
      }}
      className="flex flex-col space-y-10"
    >
      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">メールアドレス</div>
        <input type="text" {...register("email")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" placeholder="例）mail@example.com" />
        {formatError.email && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.email.message}</div>}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">電話番号</div>
        <input type="text" {...register("telephone")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" placeholder="例）09012345678" />
        {formatError.telephone && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.telephone.message}</div>}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">お名前</div>
        <input type="text" {...register("lastName")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" placeholder="例）山田" />
        {formatError.lastName && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.lastName.message}</div>}
        <input type="text" {...register("givenName")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" placeholder="例）太郎" />
        {formatError.givenName && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.givenName.message}</div>}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">企業名</div>
        <input type="text" {...register("organizationName")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" placeholder="例）株式会社◯✕△" />
        {formatError.organizationName && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.organizationName.message}</div>}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">お問い合わせ内容</div>
        <textarea {...register("message")} className="h-36 border px-2 py-1"></textarea>

        {formatError.message && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.message.message}</div>}
      </label>

      <div className="flex flex-col items-center space-y-1">
        <div className="flex flex-row items-center space-x-2">
          <label className="flex flex-row items-center space-x-2">
            <input type="checkbox" value="true" {...register("agree")} className="h-5 w-5" />
            <p>個人情報取り扱いに同意する</p>
          </label>
        </div>
        {formatError.agree && <div className="pl-1 pt-1 text-center text-xs text-red-500">{formatError.agree.message}</div>}
      </div>
      <button type="submit" disabled={!isValid || isSubmitting} className="rounded bg-slate-800 px-4 py-2 text-white-100 hover:bg-slate-600  disabled:bg-gray-300 md:self-center">
        送信する
      </button>
    </form>
  );
};

export default ContactForm;
