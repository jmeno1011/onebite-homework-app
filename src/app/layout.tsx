import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={"container"}>
          <header className={"header"}>
            <Link href={"/"}>TONO ONEBITE CINEMA</Link>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
