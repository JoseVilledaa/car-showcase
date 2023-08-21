"use client";

import React, { useState } from "react";
import { SearchManufacturer } from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { manufacturers } from '../constants/info';

const SearchButton = ({
  otherClasses,
}: {
  otherClasses: string;
}): JSX.Element => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

export const SearchBar = (): JSX.Element => {
  const [manufacturer, setManuFacturer] = useState("");

  const [model, setModel] = useState("");

  const Router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("searching...");

    if(manufacturer === '' && model === '') {
      console.log('empty search');
      return;
    }

    updateSearchParameters(model.toLowerCase(), manufacturer.toLowerCase());

  };

  const updateSearchParameters = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(model){
      searchParams.set('model', model);
    }else{
      searchParams.delete('model');
    }

    if(manufacturer){
      searchParams.set('manufacturer', manufacturer);
    }else{
      searchParams.delete('manufacturer');
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    Router.push(newPathName)

  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};
