import { SectionCreators } from "./components/SectionCreators";
import { SectionFindIdea } from "./components/SectionFindIdea";
import { SectionRegister } from "./components/SectionRegister";
import { SectionSaveIdea } from "./components/SectionSaveIdea";
import { SectionWelcome } from "./components/SectionWelcome";

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
      <main className="snap-y snap-mandatory h-[calc(100dvh-80px)] w-full overflow-auto overflow-x-hidden relative mt-20">
        <div className="snap-center">
          <SectionWelcome />
        </div>
        <div className="snap-center">
          <SectionFindIdea />
        </div>

        <div className="snap-center">
          <SectionSaveIdea />
        </div>

        <div className="snap-center">
          <SectionCreators />
        </div>

        <div className="snap-center">
          <SectionRegister />
        </div>
      </main>
    </>
  );
}
