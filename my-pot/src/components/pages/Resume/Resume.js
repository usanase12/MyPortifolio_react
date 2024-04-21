import React from "react";
import Image1 from "../../../images/p1.PNG";
import Image2 from "../../../images/p2.PNG";
import Image3 from "../../../images/p3.PNG";
const BlogGrid = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-medium text-center text-gray-800 mb-4 relative">
        <span className="font-normal">My</span> Resume
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Blog */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img alt="" src={Image1} className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Here is My portfolio Project
              </h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Delve into my portfolio to explore an array of projects
              meticulously crafted using JavaScript and Tailwind CSS, while also
              gaining insight into my personal journey and unwavering passion
              for technology and innovation.
            </p>
            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        {/* Second Blog */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img alt="" src={Image2} className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                A food website
              </h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Explore my portfolio to discover a diverse range of projects,
              including a dynamic food website meticulously crafted using
              JavaScript and Tailwind CSS, while also gaining insight into my
              personal journey and unwavering passion for technology and
              innovation.
            </p>
            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        {/* Third Blog */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img alt="" src={Image3} className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                A dice Roll Game.
              </h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Experience the excitement of a captivating dice roll game,
              skillfully developed using JavaScript. Immerse yourself in the
              thrill of chance and strategy, gaining insight into my coding
              prowess and passion for crafting interactive experiences.
            </p>
            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogGrid;
