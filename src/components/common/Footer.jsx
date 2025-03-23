import { RiFacebookCircleFill, RiFacebookCircleLine } from "react-icons/ri";
import { FOOTER_LINKS } from "../../constant/data";
import Rectangle1 from "../../images/rectangle-1.png";
import Rectangle2 from "../../images/rectangle-2.png";
import FooterLinkSection from "./FooterLinkSection";
import Logo from "./Logo";
import { AiFillInstagram, AiOutlineInstagram } from "react-icons/ai";
import { TfiTwitter, TfiTwitterAlt } from "react-icons/tfi";
import { IoCallOutline, IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="relative pt-32">
      <img src={Rectangle1} alt="rect-1" className="absolute top-12 z-10" />
      <img src={Rectangle2} alt="rect-2" className="absolute top-6 z-0" />
      <div className="flex flex-col md:flex-wrap md:flex-row relative z-20 bg-neutral-900 px-5 py-8 items-center gap-8">
        <div className="md:mx-auto md:max-w-80 text-center md:text-left">
          <h4 className="text-2xl font-black text-white">About</h4>
          <p>
            Melodies is a website that has been created for over{" "}
            <span className="text-primary-400">5 year's</span> now and it is one
            of the most famous music player website's in the world. in this
            website you can listen and download songs for free. also of you want
            no limitation you can buy our{" "}
            <span className="text-secondary-400">premium pass's</span>.
          </p>
        </div>
        <div className="mx-auto justify-center flex gap-5 items-start">
          {FOOTER_LINKS?.map((item) => (
            <FooterLinkSection title={item.title} links={item.links} />
          ))}
        </div>
        <div className="mx-auto">
          <div className="max-w-40 ml-auto space-y-6 text-center">
            <Logo />
            <div className="flex gap-2 justify-between items-center">
              <div className="group cursor-pointer">
                <RiFacebookCircleLine className="group-hover:hidden size-6" />
                <RiFacebookCircleFill className="hidden group-hover:block size-6" />
              </div>
              <div className="group cursor-pointer">
                <AiOutlineInstagram className="group-hover:hidden size-6" />
                <AiFillInstagram className="hidden group-hover:block size-6" />
              </div>
              <div className="group cursor-pointer">
                <TfiTwitter className="group-hover:hidden size-6" />
                <TfiTwitterAlt className="hidden group-hover:block size-6" />
              </div>
              <div className="group cursor-pointer">
                <IoCallOutline className="group-hover:hidden size-6" />
                <IoCallSharp className="hidden group-hover:block size-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
