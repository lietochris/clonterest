import { ChevronDownIcon } from "../../../components/icons/ChevronDownIcon";

export function SectionWelcomeLg() {
  return (
    <section className="h-[calc(100dvh-80px)] flex flex-col z-10">
      <div className="flex-1 flex justify-center items-center">
        <div className="text-6xl font-semibold">
          <h1>Descubre tu próximo</h1>
          <h2 className="text-emerald-600">Proyecto de bricolaje</h2>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="flex justify-center -top-[30%] absolute gap-3 w-[1750px]">
          <div className="">
            <img
              className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
              src="/images/landing/carousel-2.jpg"
              alt=""
            />
            <img
              className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
              src="/images/landing/carousel-2.jpg"
              alt=""
            />
          </div>
          <div className="mt-24">
            <img
              className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
              src="/images/landing/carousel-2.jpg"
              alt=""
            />
          </div>
          <div className="mt-48">
            <img
              className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
              src="/images/landing/carousel-2.jpg"
              alt=""
            />
          </div>
          <div className="mt-64">
            <img
              className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
              src="/images/landing/carousel-2.jpg"
              alt=""
            />
          </div>
          <div className="mt-48">
            <img
              className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
              src="/images/landing/carousel-2.jpg"
              alt=""
            />
          </div>
          <div className="mt-24">
            <img
              className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
              src="/images/landing/carousel-2.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
              src="/images/landing/carousel-2.jpg"
              alt=""
            />
            <img
              className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
              src="/images/landing/carousel-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-yellow-200 text-center font-medium p-3 flex justify-center items-center gap-1 z-10">
        <span>Aquí te mostramos cómo funciona</span>
        <ChevronDownIcon className="h-6 w-6" />
      </div>
    </section>
  );
}
