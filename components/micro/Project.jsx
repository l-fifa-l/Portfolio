import React from 'react';
import projects from '../../constants/projectsData';

export default function Project() {
  return (
    <div>
      {projects.map((item) => (
        <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900 py-12 justify-center">
          <div className="bg-white dark:bg-gray-800 mx-auto lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
              <div
                className="h-64 bg-cover lg:rounded-lg lg:h-full"
                style={{
                  backgroundImage: `url(${item.imgUrl})`,
                  // backgroundImage:
                  //   "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                }}
              ></div>
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                {/* Build Your New{' '}
                <span className="text-indigo-600 dark:text-indigo-400">
                Idea
              </span> */}
                {item.title}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>

              <div className="mt-8">
                <a
                  href={item.link}
                  className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
                >
                  Checkout GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
