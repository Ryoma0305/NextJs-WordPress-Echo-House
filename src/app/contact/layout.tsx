export const metadata = {
  title: "お問い合わせ"
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function ContactLayout({ children }: Props) {
  return <>{children}</>;
}
