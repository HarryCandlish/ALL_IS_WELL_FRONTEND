import React, { Component } from "react";
import homeStyles from "../modules/home.module.scss";

import Philosophy from "./Philosophy";
import Product from "./Product";
import SuicideChart from "./SuicideChart";
import MentalHealthChart from "./MentalHealthChart";
import AgeChart from "./AgeChart";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className={homeStyles.title}>
          &nbsp;All <br />
          &nbsp;is
          <br />
          &nbsp; Well.
        </h1>
        <div className={homeStyles.banner}>
          <h2 className={homeStyles.secondaryTitle}>The Problem</h2>
          <p className={homeStyles.epigraph}>
            An attempt to fight and establish a base in Wellington to deal with
            the mental health issues in Wellington and New Zealand. We know well
            enough the issue, it's apart of every individuals life, whether it
            be a family member, partner, friend. If not you see it in our
            streets, in the news, in the schools and workplace. It's hard not be
            encumbered by it, making it easy to ignore for lack of knowing what
            do.
          </p>
        </div>
        <MentalHealthChart />
        <SuicideChart />
        <AgeChart />
        <Philosophy />
        <Product />
      </div>
    );
  }
}

export default Home;
