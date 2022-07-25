import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import { manfaatVCOList } from "../data/manfaat-data";
import { produkOlahanVCO } from "../data/produk-olahan";

import "swiper/css";
import "swiper/css/free-mode";
import { caraPembuatanVCO } from "../data/cara-pembuatan";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto">
      <Head>
        <title>Virgin Coconut Oil (VCO) | Moro Donorojo 2022</title>
        <meta
          name="description"
          content="KKN-PPM (Kuliah Kerja Nyata - Pembelajaran Pemberdayaan Masyarakat) UGM adalah salah  satu bentuk  nyata  komitmen  kerakyatan  dan kebangsaan Universitas Gadjah Mada. KKN-PPM UGM ini  merupakan  mata  kuliah  wajib  yang mempunyai  sejarah  panjang;  rintisannya  telah dimulai  sejak  tahun  1951. KKN-PPM UGM 2022 Moro Donorojo menyasar dua desa yang terdapat di Kecamatan Donorojo, Kabupaten Pacitan, yaitu Desa Sendang dan Desa Kalak. KKN-PPM UGM 2022 Moro Donorojo memiliki tema 'Peningkatan Ekonomi Desa Kalak dan Sendang yang Berkelanjutan Melalui Konsep Ekowisata' yang bertujuan untuk mengembangkan potensi pariwisata dan meningkatkan ekonomi masyarkat pada Desa Sendang dan Desa Kalak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero w-full h-screen mx-auto relative">
        <div className="absolute text-white p-8 z-10 max-w-xl">
          <h1 className=" text-2xl mb-1">Virgin Coconut Oil</h1>
          <p className="text-sm">
            Virgin Coconut Oil (VCO) adalah minyak yang berasal dari sari pati
            kelapa dan diproses dengan sedikit atau tanpa pemanasan.{" "}
          </p>
        </div>
        <div className="absolute h-full w-full">
          <Image
            src="/images/bg-hero.jpg"
            alt="Gambar kelapa dan ekstrak minyak kelapa murni"
            layout="fill"
            objectFit="cover"
            className="rounded-bl-3xl rounded-br-3xl"
          />
        </div>
      </section>
      <section className="manfaat w-full max-w-xl mx-auto relative">
        <div className="text-black p-8 z-10 ">
          <h1 className=" text-2xl mb-1">Manfaat VCO</h1>
          <div className="manfaat-list mt-2">
            {manfaatVCOList.map((manfaatVCO, index) => {
              return (
                <div key={index} className="flex flex-row items-center mb-2">
                  <div className="h-8 w-8 mr-2">
                    <Image
                      src={manfaatVCO.icon}
                      height={48}
                      width={48}
                      alt="Logo icon"
                    />
                  </div>

                  <p className="w-full">{manfaatVCO.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="produk olahan w-full max-w-xl mx-auto relative">
        <div className="text-black p-8 z-10 ">
          <h1 className=" text-2xl mb-1">Produk Olahan VCO</h1>
          <div className="produkolahan-list mt-2">
            <Swiper
              spaceBetween={20}
              centeredSlides={true}
              slidesPerView={1}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode]}
              className="child:child:!w-min"
            >
              {produkOlahanVCO.map((produk, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      className="rounded-2xl relative w-48 h-72 overflow-hidden bg-slate-300"
                      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                    >
                      <div className="absolute h-full w-full z-0">
                        <Image
                          src={produk.src}
                          alt={`Foto ${produk.namaProduk}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div
                        className="black-overlay absolute w-full h-full z-10"
                        style={{
                          background:
                            "linear-gradient(180.06deg, rgba(255, 255, 255, 0) 0.05%, #1E1E1E 170.97%)",
                        }}
                      />
                      <div className="relative p-4 h-full w-full z-20 flex items-end">
                        <p className="text-right w-full font-main text-white text-xl tracking-wide">
                          {produk.namaProduk}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="cara pembuatan w-full max-w-xl mx-auto relative bg-brown rounded-tl-2xl rounded-tr-2xl">
        <div className="text-white p-8 z-10">
          <h1 className=" text-2xl mb-1">Cara Pembuatan</h1>
          <div className="manfaat-list mt-2">
            <Swiper>
              {caraPembuatanVCO.map((cara, index) => {
                return (
                  <SwiperSlide key={index}>
                    <h3 className="mb-2">Langkah {index + 1}</h3>
                    <div className="relative">
                      <Image
                        src={cara.src}
                        alt={`Cara pembuatan VCO langkah ke-${index + 1}`}
                        height={452}
                        width={678}
                      />
                    </div>
                    <p className="text-sm">{cara.explanation}</p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
}
