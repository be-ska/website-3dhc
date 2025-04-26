import React from "react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useTranslation } from 'react-i18next';

export default function Format() {
  const { t } = useTranslation();

  return (
    <section id="format" className="bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="text-center mb-20">
          <InformationCircleIcon className="w-10 inline-block mb-4 text-yellow-300" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {t("format-title")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("format-desc")}
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <h2 className="text-2xl text-white font-medium mb-3">{t("format-prelim")}</h2>
              <p className="leading-relaxed text-base">
                {t("format-prelim-desc")}
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <h2 className="text-2xl text-white font-medium mb-3">{t("format-semi")}</h2>
              <p className="leading-relaxed text-base">
                {t("format-semi-desc")}
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <h2 className="text-2xl text-white font-medium mb-3">{t("format-final")}</h2>
              <p className="leading-relaxed text-base">
                {t("format-final-desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
