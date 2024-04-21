import React from "react";
import "./Service.css";
import { IoLogoHtml5 } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaRProject } from "react-icons/fa6";

const BlogGrid = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-medium text-center text-gray-800 mb-4 relative">
          <span className="font-normal">My</span> Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* First Blog */}
          <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <span className="inline-block rounded bg-green-600 p-2 text-white">
              <IoLogoHtml5 />
            </span>
            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                HTML/CSS.
              </h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              As a frontend developer, I specialize in advanced HTML and CSS
              techniques to create visually stunning and highly functional
              websites. My expertise includes semantic HTML, CSS Flexbox and
              Grid, responsive design, CSS preprocessors like Sass, and
              accessibility best practices. I'm passionate about creating
              exceptional user experiences and advocating for inclusive web
              design principles.
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
          </article>

          {/* Second Blog */}
          <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <span className="inline-block rounded bg-green-600 p-2 text-white">
              <FaDatabase />
            </span>
            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">DB.</h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Throughout my journey, I've also mastered JavaScript and utilized
              React.js to develop this very portfolio you're viewing. Combining
              my expertise in HTML/CSS, JavaScript, React, and even delving into
              backend tasks with Java, I've crafted dynamic and engaging web
              experiences. From frontend design to backend functionality, I
              strive to leverage my diverse skill set to create compelling
              projects
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
          </article>

          {/* Third Blog */}
          <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <span className="inline-block rounded bg-green-600 p-2 text-white">
              <FaRProject />
            </span>
            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                PROJECT.
              </h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Through various projects, I've honed my skills in HTML/CSS,
              JavaScript, React, and Java for frontend and backend tasks. From
              crafting visually appealing interfaces to developing powerful
              backend systems, I bring versatility and passion to every project
              I undertake, creating impactful web solutions
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
          </article>

          {/* Fourth Blog */}
          <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <span className="inline-block rounded bg-green-600 p-2 text-white">
              <SiJavascript />
            </span>
            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">JS.</h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
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
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
