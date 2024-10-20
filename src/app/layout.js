import localFont from "next/font/local";
import "./globals.css";

const redHatText = localFont({
    src: [
        {
            path: "../../public/fonts/RedHatText-SemiBold.woff",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../public/fonts/RedHatText-Bold.woff",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/RedHatText-Regular.woff",
            weight: "500",
            style: "normal",
        }
    ],
    variable: '--font-red-hat-text',
});

export const metadata = {
  title: "Frontend Mentor | Product list with cart",
  description: "Practice updating the UI in multiple places based on user actions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${redHatText.variable} antialiased font-sans text-rose-900 text-base`}
      >
        {children}
      </body>
    </html>
  );
}
