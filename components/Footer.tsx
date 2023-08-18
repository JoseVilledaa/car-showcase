import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants/info";

export const Footer = () => {
  return (
    <>
      <footer
        className="flex flex-col
    text-black-100 mt-5 border-t
    border-gray-100"
      >
        <div
          className="flex max-md: flex-col flex-wrap 
      justify-between gap-5 sm:px-16 px-6 py-10"
        >
          <div
            className="flex flex-col justify-start
        items-start gap-6"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />

            <p className="text-base text-gray-700">
              Car Hub <br />
              All Rights Reserved &copy; 
            </p>
          </div>

          <div className="footer__links">
            {footerLinks.map((l) => (
              <div key={l.title} className="footer__link">
                <h3 className="font bold">{l.title}</h3>
                {l.links.map((i) => (
                  <Link
                    key={i.title}
                    href={i.url}
                    className="text-base text-gray-500"
                  >
                    {i.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div
            className="flex justify-between items-center flex-wrap mt-10 border-t
          border-gray-100 sm:px-16 px-6 py-10">
            <p>
              @2023 Car Hub. All Rights Reserved.
            </p>
            <div className="footer__copyrights-link">
              <Link href="/terms" className="text-base text-gray-500"> Privacy Policy</Link>
              <Link href="/terms" className="text-base text-gray-500"> Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
