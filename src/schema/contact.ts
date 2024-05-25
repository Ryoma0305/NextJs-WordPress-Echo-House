import { z } from "zod";

const contactReason = z.array(z.string()).min(1, { message: "入力が必須の項目です" });
const email: z.ZodString = z
  .string({ required_error: "入力が必須の項目です" })
  .min(1, { message: "入力が必須の項目です" })
  .max(255, { message: "255文字以内で入力してください" })
  .email({ message: "メールアドレスの形式で入力してください" });
const telephone: z.ZodString = z.string({ required_error: "入力が必須の項目です" }).min(10, { message: "電話番号を入力してください" }).max(14, { message: "入力値が長すぎます" });
const name: z.ZodString = z.string({ required_error: "入力が必須の項目です" }).min(1, { message: "入力が必須の項目です" }).max(20, { message: "入力値が長すぎます" });
const age: z.ZodString = z.string();
const country: z.ZodString = z.string().max(30, { message: "入力値が長すぎます" });
const gender = z.enum(["男性", "女性"]);
const job: z.ZodString = z.string().max(30, { message: "入力値が長すぎます" });
const message: z.ZodString = z.string({ required_error: "入力が必須の項目です" }).min(1, { message: "入力が必須の項目です" }).max(4098, { message: "入力値が長すぎます" });

export const ContactSchema = z.object({
  ContactReason: contactReason,
  Email: email,
  Telephone: telephone,
  Name: name,
  Age: age,
  Country: country,
  Gender: gender,
  Job: job,
  Message: message
});
export type ContactType = z.infer<typeof ContactSchema>;
