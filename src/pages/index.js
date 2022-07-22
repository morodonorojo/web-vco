import Head from "next/head";
import Image from "next/image";
import { manfaatVCOList } from "../data/manfaat-data";

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
        <div className="absolute text-white p-8 z-10 max-w-sm">
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
      <section className="manfaat w-full h-screen mx-auto relative">
        <div className="text-black p-8 z-10 max-w-sm">
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
    </main>
  );
}
