import React from "react";
import Image from "next/image";
import Link from "next/link";
import Twitter from "/public/assets/social_twitter.png";
import Facebook from "/public/assets/social_facebook.png";
import Instagram from "/public/assets/social_instagram.png";
import Google from "/public/assets/social_google.png";
import Discord from "/public/assets/social_discord.png";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex items-center justify-between gap-7">
      <Link
        href={"https://twitter.com/w3journey"}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="twitter"
          src={Twitter}
          width={20}
          height={20}
        />
      </Link>
      <Link href={"https://facebook.com"} target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="facebook"
          src={Facebook}
          width={20}
          height={20}
        />
      </Link>
      <Link href={"https://instagram.com"} target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="instagram"
          src={Instagram}
          width={20}
          height={20}
        />
      </Link>
      <Link href={"https://google.com"} target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="google"
          src={Google}
          width={20}
          height={20}
        />
      </Link>
      <Link href={"https://discord.com"} target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="discord"
          src={Discord}
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
