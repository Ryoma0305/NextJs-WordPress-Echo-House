import React from "react";
import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactSchema, ContactType } from "../../schema/contact";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const {
    register,
    formState: { errors: formatError, isValid, isSubmitting }
  } = useForm<ContactType>({
    mode: "onBlur",
    resolver: zodResolver(ContactSchema)
  });

  return (
    <form method="post" action="https://hyperform.jp/api/Bud3fuIR" className="flex flex-col space-y-10">
      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-base font-bold">お問い合わせ種別（Contact reason）</div>
        <div className="flex gap-8">
          <div className="flex gap-2">
            <input type="radio" {...register("ContactReason")} value="見学希望" />
            <label>見学希望（Viewing）</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" {...register("ContactReason")} value="入居希望" />
            <label>入居希望（Move in）</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" {...register("ContactReason")} value="その他" />
            <label>その他（Other）</label>
          </div>
        </div>
      </label>
      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-base font-bold">メールアドレス（Email）</div>
        <input type="text" {...register("Email")} className="mt-4 rounded-md border border-gray-100 px-3 py-2 text-gray-800" placeholder="例）mail@example.com" />
        {formatError.Email && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.Email.message}</div>}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-base font-bold">電話番号（Phone Number）</div>
        <input type="text" {...register("Telephone")} className="mt-4 rounded-md border border-gray-100 px-3 py-2 text-gray-800" placeholder="例）09012345678" />
        {formatError.Telephone && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.Telephone.message}</div>}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-base font-bold">お名前（Name）</div>
        <input type="text" {...register("Name")} className="mt-4 rounded-md border border-gray-100 px-3 py-2 text-gray-800" placeholder="例）山田 太郎" />
        {formatError.Name && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.Name.message}</div>}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-base font-bold">年齢（Age）</div>
        <input type="text" {...register("Age")} className="mt-4 rounded-md border border-gray-100 px-3 py-2 text-gray-800" />
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-base font-bold">国籍（Nationality）</div>
        <input type="text" {...register("Country")} className="mt-4 rounded-md border border-gray-100 px-3 py-2 text-gray-800" />
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-base font-bold">性別（Gender）</div>
        <div className="flex gap-8">
          <div className="flex gap-2">
            <input type="radio" defaultChecked {...register("Gender")} value="男性" />
            <label>男性（Male）</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" {...register("Gender")} value="女性" />
            <label>女性（Female）</label>
          </div>
        </div>
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-base font-bold">職業（Occupation）</div>
        <input type="text" {...register("Job")} className="mt-4 rounded-md border border-gray-100 px-3 py-2 text-gray-800" />
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-base font-bold">お問い合わせ内容（Message）</div>
        <textarea {...register("Message")} className="h-36 border border-gray-100 px-2 py-1"></textarea>
        {formatError.Message && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.Message.message}</div>}
      </label>

      <button type="submit" disabled={!isValid || isSubmitting} className="rounded bg-slate-800 px-4 py-2 text-white-100 hover:bg-slate-600  disabled:bg-gray-300 md:self-center">
        送信する
      </button>
    </form>
  );
};

export default ContactForm;
