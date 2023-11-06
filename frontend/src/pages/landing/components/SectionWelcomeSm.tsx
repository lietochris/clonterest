export function SectionWelcomeSm() {
  return (
    <section
      className={`h-[calc(100dvh-80px)] bg-cover bg-[url('/images/landing/abdulla-faiz.jpg')]`}
    >
      <div className="h-full w-full flex flex-col justify-center items-center bg-black/50 text-center">
        <div className="text-center flex flex-col items-center gap-4 xs:gap-12 md:gap-24 px-4 xs:px-8"></div>
        <div className="flex flex-col justify-center items-center ">
          <div className="h-12 w-12 flex justify-center items-center font-bold rounded-full bg-white text-3xl text-gray-600">
            C
          </div>
          <h2 className="text-white font-semibold text-2xl xs:text-3xl md:text-4xl my-4">
            Te damos la bienvenida a pinterest
          </h2>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center max-w-xs">
          <button className="px-4 py-2 bg-red-600 rounded-full text-white w-full max-w-xs">
            Continuar con correo electrónico
          </button>
          <button className="px-4 py-2 bg-blue-500 rounded-full text-white w-full max-w-xs">
            Continuar con Facebook
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-full  w-full max-w-xs">
            Continuar con Google
          </button>
          <p className="mt-4 xs:mt-12 text-white text-xs xs:text-sm md:text-base">
            ¿Ya eres miembro?{" "}
            <a className="font-semibold text-white" href="">
              Iniciar sesión
            </a>
          </p>
        </div>
        <div className="text-white text-xs xs:text-sm md:text-base mt-14 flex flex-col gap-5 md:gap-12 max-w-sm">
          <p className="">
            ¿Representas a una empresa?{" "}
            <a className="font-semibold" href="">
              Empieza aqui
            </a>
          </p>
          <p className="">
            Al continuar, aceptas las{" "}
            <a className="font-semibold" href="">
              condiciones del servicio
            </a>{" "}
            de pinterest y reconoces que leíste nuestra{" "}
            <a className="font-semibold" href="">
              Politica de privacidad
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
