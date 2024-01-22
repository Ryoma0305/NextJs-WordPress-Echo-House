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
    <form method="post" action="https://ssgform.com/s/aJa3hznVUi28" className="flex flex-col space-y-10">
      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">お問い合わせ種別</div>
        <input type="checkbox" checked {...register("ContactReason")} value="見学希望" />
        <span>見学希望</span>
        <input type="checkbox" {...register("ContactReason")} value="入居希望" />
        <span>入居希望</span>
        <input type="checkbox" {...register("ContactReason")} value="その他" />
        <span>その他</span>
      </label>
      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">メールアドレス</div>
        <input type="text" {...register("Email")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" placeholder="例）mail@example.com" />
        {formatError.Email && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.Email.message}</div>}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">電話番号</div>
        <input type="text" {...register("Telephone")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" placeholder="例）09012345678" />
        {formatError.Telephone && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.Telephone.message}</div>}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">お名前</div>
        <input type="text" {...register("LastName")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" placeholder="例）山田" />
        {formatError.LastName && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.LastName.message}</div>}
        <input type="text" {...register("GivenName")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" placeholder="例）太郎" />
        {formatError.GivenName && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.GivenName.message}</div>}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">年齢</div>
        <input type="text" {...register("Age")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" />
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">国籍</div>
        <input type="text" {...register("Country")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" />
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">性別</div>
        <input type="radio" checked {...register("Gender")} value="男性" />
        <span>男性</span>
        <input type="radio" {...register("Gender")} value="女性" />
        <span>女性</span>
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">職業</div>
        <input type="text" {...register("Job")} className="mt-4 rounded-md border px-3 py-2 text-gray-800" />
      </label>

      <label className="flex flex-col space-y-1">
        <div className="mb-1 text-sm font-bold">お問い合わせ内容</div>
        <textarea {...register("Message")} className="h-36 border px-2 py-1"></textarea>
        {formatError.Message && <div className="pl-1 pt-1 text-xs text-red-500">{formatError.Message.message}</div>}
      </label>

      <button type="submit" disabled={!isValid || isSubmitting} className="rounded bg-slate-800 px-4 py-2 text-white-100 hover:bg-slate-600  disabled:bg-gray-300 md:self-center">
        送信する
      </button>
    </form>
  );
};

export default ContactForm;
