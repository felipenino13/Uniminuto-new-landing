"use client";

import { useEffect, useState } from "react";

export function AccionesFlotantesV02() {
  const [pasoBanner, setPasoBanner] = useState(false);
  const [pasoFormulario, setPasoFormulario] = useState(false);

  useEffect(() => {
    const banner = document.getElementById("banner-v02");
    const formulario = document.getElementById("formPrograma");
    if (!banner || !formulario) return;

    const actualizar = () => {
      setPasoBanner(banner.getBoundingClientRect().bottom <= 0);
      setPasoFormulario(formulario.getBoundingClientRect().bottom <= 0);
    };

    const observer = new ResizeObserver(actualizar);
    observer.observe(banner);
    observer.observe(formulario);
    window.addEventListener("scroll", actualizar, { passive: true });
    window.addEventListener("resize", actualizar);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", actualizar);
      window.removeEventListener("resize", actualizar);
    };
  }, []);

  return (
    <>
      {pasoBanner && (
        <a
          href="#inicio"
          aria-label="Volver arriba"
          className={`fixed right-[max(1rem,env(safe-area-inset-right))] z-30 inline-flex size-11 rounded-full shadow-[0_3px_16px_#02081745] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1266bf] ${
            pasoFormulario
              ? "bottom-[calc(4.75rem+env(safe-area-inset-bottom))] min-[801px]:bottom-[max(1rem,env(safe-area-inset-bottom))]"
              : "bottom-[max(1rem,env(safe-area-inset-bottom))]"
          }`}
        >
          <img src="/landing/back-to-top.svg" alt="" width={44} height={44} />
        </a>
      )}
      {pasoFormulario && (
        <>
          <div aria-hidden="true" className="h-[calc(3.75rem+env(safe-area-inset-bottom))] bg-[#050c22] min-[801px]:hidden" />
          <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center border-t border-[#cbdcf2] bg-white px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_#02081724] min-[801px]:hidden">
            <a href="#formPrograma" className="inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-lg bg-[#ffdd33] px-4 text-center text-sm font-bold text-[#09152e] hover:bg-[#ffe677] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114fa9]">
              Solicitar información
            </a>
          </div>
        </>
      )}
    </>
  );
}
