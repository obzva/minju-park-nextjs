export default function MobileMTLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mt-8 mb-16 sm:my-0">{children}</div>;
}
