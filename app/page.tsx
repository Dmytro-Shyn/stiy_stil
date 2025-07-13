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
      <section className="w-full bg-[url('/hero_bg.png')] h-[1080px] bg-cover bg-center flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5">
          <div className="flex flex-col gap-[90px] w-full">
            <div>
              <h1 className="text-[96px] leading-[95px] mb-[50px] w-[700px] ">
                Table with electric control
              </h1>
              <p>
                This "healthy" desk is an indispensable item for people who work
                sitting down. <br /> Allows you to do your work standing up
              </p>
            </div>
            <div className="flex flex-col gap-[30px]">
              <span className="font-medium text-[23px]">UAH 12 499</span>
              <Button className="h-[70px] w-[160px] text-[15px] hover:text-[var(--background)]">
                Buy
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center py-[270px]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative bg-[url('/video_section.png')] w-full h-[300px] sm:h-[500px] lg:h-[786px] bg-cover bg-center after-video-section"></div>
          <div className=" mt-[60px]">
            <h3 className="text-[34px] text-center mb-[20px]">
              Table with electric control
            </h3>
            <p className="text-center text">
              Researchers at Texas A&M University
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[url('/quick-height-p1.png')] h-[1000px] bg-cover bg-center flex items-center ">
        <div className="w-full max-w-7xl mx-auto">
          <div className=" mt-[60px] mb-[130px]">
            <h3 className="text-[48px] leading-[56px] text-left mb-[50px] font-medium">
              Quick <br /> height <br /> adjustment
            </h3>
            <p className="text-left text-[17px] leading-[30px] text-[var(--gray-7)]">
              Press a button and in just a few seconds, enjoy <br /> working at
              a height that is comfortable for you.
            </p>
          </div>
          <div className="flex gap-[59px]">
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
      <section className="bg-[url('/quick-height-p2.png')] h-[1080px] bg-cover bg-center flex items-top">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-[48px] leading-[56px] text-center mb-[50px] mt-[185px] font-medium">
            Two separate motors for <br /> extra power and stability
          </h1>
        </div>
      </section>
      <section className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-3 gap-[10px] mt-[270px] mb-[270px]">
          {/* 1 блок */}
          <div className="flex flex-col">
            <p className="text-[23px] leading-[37px] mb-6 text-left">
              Electric controller
              <br />
              with 4 memory modes
            </p>
            <Image
              src="/il-img1.png"
              width={460}
              height={640}
              alt="Опис зображення"
            />
          </div>
          {/* 2 блок */}
          <div className="flex flex-col">
            <p className="text-[23px] leading-[37px] mb-6 text-left">
              Powder
              <br />
              coating
            </p>
            <Image
              src="/il-img2.png"
              width={460}
              height={640}
              alt="Опис зображення"
            />
          </div>
          {/* 3 блок */}
          <div className="flex flex-col">
            <p className="text-[23px] leading-[37px] mb-6 text-left">
              Stopping to
              <br />
              prevent collisions
            </p>
            <Image
              src="/il-img3.png"
              width={460}
              height={640}
              alt="Опис зображення"
            />
          </div>
        </div>
      </section>
      <section className="flex items-start">
        <div className="w-full max-w-7xl mx-auto flex flex-col mb-[270px]">
          <h3 className="text-[48px] leading-[56px] text-left mb-[50px] font-medium">
            Materials
          </h3>
          <div className="flex flex-col gap-[150px]">
            <div className="flex justify-between">
              <h5 className="text-[23px] leading-[37px] font-medium">
                Jointed oak
              </h5>
              <div className="flex gap-[40px]">
                <div className="flex flex-col w-[320px] justify-between">
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
            <div className="flex justify-between">
              <h5 className="text-[23px] leading-[37px] font-medium">HPL</h5>
              <div className="flex gap-[40px]">
                <div className="flex flex-col w-[320px] justify-between">
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
            <div className="flex justify-between">
              <h5 className="text-[23px] leading-[37px] font-medium">
                CHIPBOARD
              </h5>
              <div className="flex gap-[40px]">
                <div className="flex flex-col w-[320px] justify-between">
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
      <section className="flex items-start mb-[270px]">
        <div className="w-full max-w-7xl mx-auto">
          <div className=" flex flex-col mb-[63px]">
            <div className="flex justify-between items-end">
              <h3 className="text-[48px] leading-[62px] text-left font-medium w-[750px]">
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
          <div className="grid grid-cols-4 gap-6 items-center place-items-center">
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
      <section className="flex items-start mb-[270px]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-[80px]">
            <h3 className="text-[48px] leading-[56px] text-left font-medium">
              Popular videos about stiy stil
            </h3>
            <EmblaCarousel />
          </div>
        </div>
      </section>
      <section className="bg-[url('/tech-bg-1.png')] py-[180px] sm:py[0]  bg-cover bg-center w-full flex items-center mx-auto px-5">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col">
            <h3 className="text-[48px] leading-[56px] text-left font-medium">
              Technical specifications
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[130px] mt-[40px] sm:mt-[80px]">
              <Table className="w-full border-separate border-spacing-0">
                <TableBody>
                  <TableRow>
                    <TableCell className="font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
                      Model
                    </TableCell>
                    <TableCell className="text-right font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
                      Height-adjustable table
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
                      Dimensions
                    </TableCell>
                    <TableCell className="text-right font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
                      62-127/108-180 cm
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
                      Country of manufacture
                    </TableCell>
                    <TableCell className="text-right font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
                      China
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
                      Material
                    </TableCell>
                    <TableCell className="text-right font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
                      Powder farbuvannya
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
                      Payload
                    </TableCell>
                    <TableCell className="text-right font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
                      1250 N or up to 125 kg
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
                      Noise
                    </TableCell>
                    <TableCell className="text-right font-normal border-b border-[var(--gray-4)] text-[12px]  py-[15px] sm:text-[14px]  sm:py-[25px]">
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
      <section className="relative bg-[url('/table.png')] h-[100vh] bg-cover  bg-center w-full mx-auto px-5 ">
        <h2 className="absolute w-full left-1/2 top-1/2 translate-[-50%] text-[48px] leading-[56px] font-medium text-center px-5">
          Table with electric control
        </h2>
        <div className="absolute w-full left-1/2 top-6/8 translate-[-50%] px-5 flex flex-col justify-center items-center">
          <div className="flex justify-between w-[45%] mb-[62px]">
            <div className="flex flex-col gap-[19px]">
              <span className="text-[12px] font-medium text-[var(--gray-7)]">
                Price
              </span>
              <span className="text-[23px] font-medium">UAH 12 499</span>
            </div>
            <div className="flex flex-col gap-[19px]">
              <span className="text-[12px] text-right font-medium text-[var(--gray-7)]">
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
