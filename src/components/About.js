import React from "react";

import {useTranslation} from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            {t("hi")}
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
          {t("who")}
            <a
              href="https://forms.gle/otojrjBeXRQAp4zu5"
              className="hover:text-gray-400">
              {t("cont")}
            </a>
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./3dhc.jpg"
          />
        </div>
      </div>
    </section>
  );
}
