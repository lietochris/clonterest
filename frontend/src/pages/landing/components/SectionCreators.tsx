export function SectionCreators() {
  return (
    <section className="bg-red-100 h-[calc(100dvh-80px)] flex flex-col md:flex-row relative z-10">
      <div className="flex-1 relative">
        <img
          className="object-cover h-full"
          src="/images/landing/shop.png"
          alt=""
        />
        <div className="absolute bottom-[60px] sm:bottom-[80px] left-[50px] md:bottom-[140px] md:left-[84px]">
          <img
            className="object-cover rounded-2xl w-[120px] md:w-[215px] md:h-[383px]"
            src="/images/landing/creator-pin-img.png"
            alt=""
          />
          <img
            className="absolute w-[70px] md:w-[96px] left-[-36px] bottom-[-36px]"
            src="/images/landing/creator-avatar.png"
            alt=""
          />
          <div className="absolute text-white flex flex-col w-[200px] md:w-[125px] left-[60px]">
            <span className="font-medium">Scout the City</span>
            <span className="font-extralight">56.7 mil seguidores</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-md flex flex-col items-center gap-1 xs:gap-3 lg:gap-5 text-center text-red-700">
          <h2 className="text-xl xs:text-4xl lg:text-6xl font-bold">
            Miralo, créalo, pruébalo, hazlo
          </h2>
          <p className="lg:text-2xl">
            Lo mejor de Pinterest es descubrir cosas e ideas nuevas de personas
            de todo el mundo.
          </p>
          <a
            className="bg-red-700 text-red-100 px-4 py-2.5 rounded-full font-semibold"
            href=""
          >
            Explorar
          </a>
        </div>
      </div>
    </section>
  );
}
