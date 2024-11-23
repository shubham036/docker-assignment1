/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import BrandIcon from "./BrandIcon";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <div className="bg-black-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-black font-light">
              By Omkar Tupere
              <br />
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Office</h1>
            <p className="text-lg text-black font-light">
              omkartupere@gmail.com
            </p>
            <p className="text-lg text-black font-light">Pune</p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Social</h1>
            <Button
              href="https://www.instagram.com/"
              type="link"
              target="_blank"
              className="flex text-lg text-black font-light hover:underline"
              isExternal
            >
              Instagram
            </Button>
            <Button
              href="https://www.linkedin.com/in/"
              type="link"
              target="_blank"
              className="flex text-lg text-black font-light hover:underline"
              isExternal
            >
              LinkedIn
            </Button>
            <Button
              href="https://github.com/"
              type="link"
              target="_blank"
              className="flex text-lg text-black font-light hover:underline"
              isExternal
            >
              Github
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-black font-light">
            Copyright 2024 - All rights reserved - WeMakeDevs
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-black font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button
              href="https://github.com/"
              type="link"
              target="_blank"
              className="text-lg text-theme-purple font-light"
              isExternal
            >
              Omkar Tupere
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
