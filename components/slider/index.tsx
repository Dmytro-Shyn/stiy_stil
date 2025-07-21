"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import SliderArrowRight from "../icons/slider-right";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onScroll = () => {
      const progress = emblaApi.scrollProgress();
      setScrollProgress(progress);
    };

    emblaApi.on("scroll", onScroll);

    onScroll();

    return () => {
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container mb-[54px]">
        <div className="embla__slide overflow-hidden">
          <div className="flex w-[calc(100vw-40px)] flex-col gap-[36px] md:max-w-[680px]">
            <Image
              className=""
              src="/slider-img-1.png"
              width={680}
              height={380}
              alt="Опис зображення"
            />
            <div className="flex justify-between gap-2.5">
              <div className="flex gap-4">
                <Image
                  className="md:size[70px] size-[40px]"
                  src="/button-play.png"
                  width={70}
                  height={70}
                  alt="Опис зображення"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="leading-[27px] font-medium break-words whitespace-normal md:text-[23px] md:leading-[37px]">
                    The perfect workspace for a machead! <br /> Dreamdesk
                  </h3>
                  <span>Keddr.com</span>
                </div>
              </div>
              <span className="hidden md:block">8:53</span>
            </div>
          </div>
        </div>
        <div className="embla__slide overflow-hidden">
          <div className="flex w-[calc(100vw-40px)] flex-col gap-[36px] md:max-w-[680px]">
            <Image
              className=""
              src="/slider-img-2.png"
              width={680}
              height={380}
              alt="Опис зображення"
            />
            <div className="flex justify-between gap-2.5">
              <div className="flex gap-4">
                <Image
                  className="md:size[70px] size-[40px]"
                  src="/button-play.png"
                  width={70}
                  height={70}
                  alt="Опис зображення"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="leading-[27px] font-medium break-words whitespace-normal md:text-[23px] md:leading-[37px]">
                    This smart desk is a dream workplace
                  </h3>
                  <span>Techgik</span>
                </div>
              </div>
              <span className="hidden md:block">8:53</span>
            </div>
          </div>
        </div>
        <div className="embla__slide overflow-hidden">
          <div className="flex w-[calc(100vw-40px)] flex-col gap-[36px] md:max-w-[680px]">
            <Image
              className=""
              src="/slider-img-3.png"
              width={680}
              height={380}
              alt="Опис зображення"
            />
            <div className="flex justify-between gap-2.5">
              <div className="flex gap-4">
                <Image
                  className="md:size[70px] size-[40px]"
                  src="/button-play.png"
                  width={70}
                  height={70}
                  alt="Опис зображення"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="leading-[27px] font-medium break-words whitespace-normal md:text-[23px] md:leading-[37px]">
                    The perfect workspace for a machead! <br /> Dreamdesk
                  </h3>
                  <span>Keddr.com</span>
                </div>
              </div>
              <span className="hidden md:block">8:53</span>
            </div>
          </div>
        </div>
        <div className="embla__slide overflow-hidden">
          <div className="flex w-[calc(100vw-40px)] flex-col gap-[36px] md:max-w-[680px]">
            <Image
              className=""
              src="/slider-img-1.png"
              width={680}
              height={380}
              alt="Опис зображення"
            />
            <div className="flex justify-between gap-2.5">
              <div className="flex gap-4">
                <Image
                  className="md:size[70px] size-[40px]"
                  src="/button-play.png"
                  width={70}
                  height={70}
                  alt="Опис зображення"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="leading-[27px] font-medium break-words whitespace-normal md:text-[23px] md:leading-[37px]">
                    Working standing at StiyStil. Why work at such a desk and
                    its advantages?
                  </h3>
                  <span>Tech Union</span>
                </div>
              </div>
              <span className="hidden md:block">8:53</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="mt-4 flex justify-center gap-5">
          <button onClick={scrollPrev} disabled={!canPrev}>
            <SliderArrowRight
              className={`h-[13px] w-[51px] rotate-180 ${
                !canPrev ? "text-[var(--gray-4)]" : "text-[var(--gray-9)]"
              }`}
            />
          </button>
          <button onClick={scrollNext} disabled={!canNext}>
            <SliderArrowRight
              className={`h-[13px] w-[51px] ${
                !canNext ? "text-[var(--gray-4)]" : "text-[var(--gray-9)]"
              }`}
            />
          </button>
        </div>
        <div className="hidden items-center justify-center gap-4 xl:flex">
          <span className="text-[14px]">01</span>
          <div className="relative flex w-[610px]">
            <div
              style={{ width: `${scrollProgress * 100}%` }}
              className={`absolute top-0 left-0 z-10 flex h-0.5 bg-[var(--gray-9)]`}
            ></div>
            <div className="absolute top-0 left-0 flex h-0.5 w-full bg-[var(--gray-4)]"></div>
          </div>
          <span className="text-[14px]">04</span>
        </div>
      </div>
    </div>
  );
}
