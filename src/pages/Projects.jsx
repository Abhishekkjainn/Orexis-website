import { Helmet } from "react-helmet";
export default function ProjectsPage() {
  return (
    <div className="teampage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Team Orexis</title>
      </Helmet>

      {/* Page 1 — Team hero image (constrained to viewport height) */}
      <section className="teampage1">
        <img src="/Teamimage.jpeg" alt="Team" className="teampage1img" />
      </section>

      {/* Page 2 — Full-width image */}
      <section className="teampage2">
        <img src="/Teamname.jpeg" alt="Team full" className="teampage2img" />
      </section>
    </div>
  );
}
