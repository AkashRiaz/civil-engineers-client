import React, { useState } from "react";
import CountUp from "react-countup";
import Scrolltrigger from "react-scroll-trigger";
import "./Countup.css";
const Countup = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className=" bg-sky-100 h-96 grid md:grid-cols-4 grid-cols-1 justify-center items-center md:relative my-48">
        <div className="col-span-2">
            <h2>Akash</h2>
        </div>
        <div className="col-span-2">
        <Scrolltrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="md:absolute top-32">
      <div className="text-slate-950 grid md:grid-cols-3 grid-cols-2 md:gap-0 gap-y-2 items-center md:relative md:ml-0 ml-7">
        <div className="bg-client flex justify-center items-center md:absolute top-3">
          <div className="p-4 flex flex-col justify-center items-center">
            <h2>Happy Client</h2>
            {counterOn && (
              <span className="text-3xl">
                <CountUp start={0} end={200} duration={2} />+
              </span>
            )}
          </div>
        </div>
        <div className="bg-client flex justify-center items-center md:absolute left-28">
          <div className="p-4 flex flex-col justify-center items-center">
            <h2>Happy Client</h2>
            {counterOn && (
              <span className="text-3xl">
                <CountUp start={0} end={200} duration={2} />+
              </span>
            )}
          </div>
        </div>
        <div className="bg-client flex justify-center items-center md:absolute left-56 top-3">
          <div className="p-4 flex flex-col justify-center items-center">
            <h2>Happy Client</h2>
            {counterOn && (
              <span className="text-3xl">
                <CountUp start={0} end={200} duration={2} />+
              </span>
            )}
          </div>
        </div>
        <div className="bg-client flex justify-center items-center md:absolute left-28 top-24">
          <div className="p-4 flex flex-col justify-center items-center">
            <h2>Happy Client</h2>
            {counterOn && (
              <span className="text-3xl">
                <CountUp start={0} end={200} duration={2} />+
              </span>
            )}
          </div>
        </div>
      </div>
      </div>
    </Scrolltrigger>
        </div>
    </div>
  );
};

export default Countup;
