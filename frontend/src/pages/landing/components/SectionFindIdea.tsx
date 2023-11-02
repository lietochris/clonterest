import { SearchIcon } from "../../../components/icons/SearchIcon";

export function SectionFindIdea() {
  return (
    <section className="bg-yellow-200 h-[calc(100dvh-80px)] flex flex-col lg:flex-row relative z-10">
      <div className="flex-1 flex justify-center items-center">
        <a
          href="#"
          className="relative md:w-[537px] md:h-[611px] -mt-5 md:mt-5 w-[80%] h-[325px] max-w-[300px] md:max-w-full"
        >
          <img
            className="absolute md:top-0 md:right-4 top-[12.5%] right-[10%] w-[87px] md:w-[178px]"
            src="/images/landing/topRight.png"
            alt=""
          />
          <img
            className="absolute right-[10%] md:right-0 bottom-0 w-[80px] md:w-[164px]"
            src="/images/landing/right.png"
            alt=""
          />
          <img
            className="absolute left-0 top-[35%] md:top-[150px] w-[100px] md:w-[204px]"
            src="/images/landing/left.png"
            alt=""
          />
          <img
            className="absolute md:w-72 w-[146px] md:top-[88px] md:left-[148px] top-[25%] left-[25%]"
            src="/images/landing/center.png"
            alt=""
          />
          <div className="absolute top-1/2 md:top-[231px] left-[15%] md:left-[103px] flex justify-center items-center gap-1 bg-white text-red-900 px-2 md:px-5 py-3 md:py-8 rounded-full text-sm md:text-xl font-bold md:font-black">
            <SearchIcon className="h-6 w-6" />
            <span>Receta fácil de pollo</span>
          </div>
        </a>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="text-red-600 px-5 text-center flex flex-col items-center gap-1 md:gap-5 max-w-xl">
          <h1 className="text-3xl md:text-6xl font-bold">Busca una idea</h1>
          <p className="md:text-2xl">
            ¿Qué quieres probar ahora? Piensa en algo que te guste, como “receta
            fácil con pollo”, y ve lo que encuentras.
          </p>
          <a
            className="bg-red-600 text-yellow-200 px-4 py-2.5 rounded-full font-semibold"
            href=""
          >
            Explorar
          </a>
        </div>
      </div>
    </section>
  );
}
