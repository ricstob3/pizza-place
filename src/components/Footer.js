import Information from "../components/Information";
import Links from "../components/Links";
import Copyright from "../components/Copyright";

export default function Footer() {
  return (
    <footer className="py-10 bg-customOrange overflow-hidden">
      <Information />
      <Links />
      <Copyright />
    </footer>
  );
}
