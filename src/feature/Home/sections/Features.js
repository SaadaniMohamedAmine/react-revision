import React from 'react';

function Features() {
  return (
    <>
      <div className="px-20">
        <h1 className="my-10 text-5xl font-bold">Our Features</h1>
      </div>
      <div className="flex flex-col md:flex-row md:py-16 px-5 md:px-16 text-center">
        <div className="mr-2 l md:p-3 cursor-pointer md:hover:scale-150 transition ease-in duration-800">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-full mr-2 rounded"
            alt=""
          />
          <p className="text-zinc-800">Option 1 Meet</p>
        </div>
        <div className="mr-2 mt-5 md:p-3 cursor-pointer md:hover:scale-150 transition ease-in duration-800">
          <img
            src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            className="w-full mr-2 rounded"
            alt=""
          />
          <p className="text-zinc-800">Option 2 Meet</p>
        </div>
        <div className="mr-2 md:p-3 cursor-pointer md:hover:scale-150 transition ease-in duration-800">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-full mr-2 rounded"
            alt=""
          />
          <p className="text-zinc-800">Option 3 Meet</p>
        </div>
        <div className="mr-2 mt-5 md:p-3 cursor-pointer md:hover:scale-150 transition ease-in duration-800">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            className="w-full mr-2 rounded"
            alt=""
          />
          <p className="text-zinc-800">Option 4 Meet</p>
        </div>
      </div>
    </>
  );
}

export default Features;
