import React from "react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useTranslation } from 'react-i18next';

export default function Format() {
  const { t } = useTranslation();

  return (
    <section id="format" className="bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <InformationCircleIcon className="w-10 inline-block mb-4 text-yellow-300" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {t("format-title")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("format-desc")}
          </p>
        </div>
        
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/3 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-gray-700">
              <div className="flex-grow text-center">
                <h2 className="text-2xl text-white font-medium mb-3">{t("format-prelim")}</h2>
                <p className="leading-relaxed text-base">
                  {t("format-prelim-desc")}
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 sm:w-1/3 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-gray-700">
              <div className="flex-grow text-center">
                <h2 className="text-2xl text-white font-medium mb-3">{t("format-semi")}</h2>
                <p className="leading-relaxed text-base">
                  {t("format-semi-desc")}
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 sm:w-1/3 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-gray-700">
              <div className="flex-grow text-center">
                <h2 className="text-2xl text-white font-medium mb-3">{t("format-final")}</h2>
                <p className="leading-relaxed text-base">
                  {t("format-final-desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
