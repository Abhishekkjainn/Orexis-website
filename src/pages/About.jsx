import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";
import { ImSpades } from "react-icons/im";
export default function AboutPage() {
  return (
    <div className="aboutpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Orexis</title>
      </Helmet>
      <div className="projectpage1">
        <div className="projectpage1head">
          <div className="head">
            <div className="projectcircle"></div>
            <div className="projectheadcontent">About Orexis</div>
          </div>
          <div className="projectsubhead">
            Born in a frozen world where weakness is erased, the Glacial Dynasty
            governs through structure, strategy, and control. Every tradition,
            law, and symbol reflects discipline shaped by survival. The Spade
            embodies a ruling ideology where power is earned, loyalty is
            absolute, and silence speaks louder than chaos.
          </div>
        </div>
      </div>
      <Page11 />
    </div>
  );
}

function Page11() {
  return (
    <div className="page11">
      <Marquee
        className="aboutmemarquee"
        speed={40}
        autoFill={true}
        loop={0}
        direction="left"
      >
        <ImSpades /> &nbsp; Dynasty Overview &nbsp; <ImSpades /> &nbsp; Dynasty
        Overview &nbsp; <ImSpades /> &nbsp; Dynasty Overview &nbsp;
      </Marquee>

      <div className="page11content">
        <div className="quotesGrid">
          <div className="quoteCard">
            <div className="quoteIndex">1</div>
            <div className="quoteTitle">Origin</div>
            <div className="quoteBody">
              Formed in an unforgiving frozen realm, the Glacial Dynasty emerged
              when survival demanded intelligence, planning, and restraint over
              brute force.
            </div>
          </div>

          <div className="quoteCard">
            <div className="quoteIndex">2</div>
            <div className="quoteTitle">Belief System</div>
            <div className="quoteBody">
              Power is earned through foresight and discipline. The dynasty
              believes control, order, and wisdom sustain civilizations longer
              than chaos or emotion.
            </div>
          </div>

          <div className="quoteCard">
            <div className="quoteIndex">3</div>
            <div className="quoteTitle">Emblem — The Spade</div>
            <div className="quoteBody">
              The Spade represents authority, law, and calculated dominance. It
              symbolizes leadership built on intellect and decisive governance.
            </div>
          </div>

          <div className="quoteCard">
            <div className="quoteIndex">4</div>
            <div className="quoteTitle">Realm & Environment</div>
            <div className="quoteBody">
              A vast glacial land of ice plains and frozen strongholds where
              harsh climate shapes resilience, unity, and strategic living.
            </div>
          </div>

          <div className="quoteCard">
            <div className="quoteIndex">5</div>
            <div className="quoteTitle">Governance & Laws</div>
            <div className="quoteBody">
              Governed by strict codes and structured hierarchy. Laws prioritize
              stability, loyalty, and long-term vision over impulsive action.
            </div>
          </div>

          <div className="quoteCard">
            <div className="quoteIndex">6</div>
            <div className="quoteTitle">Ruler</div>
            <div className="quoteBody">
              Faisal — The Strategist King. A ruler chosen for intellect and
              foresight, guiding the dynasty through calculated decisions and
              unwavering control.
            </div>
          </div>

          <div className="quoteCard">
            <div className="quoteIndex">7</div>
            <div className="quoteTitle">Culture & Practices</div>
            <div className="quoteBody">
              Minimalistic, disciplined, and symbolic. Architecture, attire, and
              rituals reflect precision, silence, and authority.
            </div>
          </div>

          <div className="quoteCard">
            <div className="quoteIndex">8</div>
            <div className="quoteTitle">Warfare Strategy</div>
            <div className="quoteBody">
              Victory through planning, patience, and terrain mastery. Battles
              are calculated, not rushed — every move intentional.
            </div>
          </div>

          <div className="quoteCard">
            <div className="quoteIndex">9</div>
            <div className="quoteTitle">Currency</div>
            <div className="quoteBody">
              Coins forged with the Spade insignia, symbolizing trust,
              authority, and the weight of governance.
            </div>
          </div>

          <div className="quoteCard">
            <div className="quoteIndex">10</div>
            <div className="quoteTitle">Identity</div>
            <div className="quoteBody">
              A dynasty that does not shout its power — it executes it.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
