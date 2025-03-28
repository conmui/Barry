import React from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Logo from "../components/Logo";
import "/src/pages/About.css";

function About() {
  return (
    <main className="About">
      <section className="About__content">
        <Title title={"About"} />
        <Quote
          quote={"\"That's the title. They can't cut that!\""}
          spokenBy={"Gene Cousineau"}
          inEp={"Season 2: The Audition"}
        />
        <p className="About__content-description">
          Barry is an American black comedy crime drama television series
          created by Alec Berg and Bill Hader that premiered on HBO on March 25,
          2018, and concluded on May 28, 2023, after four seasons and 32
          episodes. Hader stars as Barry Berkman, a former U.S. Marine from
          Cleveland who works as a hitman; upon traveling to Los Angeles to kill
          a target, he finds himself joining an acting class taught by Gene
          Cousineau (Henry Winkler), where he meets aspiring actress Sally Reed
          (Sarah Goldberg) and begins to question his path in life as he deals
          with his criminal associates such as Monroe Fuches (Stephen Root) and
          NoHo Hank (Anthony Carrigan).
        </p>
        <p className="About__content-description">
          Barry received critical acclaim, with most praise going to its
          directing, writing, originality, humor, characters, and performances
          (particularly those of Hader and Winkler) as well as its examination
          of its subject matter. Several critics have labeled it as one of the
          best television series of all time.
        </p>
        <p className="About__content-description">
          The series has received various accolades, including 44 Primetime Emmy
          Award nominations. Hader won Outstanding Lead Actor in a Comedy Series
          twice, while Winkler won Outstanding Supporting Actor in a Comedy
          Series for his performance in the first season. For the second season,
          Winkler, Root, and Carrigan all received Emmy nominations for
          Outstanding Supporting Actor, while Goldberg received a nomination for
          Outstanding Supporting Actress. Hader, Winkler, and Carrigan each
          received two more nominations for the third and fourth seasons. All
          four seasons of Barry were nominated for the Primetime Emmy Award for
          Outstanding Comedy Series.
        </p>

        <img
          className="About__image"
          src="/poster.jpg"
          alt="bill hader as Barry behind a stage curtain holding a gun"
        />

        <Logo />
      </section>
    </main>
  );
}

export default About;
