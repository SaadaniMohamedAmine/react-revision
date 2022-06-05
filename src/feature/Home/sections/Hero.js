import React from "react";

const Hero = () => {
  return (
    <div className="py-20 bg-stone-100">
      <div className="px-20">
        <div className="flex justify-between items-center">
          <div className="px-5">
            <div className="text-4xl mb-5 mt-n16">🚀</div>

            <h1 className="ls-tight font-bolder display-3 mb-5 text-5xl font-bold">
              Read more. or Check fast.
            </h1>
            <p className="text-md mb-10">
              With a scalable and fast news app, you can check the news daily.In
              all the topics,a good resume and trusted source make you enough
              informed.
            </p>
            <div className="mx-n2">
              <a className="px-4 py-2 bg-stone-400 text-white rounded cursor-pointer hover:bg-stone-300">
                Check News
              </a>

              <a className="px-6 py-2 border border-stone-400 ml-3 rounded cursor-pointer hover:border-stone-300">
                Info Up
              </a>
            </div>
          </div>
          <div className="rounded shadow-xl px-5">
            <div className="w-xl-12/10 position-relative">
              <span className="d-none d-lg-block position-absolute top-0 start-0 transform translate-x-n32 translate-y-n16 w-2/3 h-2/3 bg-warning opacity-20 rounded-circle filter blur-50"></span>
              <span className="d-none d-xl-block position-absolute bottom-0 end-0 transform translate-x-16 translate-y-16 w-32 h-32 bg-warning opacity-60 rounded-circle filter blur-50"></span>
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=900&q=80"
                className="shadow-4 rounded position-relative overlap-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
