
import React from "react";
import { pilots } from "../data";
import { PaperAirplaneIcon } from "@heroicons/react/solid";
import { useTranslation } from 'react-i18next';

export default function Pilots() {
  const { t } = useTranslation();
  
  return (
    <section id="pilots" className="bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="text-center mb-20">
          <PaperAirplaneIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {t("pilots")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("pilot-desc")}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {pilots.map((pilot) => (
            <div key={pilot.name} className="p-4 md:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <h2 className="text-2xl text-white font-medium mb-1">{pilot.name}</h2>
                <h3 className="text-gray-300 mb-3">{pilot.country} • {pilot.age} years</h3>
                <div className="mb-4">
                  <p className="text-yellow-300">{pilot.helicopter.manufacturer}</p>
                  <p className="text-white">{pilot.helicopter.model}</p>
                </div>
                <div className="flex flex-wrap justify-center">
                  {pilot.sponsors.map((sponsor) => (
                    <span key={sponsor} className="px-2 py-1 m-1 text-sm bg-gray-700 rounded-full text-white">
                      {sponsor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
