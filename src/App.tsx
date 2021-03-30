import React from 'react'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <main className="mx-auto mt-32 w-11/12 md:w-9/12 md:max-w-screen-md">
        <h1 className="text-6xl font-bold">Senlima Sun</h1>
        <h2 className="mb-8 text-4xl font-bold">
          A product minded web developer
        </h2>
        <div className="mb-6 w-full flex">
          <a
            className="mr-8 px-4 py-2 rounded-lg hover:bg-black hover:text-white hover:shadow-lg hover:border-none transition duration-150 ease-in-out"
            href="https://github.com/senlima4"
          >
            Github
          </a>
          <a
            className="mr-8 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white hover:shadow-lg hover:border-none transition duration-150 ease-in-out"
            href="https://twitter.com/senlima4"
          >
            Twitter
          </a>
          <a
            className="mr-4 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white hover:shadow-lg hover:border-none transition duration-150 ease-in-out"
            href="https://senlima.blog"
          >
            Blog
          </a>
        </div>
        <section className="mb-4 flex flex-wrap gap-2">
          <div className="mr-3 px-2 py-1 rounded-xl text-blue-500 shadow-lg">
            # React
          </div>
          <div className="mr-3 px-2 py-1 rounded-xl text-blue-700 shadow-lg">
            # TypeScript
          </div>
          <div className="mr-3 px-2 py-1 rounded-xl text-green-500 shadow-lg">
            # Nodejs
          </div>
          <div className="mr-3 px-2 py-1 rounded-xl text-blue-400 shadow-lg">
            # Python
          </div>
          <div className="px-2 py-1 rounded-xl text-pink-500 shadow-lg">
            # GraphQL
          </div>
        </section>
        <section className="p-8 rounded-xl shadow-xl text-lg font-medium">
          <p>Had Full-Stack development experience.</p>
          <p>Mainly develop web product with React.</p>
          <p>Keep discover new idea and technologies.</p>
          <p>Ability to keep up in an extremely fast-paced environment.</p>
        </section>
      </main>
      <footer className="mx-auto mt-32 w-11/12 md:w-9/12 md:max-w-screen-md h-28">
        <div>
          <p>Copyright © 2021 Senlima Sun</p>
          <p>Made with react, tailwindcss and vitejs</p>
        </div>
      </footer>
    </div>
  )
}
