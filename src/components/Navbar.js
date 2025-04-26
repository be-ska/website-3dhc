import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import {useTranslation} from 'react-i18next';
//import { Menu } from '@headlessui/react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  
  function changeLan() {
    if (i18n.language === 'en')
    {
      i18n.changeLanguage('it');
    }
    else
    {
      i18n.changeLanguage('en');
    }
  }
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            3DHC 2025
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#format" className="mr-5 hover:text-gray-400">
            Format
          </a>
          <a href="#contact" className="mr-5 hover:text-gray-400">
            {t("location")}
          </a>
          { <a href="#sponsors" className="mr-5 hover:text-gray-400">
            {t("sponsors")}
          </a> }
          <a href="#pilots" className="mr-5 hover:text-gray-400">
            {t("pilots")}
          </a>
          <button onClick={() => changeLan()} className="md:mr-5 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center hover:text-gray-400">
            {t("lan")}
          </button>
        </nav>
        <nav>
          <a
            href="https://forms.gle/otojrjBeXRQAp4zu5"
            className="inline-flex items-center py-1 px-3 focus:outline-none hover:text-gray-400">
            {t("sub")}
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>          
          <a
            href="https://www.facebook.com/profile.php?id=61554275167930"
            className="inline-flex items-center py-1 px-3 focus:outline-none hover:text-gray-400">
            Facebook
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>

        </nav>
      </div>
    </header>
  );
}
