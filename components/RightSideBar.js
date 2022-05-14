import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";
import React from "react";
import { RiVideoAddFill } from "react-icons/ri";

const RightSideBar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-300">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-300">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-300">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Billy" status="Online"/>
      <Contacts src="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Alice" status="Online"/>
      <Contacts src="https://images.pexels.com/photos/937416/pexels-photo-937416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Rina" status="Offline"/>
    </div>
  );
};

export default RightSideBar;
