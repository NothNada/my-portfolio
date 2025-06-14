export default function Home() {
  return (
    <section className="min-h-screen relative flex overflow-hidden">

      <div className="py-20 flex flex-col w-full h-full">


        <div className="flex flex-col self-center gap-2 mb-10">
          <div className="uppercase tracking-widest text-3xl md:text-5xl font-extrabold text-white">
            RUBENS GABRIEL
          </div>
          <div className="w-full text-xl md:text-3xl tracking-widest">
            DESENVOLVEDOR FULLSTACK
          </div>
        </div>

        <h1 className="self-center font-bold text-xl">Front-End</h1>

        <div className="grid grid-cols-3 items-center self-center text-6xl [&>*]:w-20 md:flex md:text-8xl gap-10 mt-2 md:[&>*]:w-28">
          
          <i className="devicon-tailwindcss-original colored"></i>
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
          
          <i className="devicon-nextjs-original-wordmark"></i>
          <i className="devicon-typescript-plain text-blue-300"></i>

          <i className="devicon-javascript-plain colored"></i>
 
        </div>

        
        <div className="w-60 h-1 md:w-xl md:h-2 rounded-2xl bg-white/20 self-center mb-10 mt-5"/>


        <h1 className="self-center font-bold text-xl">Back-End</h1>

        <div className="grid grid-cols-3 items-center self-center text-6xl [&>*]:w-20 md:flex md:text-8xl gap-10 mt-2 md:[&>*]:w-28">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
          
          <i className="devicon-nodejs-plain-wordmark text-green-500"></i>
          <i className="devicon-php-plain colored"></i>
          
        </div>

        <div className="w-60 h-1 md:w-xl md:h-2 rounded-2xl bg-white/20 self-center mb-10 mt-5"/>
      </div>
      
    </section>
  );
}
