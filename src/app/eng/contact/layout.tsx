export const metadata = {
  title: "Contact"
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function ContactLayout({ children }: Props) {
  return <>{children}</>;
}
