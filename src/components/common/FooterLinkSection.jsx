import React from "react";
import { Link } from "react-router";

const FooterLinkSection = ({ title, links }) => {
  return (
    <div className="space-y-2">
      <h4 className="text-xl text-white font-black border-b-[3px] border-b-white p-2.5">
        {title}
      </h4>
      <div>
        <div>
          {links.map((link) => (
            <Link key={link.id} to={link.url}>
              <div className="p-2.5 text-center">{link.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLinkSection;
