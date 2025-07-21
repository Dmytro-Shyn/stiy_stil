/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableHead,
  // TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import EmblaCarousel from "@/components/slider";

export default function Home() {
  return (
    <>
      <section className="flex h-[780px] w-full items-center bg-[url('/hero_bg_mob.png')] bg-center bg-no-repeat md:h-[100vh] md:bg-[url('/hero_bg.png')]">
        <div className="mx-auto w-full max-w-7xl px-5">
          <div className="flex w-full flex-col gap-7 lg:gap-[90px]">
            <div>
              <h1
                className="mb-[50px] overflow-hidden text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] md:text-[56px] md:leading-[60px] lg:w-[700px] lg:text-[72px] lg:leading-[76px] xl:text-[84px] xl:leading-[88px] 2xl:text-[96px] 2xl:leading-[96px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                Table with electric control
              </h1>
              <p
                className="lg:w-[700px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                This "healthy" desk is an indispensable item for people who work
                sitting down. <br /> Allows you to do your work standing up
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="flex flex-col gap-[30px]"
            >
              <span className="text-[23px] font-medium">UAH 12 499</span>
              <Button className="h-[70px] w-[160px] text-[15px] hover:text-[var(--background)]">
                Buy
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center px-5 py-[270px]">
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative aspect-[16/9] w-full bg-[url('/video_section.png')] bg-cover bg-center">
            {" "}
            <Image
              className="absolute top-[50%] left-[50%] size-10 translate-[-50%] md:size-[70px]"
              src="/button-play.png"
              width={70}
              height={70}
              alt="Опис зображення"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mt-[60px]"
          >
            <h3 className="mb-[20px] text-center text-[34px]">
              Table with electric control
            </h3>
            <p className="text text-center">
              Researchers at Texas A&M University
            </p>
          </div>
        </div>
      </section>
      <section className="flex h-[940px] bg-[url('/quick-height-p1-mob.png')] bg-cover bg-center md:items-center md:bg-[url('/quick-height-p1.png')] lg:h-[1000px]">
        <div className="mx-auto w-full max-w-7xl px-5">
          <div className="mt-[60px] mb-[50px] md:mb-[130px]">
            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="mb-[50px] text-left text-[48px] leading-[56px] font-medium"
            >
              Quick <br /> height <br /> adjustment
            </h3>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="text-left text-[17px] leading-[30px] text-[var(--gray-7)] md:w-[320px]"
            >
              Press a button and in just a few seconds, enjoy working at a
              height that is comfortable for you.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="flex gap-[59px]"
          >
            <div className="flex flex-col gap-3">
              <p className="text-[12px] text-[var(--gray-7)]">Payload</p>
              <p className="text-[15px] font-medium">1250 N or up to 125 kg</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[12px] text-[var(--gray-7)]">Noise</p>
              <p className="text-[15px] font-medium">{`<50 dB`}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="items-top flex h-[480px] bg-[url('/quick-height-p2-mob.png')] bg-cover bg-center md:h-[1080px] md:bg-[url('/quick-height-p2.png')]">
        <div className="mx-auto w-full max-w-7xl px-5">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="mt-[100px] mb-[50px] text-center text-[40px] leading-[56px] font-medium md:mt-[185px] md:text-[48px]"
          >
            Two separate motors for <br /> extra power and stability
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl">
        <div className="mt-[270px] mb-[270px] grid grid-cols-1 gap-[25px] px-5 md:gap-[10px] lg:grid-cols-2 xl:grid-cols-3">
          {/* 1 блок */}
          <div className="flex flex-col">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="mb-6 text-left text-[23px] leading-[37px]"
            >
              Electric controller
              <br />
              with 4 memory modes
            </p>
            <Image
              className="z-10"
              src="/il-img1.png"
              width={460}
              height={640}
              alt="Опис зображення"
            />
          </div>
          {/* 2 блок */}
          <div className="flex flex-col">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="mb-6 text-left text-[23px] leading-[37px]"
            >
              Powder
              <br />
              coating
            </p>
            <Image
              className="z-10"
              src="/il-img2.png"
              width={460}
              height={640}
              alt="Опис зображення"
            />
          </div>
          {/* 3 блок */}
          <div className="flex flex-col">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="mb-6 text-left text-[23px] leading-[37px]"
            >
              Stopping to
              <br />
              prevent collisions
            </p>
            <Image
              className="z-10"
              src="/il-img3.png"
              width={460}
              height={640}
              alt="Опис зображення"
            />
          </div>
        </div>
      </section>
      <section className="flex items-start">
        <div className="mx-auto mb-[270px] flex w-full max-w-7xl flex-col px-5">
          <h3 className="mb-[50px] text-left text-[48px] leading-[56px] font-medium">
            Materials
          </h3>
          <div className="flex flex-col gap-[150px]">
            <div className="flex flex-col justify-between xl:flex-row">
              <h5
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="mb-5 text-[23px] leading-[37px] font-medium xl:mb-0"
              >
                Jointed oak
              </h5>
              <div className="flex flex-col gap-[40px] lg:flex-row">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="flex w-full flex-col justify-between gap-2 sm:w-[320px]"
                >
                  <p className="leading-[30px]">
                    Deviations from the basic color and structure are normal and
                    emphasize the natural origin of this material.
                  </p>
                  <span className="text-[15px] leading-[27px] text-[var(--gray-7)]">
                    40 mm thick
                  </span>
                </div>
                <Image
                  src="/material-1.png"
                  width={680}
                  height={330}
                  alt="Опис зображення"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between xl:flex-row">
              <h5
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="mb-5 text-[23px] leading-[37px] font-medium xl:mb-0"
              >
                HPL
              </h5>
              <div className="flex flex-col gap-[40px] lg:flex-row">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="flex w-full flex-col justify-between gap-2 sm:w-[320px]"
                >
                  <p className="leading-[30px]">
                    Moisture resistant plywood with HPL lamination, resistant to
                    damage
                  </p>
                  <span className="text-[15px] leading-[27px] text-[var(--gray-7)]">
                    23 mm thick
                  </span>
                </div>
                <Image
                  src="/material-2.png"
                  width={680}
                  height={330}
                  alt="Опис зображення"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between xl:flex-row">
              <h5
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="mb-5 text-[23px] leading-[37px] font-medium xl:mb-0"
              >
                CHIPBOARD
              </h5>
              <div className="flex flex-col gap-[40px] lg:flex-row">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="flex w-full flex-col justify-between gap-2 sm:w-[320px]"
                >
                  <p className="leading-[30px]">
                    The board is first covered in several layers with kraft
                    paper impregnated with synthetic resins, followed by a
                    decorative layer with a pattern and a protective coating of
                    transparent melamine and acrylate resins.
                  </p>
                  <span className="text-[15px] leading-[27px] text-[var(--gray-7)]">
                    18 and 36 mm thick
                  </span>
                </div>
                <Image
                  src="/material-3.png"
                  width={680}
                  height={330}
                  alt="Опис зображення"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[270px] flex items-start px-5">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-[63px] flex flex-col">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-0"
            >
              <h3
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="text-left text-[48px] leading-[62px] font-medium md:w-[750px]"
              >
                Our partners from multinational companies, luxury brands or
                visionary start-ups
              </h3>
              <div className="flex items-center gap-[30px]">
                <a href="">Become a partner</a>
                <Image
                  src="/arrow-r.svg"
                  width={7}
                  height={13}
                  alt="Опис зображення"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 place-items-center items-center gap-6">
            <div className="">
              {" "}
              <Image
                src="/logos/google.svg"
                width={121}
                height={81}
                alt="logo google"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/tickets.png"
                width={158}
                height={158}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/grammarly.png"
                width={170}
                height={76}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/teamdev.png"
                width={148}
                height={66}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/it.png"
                width={176}
                height={78}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/monster.png"
                width={158}
                height={70}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/planet.png"
                width={124}
                height={124}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/luxort.png"
                width={138}
                height={62}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/boeing.png"
                width={168}
                height={41}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/depot.png"
                width={121}
                height={121}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/hub.png"
                width={87}
                height={87}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/kedr.png"
                width={123}
                height={92}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/readdle.png"
                width={111}
                height={49}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/softserve.png"
                width={158}
                height={70}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/gorilla.png"
                width={146}
                height={92}
                alt="Опис зображення"
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/logos/sombra.png"
                width={138}
                height={62}
                alt="Опис зображення"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[270px] flex items-start px-5">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-[37px] md:gap-[80px]">
            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-left text-[48px] leading-[56px] font-medium"
            >
              Popular videos about stiy stil
            </h3>
            <EmblaCarousel />
          </div>
        </div>
      </section>
      <section className="sm:py[0] mx-auto flex w-full items-center bg-[url('/tech-bg-1.png')] bg-cover bg-center px-5 py-[180px]">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col">
            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-left text-[48px] leading-[56px] font-medium"
            >
              Technical specifications
            </h3>
            <div className="mt-[40px] grid grid-cols-1 gap-[130px] sm:mt-[80px] lg:grid-cols-2">
              <Table className="w-full border-separate border-spacing-0">
                <TableBody>
                  <TableRow>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      Model
                    </TableCell>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-right text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      Height-adjustable table
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      Dimensions
                    </TableCell>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-right text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      62-127/108-180 cm
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      Country of manufacture
                    </TableCell>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-right text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      China
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      Material
                    </TableCell>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-right text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      Powder farbuvannya
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      Payload
                    </TableCell>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-right text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      1250 N or up to 125 kg
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      Noise
                    </TableCell>
                    <TableCell className="border-b border-[var(--gray-4)] py-[15px] text-right text-[12px] font-normal sm:py-[25px] sm:text-[14px]">
                      &lt; 50 dB
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Image
                className="place-self-center justify-self-center"
                src="/tech-img.svg"
                width={550}
                height={293}
                alt="Опис зображення"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative mx-auto aspect-auto h-[600px] w-full bg-[url('/table-mob.png')] bg-cover bg-center px-5 sm:h-[700px] md:h-[100vh] md:bg-[url('/table.png')]">
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="absolute top-1/6 left-1/2 w-full translate-[-50%] px-5 text-center text-[48px] leading-[56px] font-medium md:top-1/2 md:left-1/2"
        >
          Table with electric control
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="absolute top-6/8 left-1/2 flex w-full translate-[-50%] flex-col items-center justify-center px-5"
        >
          <div className="mb-[62px] flex w-full justify-between md:w-[70%] xl:w-[45%]">
            <div className="flex flex-col gap-[19px]">
              <span className="text-[12px] font-medium text-[var(--gray-7)]">
                Price
              </span>
              <span className="text-[23px] font-medium">UAH 12 499</span>
            </div>
            <div className="flex flex-col gap-[19px]">
              <span className="text-right text-[12px] font-medium text-[var(--gray-7)]">
                Base color
              </span>
              <span className="text-[23px] font-medium">UAH 12 499</span>
            </div>
          </div>
          <Button className="h-[70px] w-[160px] text-[15px] hover:text-[var(--background)]">
            Buy
          </Button>
        </div>
      </section>
    </>
  );
}
