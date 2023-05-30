import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ ifExists, endPoint: { title, items } }) => {
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-center gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? "xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
              : "xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
