import React from "react";
import { useTranslation } from 'react-i18next';
import { sponsors } from "../data";
import { StarIcon } from "@heroicons/react/solid";

export default function Sponsors() {
  const { t } = useTranslation();

  return (
    <section id="sponsors" className="bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <StarIcon className="w-10 inline-block mb-4 text-yellow-300" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {t("sponsors")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("sponsors-desc")}
          </p>
        </div>
        
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="p-2 sm:w-1/2 w-full">
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-gray-700"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="h-12 w-24 object-contain mr-4"
                />
                <span className="title-font font-medium text-white">
                  {sponsor.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
