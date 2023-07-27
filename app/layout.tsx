import type { Metadata } from "next";
import RootStyleRegistry from "@/components/RootStyleRegistry";

export const metadata: Metadata = {
  title: "devpro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootStyleRegistry>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </RootStyleRegistry>
  );
}
