import { InformationCircleIcon } from "../../../components/icons/InformationCircleIcon";

export function SectionRegister() {
  return (
    <section className="bg-gray-500 h-[calc(100dvh-80px)] flex flex-col bg-cover bg-[url('/images/landing/abdulla-faiz.jpg')]">
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
                <label className="text-sm font-light ml-2" htmlFor="email">
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
                <label className="text-sm font-light ml-2" htmlFor="password">
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
  );
}
