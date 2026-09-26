import { content } from "@/data/content";

export default function Intro() {
  return (
    <section className="intro section">
      <div className="container intro-inner">
        <p className="subtitle">{content.intro.eyebrow}</p>

        <h2 className="section-title">
          {content.intro.title}
          <br />
          <span>{content.intro.highlightedTitle}</span>
        </h2>

        <p className="section-description">
          {content.intro.description}
        </p>

        <span className="intro-mark">L</span>
      </div>
    </section>
  );
}

// import { restaurant } from "@/config/restaurant";
// import { content } from "@/data/content";

// export default function Intro() {
//   return (
//     <section className="intro section">
//       <div className="container intro-inner">
//         <p className="subtitle">Our Philosophy</p>

//         <h2 className="intro-title">
//           Food is more than what is served.
//         </h2>

//         <p className="subtitle">{content.intro.eyebrow}</p>

// <h2 className="section-title">
//   {content.intro.title}
//   <br />
//   <span>{content.intro.highlightedTitle}</span>
// </h2>

// <p className="section-description">
//   {content.intro.description}
// </p>

//         <span className="intro-mark">L</span>
//       </div>
//     </section>
//   );
// }