export function SectionSaveIdea() {
  return (
    <section className="bg-green-200 h-[calc(100dvh-80px)] flex flex-col-reverse md:flex-row">
      <div className="flex-1 flex justify-center items-center">
        <div className="text-center text-green-800 flex flex-col items-center gap-4 p-1">
          <h2 className="text-2xl md:text-6xl font-bold">
            Guarda las ideas que te gusten
          </h2>
          <p className="text-2xl max-w-sm">
            Recopila tus favoritos para volver a verlos después.
          </p>
          <a
            className="bg-green-800 text-green-200 px-4 py-2.5 rounded-full font-semibold"
            href=""
          >
            Explorar
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="relative my-5 w-[250px] h-[211px] xs:w-[320px] xs:h-[400px] md:w-[687px] md:h-[695px]">
          <div className="flex absolute w-[101px] h-[111px]  xs:w-[201px] xs:h-[211px] md:w-[400px] md:h-[420px]">
            <img
              className="w-full h-full"
              src="/images/landing/future-home-vibes.png"
              alt=""
            />
            <div className="absolute xs:mx-1 md:mx-12 left-[10px] top-3 xs:top-10 md:top-[100px]">
              <h3 className="text-white text-sm xs:text-2xl md:text-6xl font-medium mb-2">
                Mi futuro hogar con helechos
              </h3>
              <div className="flex gap-3">
                <img
                  className="w-[12px] h-[17px] xs:w-[45px] xs:h-[65px] md:w-[90px] md:h-[130px]"
                  src="/images/landing/future-home1.png"
                  alt=""
                />
                <img
                  className="w-[12px] h-[17px] xs:w-[45px] xs:h-[65px] md:w-[90px] md:h-[130px]"
                  src="/images/landing/future-home2.png"
                  alt=""
                />
                <img
                  className="w-[12px] h-[17px] xs:w-[45px] xs:h-[65px] md:w-[90px] md:h-[130px]"
                  src="/images/landing/future-home3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="absolute right-0 xs:right-[-150px] xs:top-[38px] md:right-0 w-[78px] h-[80px] xs:w-[114px] xs:h-[119px] md:w-[223px] md:h-[235px]">
            <img
              className="w-full h-full"
              src="/images/landing/scandinavian-bedroom.png"
              alt=""
            />
            <h3 className="text-white text-[10px] xs:text-sm md:text-3xl font-medium absolute mx-1 xs:mx-3 md:mx-5 top-10 xs:top-12 md:top-[140px]">
              Mi dormitorio escandinavo
            </h3>
          </div>

          <div className="absolute hidden xs:block top-[100px] xs:top-[168px] left-[210px] xs:left-[220px] md:top-[280px] md:left-[447px] w-[85px] h-[89px] md:w-[165px] md:h-[173px]">
            <img
              src="/images/landing/deck-of-dreams.png"
              className="w-full h-full"
              alt=""
            />
            <h3 className="text-white text-xs xs:text-sm md:text-xl font-medium absolute mx-2 md:mx-5 top-11 xs:top-6 md:top-[95px]">
              El deck de mis sueños
            </h3>
          </div>

          <div className="absolute top-[130px] xs:top-[225px] md:top-[450px] xs:left-[80px] md:left-[159px] w-[105px] h-[109px] md:w-[223px] md:h-[235px]">
            <img
              className="w-full h-full"
              src="/images/landing/serve-my-drinks.png"
              alt=""
            />
            <h3 className="text-white font-medium text-sm md:text-3xl absolute mx-4 md:mx-5 top-14 md:top-[130px]">
              Tragos con estilo
            </h3>
          </div>

          <div className="absolute left-[145px] top-[100px] xs:top-[283px] xs:left-[205px] md:top-[460px] md:left-[429px] w-[105px] h-[109px] md:w-[223px] md:h-[235px]">
            <img src="/images/landing/bathroom-upgrade.png" alt="" />
            <h3 className="absolute text-white font-medium text-sm md:text-3xl mx-1 xs:mx-2 top-10 md:top-[90px]">
              Nuestra remodelación del baño
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
