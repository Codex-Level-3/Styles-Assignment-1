import "./styles/styles.scss";
import "./globals.css";

export const metadata = {
  title: "User Profile",
  description: "Creating a user profile with next.js and SASS 7-1.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
