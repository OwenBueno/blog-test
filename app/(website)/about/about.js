import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Sobre nosotros
      </h1>
      <div className="text-center">
        <p className="text-lg">Somos un equipo apasionado por el software.</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Nuestro blog provee una visión detrás de escena de cómo el software y mas especificamente las patentes de software están cambiando la forma en que las empresas operan.
        </p>
        <p>
          Nos dedicamos a difundir información sobre las últimas tendencias en tecnología y software. Enfocados en las patentes de software y su impacto en la industria.           Esto nos permite compartir nuestra experiencia y conocimiento con la comunidad.
        </p>
        <p>
          <Link href="/contact">Localizanos</Link>
        </p>
      </div>
    </Container>
  );
}
