import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";

import icon9126 from "../assets/images/icon9126.png";
import icon9127 from "../assets/images/icon9126.png";
import icon9128 from "../assets/images/icon9126.png";

export const service = [
  {
    icon: <img className="w-12" src={icon9126} alt="icon" />,
    title: "Instant Deposit",
    desc: "Deposit Naira Directly from your bank account, and deposit crypto instantly from external wallet",
  },
  {
    icon: <img className="w-12" src={icon9127} alt="icon" />,
    title: "Naira Withdrawals",
    desc: "Recieve Naira Instantly, directly to your bank account at withdrawal",
  },
  {
    icon: <img className="w-12" src={icon9128} alt="icon" />,
    title: "Trade",
    desc: "Buy and sell cryptocurrencies at the best rates everyday",
  },
  {
    icon: "",
    title: "Dollar cards To the Rescue ",
    desc: "Pay for all your online subscriptions with our dollar cards ",
  },
];

export const socials = [
  {
    name: "Twiiter",
    link: "https://twitter.com/onyxswap",
    icon: <ImTwitter className="w-5 h-5" />,
    url: "",
  },
  {
    name: "Facebook",
    link: "/",
    icon: <ImFacebook className="w-5 h-5" />,
    url: "",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/onyxswap",
    icon: <ImInstagram className="w-5 h-5" />,
    url: "",
  },
];
