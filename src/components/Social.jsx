import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const BottomSocialLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollBottom = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollBottom);
    return () => {
      window.removeEventListener('scroll', checkScrollBottom);
    };
  }, []);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aiabhay/",
      style: "rounded-tl-md rounded-bl-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/tech-abhay",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:kushwahabhay77@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/AbhayKushwahResume.pdf",
      style: "rounded-tr-md rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-gray-800 ${isVisible ? "block" : "hidden"}`}>
      <ul className="flex justify-center items-center">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-center items-center h-12 px-6 mx-2 bg-gray-500 text-white hover:bg-gray-600 duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex items-center"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomSocialLinks;
