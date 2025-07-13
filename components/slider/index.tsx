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
      // Отримати scroll прогрес (від 0 до 1)
      const progress = emblaApi.scrollProgress();
      setScrollProgress(progress);
      // Можна ще отримати індекс слайда:
      // const index = emblaApi.selectedScrollSnap();
      // setSelectedIndex(index);
    };

    emblaApi.on("scroll", onScroll);

    // Викликати при монтуванні (щоб не було "стрибка" на початку)
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
          <div className="flex flex-col gap-[36px] max-w-[680px]">
            <Image
              src="/slider-img-1.png"
              width={680}
              height={380}
              alt="Опис зображення"
            />
            <div className="flex justify-between gap-2.5">
              <div className="flex gap-4">
                <Image
                  className="w-[70px] h-[70px]"
                  src="/button-play.png"
                  width={70}
                  height={70}
                  alt="Опис зображення"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-[23px] leading-[37px] font-medium break-words whitespace-normal">
                    The perfect workspace for a machead! <br /> Dreamdesk
                  </h3>
                  <span>Keddr.com</span>
                </div>
              </div>
              <span>8:53</span>
            </div>
          </div>
        </div>
        <div className="embla__slide overflow-hidden">
          <div className="flex flex-col gap-[36px] max-w-[680px]">
            <Image
              src="/slider-img-2.png"
              width={680}
              height={380}
              alt="Опис зображення"
            />
            <div className="flex justify-between gap-2.5">
              <div className="flex gap-4">
                <Image
                  className="w-[70px] h-[70px]"
                  src="/button-play.png"
                  width={70}
                  height={70}
                  alt="Опис зображення"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-[23px] leading-[37px] font-medium break-words whitespace-normal">
                    This smart desk is a dream workplace
                  </h3>
                  <span>GIC channel</span>
                </div>
              </div>
              <span>8:09</span>
            </div>
          </div>
        </div>
        <div className="embla__slide overflow-hidden">
          <div className="flex flex-col gap-[36px] max-w-[680px]">
            <Image
              src="/slider-img-3.png"
              width={680}
              height={380}
              alt="Опис зображення"
            />
            <div className="flex justify-between gap-2.5">
              <div className="flex gap-4">
                <Image
                  className="w-[70px] h-[70px]"
                  src="/button-play.png"
                  width={70}
                  height={70}
                  alt="Опис зображення"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-[23px] leading-[37px] font-medium break-words whitespace-normal">
                    Working standing at StiyStil. Why work at such a desk and
                    its advantages?
                  </h3>
                  <span>Tech Union</span>
                </div>
              </div>
              <span>4:58</span>
            </div>
          </div>
        </div>
        <div className="embla__slide overflow-hidden">
          <div className="flex flex-col gap-[36px] max-w-[680px]">
            <Image
              src="/slider-img-1.png"
              width={680}
              height={380}
              alt="Опис зображення"
            />
            <div className="flex justify-between gap-2.5">
              <div className="flex gap-4">
                <Image
                  className="w-[70px] h-[70px]"
                  src="/button-play.png"
                  width={70}
                  height={70}
                  alt="Опис зображення"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-[23px] leading-[37px] font-medium break-words whitespace-normal">
                    Working standing at StiyStil. Why work at such a desk and
                    its advantages?
                  </h3>
                  <span>Keddr.com</span>
                </div>
              </div>
              <span>8:53</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center mt-4 gap-5">
          <button onClick={scrollPrev} disabled={!canPrev}>
            <SliderArrowRight
              className={`w-[51px] h-[13px] rotate-180 ${
                !canPrev ? "text-[var(--gray-4)]" : "text-[var(--gray-9)]"
              }`}
            />
          </button>
          <button onClick={scrollNext} disabled={!canNext}>
            <SliderArrowRight
              className={`w-[51px] h-[13px] ${
                !canNext ? "text-[var(--gray-4)]" : "text-[var(--gray-9)]"
              }`}
            />
          </button>
        </div>
        <div className="flex justify-center items-center gap-4  ]">
          <span className="text-[14px]">01</span>
          <div className="flex relative w-[610px]">
            <div
              style={{ width: `${scrollProgress * 100}%` }}
              className={`absolute left-0 top-0 flex h-0.5 bg-[var(--gray-9)] z-10`}
            ></div>
            <div className="absolute left-0 top-0 flex w-full h-0.5 bg-[var(--gray-4)]"></div>
          </div>
          <span className="text-[14px]">04</span>
        </div>
      </div>
    </div>
  );
}
