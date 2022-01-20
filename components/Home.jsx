import userData from '../constants/data';

export default function Home() {
  return (
    <section>
      <div className="flex-1 text-center dark:bg-gray-800 font-mono bg-white relative">
        <div className="flex relative pt-20 items-center">
          <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-2">
            <div className="flex flex-col">
              <img
                className="w-28 mx-auto rounded-full"
                src={userData.avatar}
                alt=""
              />
              <p className="text-3xl my-3 text-center dark:text-white">
                Hi, I&#x27;m Vivek 🤘
              </p>
              <h2 className="max-w-3xl text-4xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                Building digital products,brands,and experiences.
              </h2>
              <div className="flex items-center justify-center mt-4">
                <a
                  href="mailto:starktestic@gmail.com"
                  className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white border-2 border-gray-800 dark:border-white text-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 dark:hover:text-white text-md"
                >
                  CONNECT WITH ME
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
