import Image from "next/image";
import profileImage from "@/components/profile-image.jpeg";
import LogoImage from "@/components/assets/whatBytesLogo.png";

const Header = () => {
  return (
    <header className="bg-white border-b-2 max-w-screen p-4 flex justify-between items-center">
      <div className="text-xl font-bold flex items-center ">
        {" "}
        <Image src={LogoImage} height={15} width={45} />{" "}
        <h1 className="text-2xl">WhatBytes</h1>
      </div>

      <div></div>
      <div className="flex items-center border-2 border-gray-200 rounded-lg p-1">
        {/* Couldn't find the same image of Rahil Sir, so used the one I got from Linkedin to keep it as accurate as possible */}
        <Image
          src={profileImage}
          height={25}
          width={25}
          className="rounded-full"
        />
        <span className="ml-2 font-bold ">Rahil Siddique</span>
      </div>
    </header>
  );
};

export default Header;
