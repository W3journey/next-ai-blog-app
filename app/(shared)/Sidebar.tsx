import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Image from "next/image";
import Ad2 from "public/assets/ad-2.png";
import AboutProfile from "public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="px-5 py-3 text-xs font-bold text-center bg-wh-900 text-wh-50">
        Subscribe and Follow
      </h4>
      <div className="mx-5 my-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="my-8 bg-wh-900">
        <Image
          className="hidden w-full my-8 md:block"
          alt="advert-2"
          placeholder="blur"
          src={Ad2}
          width={500}
          height={1000}
        />
      </div>
      <h4 className="px-5 py-3 text-xs font-bold text-center bg-wh-900 text-wh-50">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          className="object-cover w-[500px] h-[250px]"
          placeholder="blur"
          src={AboutProfile}
          alt="about-profile"
        />
      </div>
      <h4 className="px-5 py-3 font-bold text-center text-wh-500">
        Geoffrey Epstein
      </h4>
      <p className="text-sm text-center text-wh-500">
        Dolor ut dolor occaecat minim deserunt ullamco officia sit.
      </p>
    </section>
  );
};

export default Sidebar;
