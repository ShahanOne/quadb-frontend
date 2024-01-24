'use client';
import Card from '@/components/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';

export default function Home() {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get('https://quadb-server.cyclic.app');
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div className="mainDiv bg-[#191D28] px-6 py-12">
      <div className="flex justify-between pb-8">
        <div>
          <p className="text-[#6BCACB] text-4xl">HODLINFO</p>{' '}
        </div>
        <div className="flex justify-between gap-4">
          <button className="rounded-xl flex gap-2 p-3 bg-[#2e3241] text-white">
            <p>INR</p> <MdArrowDropDown color="white" fontSize={24} />
          </button>
          <button className="rounded-xl flex gap-2 p-3 bg-[#2e3241] text-white">
            <p>BTC</p> <MdArrowDropDown color="white" fontSize={24} />
          </button>
          <button className="rounded-xl flex gap-2 p-3 bg-[#2e3241] text-white">
            <p>BUY BTC </p>
            <MdArrowDropDown color="white" fontSize={24} />
          </button>
        </div>
        <div className="flex gap-4">
          <button className="rounded-full border-4 p-2 border-gray-300 text-[#6BCACB]">
            43
          </button>
          <button className="rounded-xl flex gap-2 p-3 bg-[#44bcbe] text-white">
            <FaPaperPlane color="white" className="mt-1" />{' '}
            <p>Connect Telegram</p>
          </button>
          <div className="flex justify-end bg-[#2e3241] rounded-full  pl-10">
            <button className="rounded-full w-12 m-1 bg-[#6BCACB]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-2">
        <p className="text-[#808388] text-2xl font-thin">Best Price to Trade</p>
      </div>
      <div className="flex justify-between px-12">
        <div className="flex flex-col">
          <p className="text-[#6BCACB] text-5xl">1%</p>
          <p className="text-[#808388] text-thin text-end">5 Mins</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[#6BCACB] text-5xl">1.64%</p>
          <p className="text-[#808388] text-thin text-end">1 Hour</p>
        </div>
        <div className="pl-8">
          <p className="text-white text-7xl">₹ 389394</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[#6BCACB] text-5xl">7.22%</p>
          <p className="text-[#808388] text-thin text-end">1 Day</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[#6BCACB] text-5xl">13.67%</p>
          <p className="text-[#808388] text-thin text-end">7 Days</p>
        </div>
      </div>
      <div className="flex justify-center py-2">
        <p className="text-[#808388] text-lg font-thin">
          Average BTC/INR net price including commission
        </p>
      </div>
      <div className="flex flex-col gap-4 py-12">
        <div className="px-2 grid grid-cols-6">
          <p className="text-[#808388] text-2xl font-bold">#</p>
          <p className="text-[#808388] text-2xl font-bold">Platform</p>{' '}
          <p className="text-[#808388] text-2xl font-bold">Last Traded Price</p>{' '}
          <p className="text-[#808388] text-2xl font-bold text-end">
            Buy/Sell Price
          </p>{' '}
          <p className="text-[#808388] text-2xl font-bold text-end">
            Difference
          </p>{' '}
          <p className="text-[#808388] text-2xl text-end font-bold">Savings</p>
        </div>
        {data?.map((info, index) => (
          <Card
            key={index}
            number={index + 1}
            buyPrice={info.buy}
            sellPrice={info.sell}
            difference={parseInt((info.sell - info.buy) / info.buy) * 100}
            lastTraderPrice={info.last}
            platform={info.name}
            savings={parseInt(info.sell - info.buy)}
          />
        ))}
      </div>
      <hr className="bg-[#808388]" />

      <div className="footer py-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <p className="text-[#808388]">Copyright © 2024</p>
            <p className="text-[#808388]">Hodlinfo.com</p>
          </div>
          <p className="text-[#808388]">Support</p>
        </div>
        <div className="flex justify-center">
          <button className="border-2 rounded text-lg border-[#6BCACB] p-2 text-[#6BCACB]">
            Add hodlinfo to home screen
          </button>
        </div>
      </div>
    </div>
  );
}
