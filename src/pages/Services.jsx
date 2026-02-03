import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export default function ServicesPage() {
  const events = [
    { name: "Tug of war", tag: "TBA" },
    { name: "E sports", tag: "TBA" },
    { name: "Chess", tag: "TBA" },
    { name: "Carrom", tag: "TBA" },
    { name: "Cricket", tag: "TBA" },
    { name: "Volleyball", tag: "TBA" },
    { name: "Cricket", tag: "TBA" },
    { name: "Basketball", tag: "TBA" },
    { name: "Volleyball", tag: "TBA" },
  ];

  return (
    <div className="eventspage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Events</title>
      </Helmet>

      <div className="eventpage1">
        <div className="eventpage1head">
          <div className="head">
            <div className="projectheadcontent2">Campus Events</div>
          </div>
          <div className="projectsubhead2">
            A curated list of competitive events — bring your game and play to
            win.
          </div>
        </div>
      </div>

      <div className="eventsSection">
        <div className="eventsGrid">
          {events.map((e, idx) => (
            <div className="eventCard" key={idx}>
              <div className="eventBadge">{e.tag}</div>
              <div className="eventTitle">{e.name}</div>
              <div className="eventDesc">
                {e.tag === "Open"
                  ? "Open to all participants"
                  : `${e.tag} participants only`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
