export const metadata = {
  title: "レビュー"
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function ReviewLayout({ children }: Props) {
  return <>{children}</>;
}
