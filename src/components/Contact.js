import React from "react";
import { MapIcon } from "@heroicons/react/solid";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <MapIcon className="w-10 inline-block mb-4 text-yellow-300" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {t("location")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("location-desc")}
          </p>
        </div>

      <div className="flex flex-col sm:flex-row">
  <div className="w-full h-64 sm:h-auto aspect-square bg-gray-900 rounded-lg overflow-hidden relative sm:w-1/2 md:w-1/2 lg:w-2/3 sm:mr-10 mb-8 sm:mb-0">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358360.02703333716!2d7.9994416734375084!3d45.43579619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a7c34e3c1f3%3A0x741972bb50744352!2sAEROTEAM%20Novara!5e0!3m2!1sit!2stw!4v1745639761449!5m2!1sit!2stw"
            />
          </div>
          
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div className="mb-10">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                {t("address")}
              </h2>
              <p className="mt-1">
                Str. Cimitero, <br />
                28100 Novara NO, Italy
              </p>
            </div>
            <p className="leading-relaxed mb-10">
              {t("contact-desc")}
            </p>
            <a href="mailto:info@3dhc.it" className="text-yellow-300 text-lg hover:text-yellow-400">
              info@3dhc.it
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
