import { useState } from "react";
import { ChevronDownIcon } from "../../../components/icons/ChevronDownIcon";
import { motion, AnimatePresence } from "framer-motion";
import { useInterval } from "usehooks-ts";

interface Props {
  className?: string;
}

export function SectionWelcomeLg(props: Props) {
  const [step, setStep] = useState(0);

  useInterval(() => {
    if (step == 3) {
      setStep(0);
      return;
    }
    setStep(() => step + 1);
  }, 5000);

  return (
    <section
      className={`h-[calc(100dvh-80px)] flex flex-col z-10 ${props.className}`}
    >
      <div className="flex-1 flex justify-center items-center">
        <div className="text-6xl text-center flex flex-col font-semibold">
          <h1>Descubre tu próximo</h1>
          <AnimatePresence mode={"wait"}>
            {step == 0 && (
              <motion.h2
                key={1}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="text-blue-500"
              >
                idea de atuendos de verano
              </motion.h2>
            )}
            {step == 1 && (
              <motion.h2
                key={2}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="text-teal-500"
              >
                actividad para niños
              </motion.h2>
            )}
            {step == 2 && (
              <motion.h2
                key={3}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="text-amber-500"
              >
                idea para una cena especial
              </motion.h2>
            )}
            {step == 3 && (
              <motion.h2
                key={4}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="text-emerald-600"
              >
                Proyecto de bricolaje
              </motion.h2>
            )}
          </AnimatePresence>
          <div className="flex justify-center items-center gap-5 mt-5">
            <button
              onClick={() => setStep(0)}
              className={`h-3 w-3 rounded-full ${
                step == 0 ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
            <button
              onClick={() => setStep(1)}
              className={`h-3 w-3 rounded-full ${
                step == 1 ? "bg-teal-500" : "bg-gray-300"
              }`}
            />
            <button
              onClick={() => setStep(2)}
              className={`h-3 w-3 rounded-full ${
                step == 2 ? "bg-amber-500" : "bg-gray-300"
              }`}
            />
            <button
              onClick={() => setStep(3)}
              className={`h-3 w-3 rounded-full ${
                step == 3 ? "bg-emerald-500" : "bg-gray-300"
              }`}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative">
        <AnimatePresence>
          {step == 0 && (
            <motion.div
              key={0}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center -top-[30%] absolute gap-3 w-[1750px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 1 }}
                className=""
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-1.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-1.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 2 }}
                className="mt-24"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-1.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-1.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 3 }}
                className="mt-48"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-1.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 4 }}
                className="mt-64"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-1.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 5 }}
                className="mt-48"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-1.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 6 }}
                className="mt-24"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-1.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-1.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 7 }}
                className=""
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-1.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-1.jpg"
                  alt=""
                />
              </motion.div>
            </motion.div>
          )}
          {step == 1 && (
            <motion.div
              key={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center -top-[30%] absolute gap-3 w-[1750px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 1 }}
                className=""
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 2 }}
                className="mt-24"
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 3 }}
                className="mt-48"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-2.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 4 }}
                className="mt-64"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-2.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 5 }}
                className="mt-48"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-2.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 6 }}
                className="mt-24"
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 7 }}
                className=""
              >
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
              </motion.div>
            </motion.div>
          )}
          {step == 2 && (
            <motion.div
              key={2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center -top-[30%] absolute gap-3 w-[1750px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 1 }}
                className=""
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 2 }}
                className="mt-24"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 3 }}
                className="mt-48"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 4 }}
                className="mt-64"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 5 }}
                className="mt-48"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 6 }}
                className="mt-24"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 7 }}
                className=""
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
              </motion.div>
            </motion.div>
          )}
          {step == 3 && (
            <motion.div
              key={3}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center -top-[30%] absolute gap-3 w-[1750px]"
            >
              <motion.div
                key={"0_0"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 * 1 }}
                className=""
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-4.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-4.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                key={"0_1"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 2 }}
                exit={{ opacity: 0 }}
                className="mt-24"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-4.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-3.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                key={"0_2"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 3 }}
                exit={{ opacity: 0 }}
                className="mt-48"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-4.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                key={"0_3"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 4 }}
                exit={{ opacity: 0 }}
                className="mt-64"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-4.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                key={"0_4"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 5 }}
                exit={{ opacity: 0, y: 30 }}
                className="mt-48"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-4.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                key={"0_5"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 6 }}
                exit={{ opacity: 0 }}
                className="mt-24"
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-4.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-4.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                key={"0_6"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 7 }}
                exit={{ opacity: 0 }}
                className=""
              >
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-4.jpg"
                  alt=""
                />
                <img
                  className="h-[350px] w-[236px] object-cover rounded-2xl mb-5"
                  src="/images/landing/carousel-4.jpg"
                  alt=""
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="h-32 w-full absolute bottom-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="bg-yellow-200 text-center font-medium p-3 flex justify-center items-center gap-1 z-10">
        <span>Aquí te mostramos cómo funciona</span>
        <ChevronDownIcon className="h-6 w-6" />
      </div>
    </section>
  );
}
