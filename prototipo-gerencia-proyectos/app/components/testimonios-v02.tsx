type Testimonio = { nombre: string; imagen: string; texto: string; destacado: string };

export function TestimoniosV02({ testimonios }: { testimonios: Testimonio[] }) {
  return (
    <div className="mx-auto mt-7 grid max-w-[1100px] gap-4 lg:grid-cols-3">
      {testimonios.map(({ nombre, imagen, texto, destacado }) => (
        <figure key={nombre} className="testimoniales__tarjetas flex min-w-0 flex-col px-6 pt-5 pb-6">
          <span aria-hidden="true" className="block h-10 w-fit font-serif text-7xl leading-none text-[#114fa9]">
            “
          </span>
          <blockquote className="mb-5 text-base leading-relaxed text-[#334866]">
            <p>
              {texto}{" "}
              <strong className="font-bold text-[#09152e]">{destacado}</strong>.
            </p>
          </blockquote>
          <figcaption className="mt-auto flex items-center gap-3 border-t border-[#cbdcf2] pt-4">
            <img
              src={imagen}
              alt=""
              width={48}
              height={48}
              loading="lazy"
              className="size-12 shrink-0 rounded-full object-cover"
            />
            <p className="font-bold text-[#09152e]">{nombre}</p>
            <span aria-hidden="true" className="ml-auto h-8 font-serif text-5xl leading-none text-[#114fa9]/25">
              ”
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
