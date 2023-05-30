import React from "react";
import { FlexContent, Hero } from "./components";
import { Sales } from "./components";
import { heroapi, popularsales, topratesales, highlight, sneaker } from "./data/data";

const App = () => {
  return (
    <main className="flex flex-col gap-20 relative">
      <Hero heroapi={heroapi} />
      <Sales endPoint={popularsales} ifExists />
      <FlexContent endPoint={highlight} ifExists />
      <Sales endPoint={topratesales} />
      <FlexContent endPoint={sneaker} />
    </main>
  );
};

export default App;
