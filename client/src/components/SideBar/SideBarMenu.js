/**
 * Author: Smriti Mishra
 * Feature: UserDashboard
 */
import { RiFileCopyLine } from "react-icons/ri";
import {
  AiOutlinePieChart,
  AiOutlineFlag,
  AiOutlineSetting,
  AiFillHeart
} from "react-icons/ai";
import { MdOutlineFlight } from "react-icons/md";

export const menu = [
  {
    name: "Blogs",
    link: "/userdashboard-blogs",
    icon: <RiFileCopyLine />,
  },
  {
    name: "Bucket List",
    link: "/userdashboard-bucketlist",
    icon: <AiFillHeart />,
  },
  {
    name: "Flags",
    link: "/userdashboard-flags",
    icon: <AiOutlineFlag />,
  },
  {
    name: "Plans",
    link: "/userdashboard-plans",
    icon: <MdOutlineFlight />,
  },
  {
    name: "Settings",
    link: "/userdashboard",
    icon: <AiOutlineSetting />,
  },
];
