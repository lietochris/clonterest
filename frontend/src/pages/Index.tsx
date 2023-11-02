import { ChevronDownIcon } from "../components/icons/ChevronDownIcon";
import { InformationCircleIcon } from "../components/icons/InformationCircleIcon";
import { SearchIcon } from "../components/icons/SearchIcon";

export function Index() {
  return (
    <>
      <header className="py-6 px-4 flex justify-between items-center bg-white fixed w-full h-20 top-0 z-10">
        <div className="text-red-600 font-bold">Clonterest</div>
        <div className="flex justify-center items-center">
          <nav className="mr-8 hidden md:block">
            <ul className="flex gap-8 [&>li>a]:flex items-center [&>li>a]:font-medium">
              <li>
                <a href="">Información</a>
              </li>
              <li>
                <a href="">Empresa</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="flex gap-1 [&>li>a]:flex items-center">
              <li>
                <a
                  className="rounded-full bg-red-600 text-white px-4 py-2"
                  href=""
                >
                  Iniciar sesión
                </a>
              </li>
              <li>
                <a
                  className="rounded-full bg-gray-200 text-black px-4 py-2"
                  href=""
                >
                  Regístrate
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="snap-y snap-mandatory h-[calc(100dvh-80px)] w-full overflow-auto relative mt-20">
        <div className="snap-center">
          <section className="bg-red-200 h-[calc(100dvh-80px)] flex flex-col">
            <div className="flex-1 flex justify-center items-center">
              <div className="text-6xl font-semibold">
                <h1>Descubre tu proximo</h1>
                <h2 className="text-emerald-600">Proyecto de bricolaje</h2>
              </div>
            </div>
            <div className="bg-yellow-200 text-center font-medium p-3 flex justify-center items-center gap-1">
              <span>Aqui te mostramos como funciona</span>
              <ChevronDownIcon className="h-6 w-6" />
            </div>
          </section>
        </div>
        <div className="snap-center">
          <section className="bg-yellow-200 h-[calc(100dvh-80px)] flex flex-col lg:flex-row">
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
                <h1 className="text-3xl md:text-6xl font-bold">
                  Busca una idea
                </h1>
                <p className="md:text-2xl">
                  ¿Qué quieres probar ahora? Piensa en algo que te guste, como
                  “receta fácil con pollo”, y ve lo que encuentras.
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
        </div>

        <div className="snap-center">
          <section className="bg-green-200 h-[calc(100dvh-80px)] flex flex-col lg:flex-row">
            <div className="flex-1 flex justify-center items-center">
              <div className="text-center text-green-800 flex flex-col items-center gap-4 p-1">
                <h2 className="text-6xl font-bold">
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

                <div
                  className="absolute"
                  style={{ top: "280px", left: "447px" }}
                >
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

                <div
                  className="absolute"
                  style={{ top: "450px", left: "159px" }}
                >
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

                <div
                  className="absolute"
                  style={{ top: "490px", left: "429px" }}
                >
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
        </div>

        <div className="snap-center">
          <section className="bg-red-100 h-[calc(100dvh-80px)] flex flex-col lg:flex-row">
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
              <div className="max-w-md flex flex-col items-center gap-5 text-center text-red-700">
                <h2 className="text-6xl font-bold">
                  Miralo, créalo, pruébalo, hazlo
                </h2>
                <p className="text-2xl">
                  Lo mejor de Pinterest es descubrir cosas e ideas nuevas de
                  personas de todo el mundo.
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
        </div>

        <div className="snap-center">
          <section className="bg-gray-500 h-[calc(100dvh-80px)] flex flex-col">
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="flex-1 flex justify-center items-center">
                <div className="">
                  <h2 className="text-white text-7xl font-semibold max-w-sm">
                    Registrate para ver tus ideas
                  </h2>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-start">
                <div className="bg-white w-full h-full flex flex-col gap-4 justify-start items-center max-w-lg border-b-8 border-gray-200">
                  <div className="text-center mb-2 max-w-xs">
                    <h2 className="text-3xl font-medium">
                      Te damos la bienvenida a Pinterest
                    </h2>
                    <p className="font-light max-w-[300px] mx-auto">
                      Encuentra nuevas ideas para experimentar
                    </p>
                  </div>
                  <form className="flex flex-col gap-2 mx-24" action="">
                    <fieldset className="flex flex-col items-start">
                      <label
                        className="text-sm font-light ml-2"
                        htmlFor="email"
                      >
                        Correo electrónico
                      </label>
                      <input
                        className="p-2 rounded-xl border-2 border-gray-300 w-full"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Correo electrónico"
                      />
                    </fieldset>
                    <fieldset className="flex flex-col items-start">
                      <label
                        className="text-sm font-light ml-2"
                        htmlFor="password"
                      >
                        Contraseña
                      </label>
                      <input
                        className="p-2 rounded-xl border-2 border-gray-300 w-full"
                        type="password"
                        name="password"
                        id="password"
                      />
                    </fieldset>
                    <fieldset className="flex flex-col items-start">
                      <label
                        className="text-sm font-light ml-2 flex justify-center items-center gap-1"
                        htmlFor="datebirth"
                      >
                        Fecha de nacimiento{" "}
                        <InformationCircleIcon className="h-5 w-5 text-gray-600" />
                      </label>
                      <input
                        className="p-2 rounded-xl border-2 border-gray-300 w-full"
                        type="date"
                        name="datebirth"
                        id="datebirth"
                      />
                    </fieldset>
                    <div className="flex flex-col justify-between items-center gap-1">
                      <button className="px-4 py-2 bg-red-600 rounded-full text-white w-full max-w-xs">
                        Continuar
                      </button>
                      <span>O</span>
                      <button className="px-4 py-2 bg-blue-500 rounded-full text-white w-full max-w-xs mb-1">
                        Continuar con Facebook
                      </button>
                      <button className="px-4 py-2 bg-white border border-gray-300 rounded-full  w-full max-w-xs">
                        Continuar con Google
                      </button>
                    </div>
                    <div className="text-xs font-light text-center max-w-xs mt-5 flex flex-col gap-3 text-gray-400">
                      <p>
                        Al continuar, aceptas las{" "}
                        <a className="font-bold text-black" href="">
                          Condiciones de servicio
                        </a>{" "}
                        de Pinterest y reconoces que leiste nuestra{" "}
                        <a className="font-bold text-black" href="">
                          Politica de privacidad
                        </a>
                      </p>
                      <a href="">Aviso de recopilacion de informacion</a>
                      <p>
                        ¿Ya eres miembro?{" "}
                        <a className="font-bold text-black" href="">
                          Iniciar sesión
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-white flex justify-center items-center p-1">
              <ul className="flex gap-5 text-xs [&>li>a]:inline-block [&>li>a]:p-2">
                <li>
                  <a href="#">Condiciones de servicio</a>
                </li>
                <li>
                  <a href="#">Politica de privacidad</a>
                </li>
                <li>
                  <a href="#">Ayuda</a>
                </li>
                <li>
                  <a href="#">Aplicacion para Iphone</a>
                </li>
                <li>
                  <a href="#">Aplicación para android</a>
                </li>
                <li>
                  <a href="#">Usuarios</a>
                </li>
                <li>
                  <a href="#">Colecciones</a>
                </li>
                <li>
                  <a href="#">Compras</a>
                </li>
                <li>
                  <a href="#">Hoy</a>
                </li>
                <li>
                  <a href="#">Explorar</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
