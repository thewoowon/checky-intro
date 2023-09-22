"use client";
import { useState } from "react";
import Header from "../Header";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

type Tag = {
  name: string;
  color: string;
};

const tags: Tag[] = [
  {
    name: "AI",
    color: "#F87171",
  },
  {
    name: "GPT-3",
    color: "#FBBF24",
  },
  {
    name: "NLP",
    color: "#60A5FA",
  },
  {
    name: "Chrome Extension",
    color: "#34D399",
  },
];

const Playground = () => {
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");

  async function requestSummaryApi(body: { url: string; type: number }) {
    const baseUrl = "/api/analysis";
    const params = {
      url: body.url,
      type: String(body.type),
    };

    const queryString = new URLSearchParams(params).toString(); // url에 쓰기 적합한 querySting으로 return 해준다.
    const requrl = `${baseUrl}?${queryString}`; // 완성된 요청 url.

    await fetch(requrl, {
      method: "GET",
    }).then((res) => {
      console.log(res);
    });
  }

  const isUrl = (url: string) => {
    const regExp = new RegExp(
      "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$"
    );
    return regExp.test(url);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isUrl(input)) {
      alert("올바른 URL을 입력해주세요.");
      return;
    }
    await requestSummaryApi({ url: input, type: checked ? 1 : 0 }).then(
      (res) => {
        console.log(res);
      }
    );
  };
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-start py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-start text-center px-4 py-2 background-gradient">
        <form
          onSubmit={onSubmit}
          className="text-black my-2 flex justify-center items-center gap-2"
          style={{
            width: "550px",
            backgroundColor: "white",
          }}
        >
          <input
            className="h-10 flex-1 outline-none px-4 border-[#b7634f] border rounded-lg"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-orange-500 text-white font-bold rounded-lg"
            type="submit"
          >
            검색
          </button>
        </form>
        <div className="w-[550px] text-black border-[#b7634f] border rounded-lg px-8 py-4 bg-white">
          <div className="flex justify-between items-center py-4 border-b border-zinc-200">
            <div className="font-bold flex text-black items-center gap-2 text-2xl">
              <Image
                src={"/checky-logo.png"}
                width={32}
                height={32}
                alt="logo"
              />
              Checky
              <div className="rounded-full border-black border-2 w-5 h-5 flex justify-center items-center text-sm ml-2">
                ?
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value="isGPT4"
                className="sr-only peer"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <div className="w-14 h-7 relative bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500">
                {checked ? (
                  <div className="absolute top-1.5 left-1 text-xs font-medium text-white">
                    4.0
                  </div>
                ) : (
                  <div className="absolute top-1.5 right-1 text-xs font-medium text-gray-900 dark:text-gray-300">
                    3.5
                  </div>
                )}
              </div>
            </label>
          </div>
          <div className="flex text-xl font-bold py-4">
            # 잠 잘오는 법 숙면영양제 섭취해본 후기
          </div>
          <div className="flex text-sm text-zinc-500">Checky 측정 결과</div>
          <div className="flex text-md font-bold">광고일 가능성이 낮아요</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4 dark:bg-gray-700">
            <div
              className="bg-orange-500 h-2.5 rounded-full dark:bg-orange-400"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="flex justify-end text-zinc-400 py-2 text-xs">
            * GPT 모델과 Checky의 규칙 기반으로 분석되고 있어요.
          </div>
          <div className="flex gap-2 text-sm text-zinc-500 py-6">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center text-xs font-bold text-zinc-500 px-4 py-2 rounded-full"
                style={{ backgroundColor: tag.color }}
              >
                {tag.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-2">
            <div>1. 멜라토닌과 마그네슘은 숙면 개선에 도움.</div>
            <div>2. 밀크 소재와 발레리안 루트는 자연적인 수면 보조물질.</div>
            <div>3. 비타민 B6는 신경 전달 물질 생성과 수면 향상에 연결</div>
          </div>
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="w-full mt-8 noticeSwiper"
              centerInsufficientSlides={true}
              centeredSlidesBounds={true}
              centeredSlides={true}
            >
              <SwiperSlide>
                <div className="w-full h-24 bg-white rounded-lg border-[#b7634f] border p-2">
                  <div className="flex text-sm underline pb-2">멜라토닌</div>
                  <div className="flex text-xs text-left">
                    멜라토닌(영어: melatonin)은 활동일 주기를 조절하는 호르..
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-24 bg-white rounded-lg border-[#b7634f] border p-2">
                  <div className="flex text-sm underline pb-2">마그네슘</div>
                  <div className="flex text-xs text-left">
                    마그네슘(영어: melatonin)은 활동일 주기를 조절하는 호르..
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-24 bg-white rounded-lg border-[#b7634f] border p-2">
                  <div className="flex text-sm underline pb-2">B6</div>
                  <div className="flex text-xs text-left">
                    멜라토닌(영어: melatonin)은 활동일 주기를 조절하는 호르..
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-24 bg-white rounded-lg border-[#b7634f] border p-2">
                  <div className="flex text-sm underline pb-2">멜라토닌</div>
                  <div className="flex text-xs text-left">
                    멜라토닌(영어: melatonin)은 활동일 주기를 조절하는 호르..
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-24 bg-white rounded-lg border-[#b7634f] border p-2">
                  <div className="flex text-sm underline pb-2">마그네슘</div>
                  <div className="flex text-xs text-left">
                    멜라토닌(영어: melatonin)은 활동일 주기를 조절하는 호르..
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-24 bg-white rounded-lg border-[#b7634f] border p-2">
                  <div className="flex text-sm underline pb-2">B6</div>
                  <div className="flex text-xs text-left">
                    멜라토닌(영어: melatonin)은 활동일 주기를 조절하는 호르..
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div></div>
          </div>
        </div>
        <h1 className="text-6xl font-bold text-zinc-700 py-4">Checky</h1>
        <p className="mt-3 text-2xl text-zinc-700">
          Checky is a chrome extension for summarizing text.
        </p>
      </main>
    </div>
  );
};

export default Playground;
