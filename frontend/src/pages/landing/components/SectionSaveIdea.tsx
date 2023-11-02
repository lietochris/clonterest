export function SectionSaveIdea() {
  return (
    <section className="bg-green-200 h-[calc(100dvh-80px)] flex flex-col lg:flex-row">
      <div className="flex-1 flex justify-center items-center">
        <div className="text-center text-green-800 flex flex-col items-center gap-4 p-1">
          <h2 className="text-6xl font-bold">Guarda las ideas que te gusten</h2>
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
      <div className="flex-1 flex justify-center items-center">
        <div
          style={{ width: "687px", height: "695px" }}
          className="relative my-5"
        >
          <div className="flex absolute">
            <img
              style={{ width: "400px", height: "420px" }}
              src="/images/landing/future-home-vibes.png"
              alt=""
            />
            <div className="absolute mx-12" style={{ top: "100px" }}>
              <h3 className="text-white text-6xl font-medium mb-2">
                Mi futuro hogar con helechos
              </h3>
              <div className="flex gap-3">
                <img
                  style={{ width: "90px", height: "130px" }}
                  src="/images/landing/future-home1.png"
                  alt=""
                />
                <img
                  style={{ width: "90px", height: "130px" }}
                  src="/images/landing/future-home2.png"
                  alt=""
                />
                <img
                  style={{ width: "90px", height: "130px" }}
                  src="/images/landing/future-home3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="absolute right-0">
            <img
              style={{ width: "223px", height: "235px" }}
              src="/images/landing/scandinavian-bedroom.png"
              alt=""
            />
            <h3
              className="text-white text-3xl font-medium absolute mx-5"
              style={{ top: "140px" }}
            >
              Mi dormitorio escandinavo
            </h3>
          </div>

          <div className="absolute" style={{ top: "280px", left: "447px" }}>
            <img
              src="/images/landing/deck-of-dreams.png"
              style={{ width: "165px", height: "173px" }}
              alt=""
            />
            <h3
              className="text-white text-xl font-medium absolute mx-5"
              style={{ top: "95px" }}
            >
              El deck de mis sueños
            </h3>
          </div>

          <div className="absolute" style={{ top: "450px", left: "159px" }}>
            <img
              style={{ width: "223px", height: "235px" }}
              src="/images/landing/serve-my-drinks.png"
              alt=""
            />
            <h3
              className="text-white font-medium text-3xl absolute mx-5"
              style={{ top: "130px" }}
            >
              Tragos con estilo
            </h3>
          </div>

          <div className="absolute" style={{ top: "490px", left: "429px" }}>
            <img
              style={{ width: "223px", height: "235px" }}
              src="/images/landing/bathroom-upgrade.png"
              alt=""
            />
            <h3
              className="absolute text-white font-medium text-3xl mx-5"
              style={{ top: "90px" }}
            >
              Nuestra remodelación del baño
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
