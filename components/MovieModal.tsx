"use client";

import React, { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MovieModalContext } from "@/context/MovieModalContext";
import { IoCloseCircleSharp } from "react-icons/io5";
import { AddToMyList, MovieModalContent, PlayButton } from ".";
import { BsHandThumbsUp } from "react-icons/bs";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { mutate } from "swr";
import { MyListContext } from "@/context/MyListContext";

const MovieModal = () => {
  const { isOpen, setIsOpen, currentMovie } = useContext(MovieModalContext);
  const { myList } = useContext(MyListContext);
  const [movieAdded, setMovieAdded] = useState(false);
  const searchParams = useSearchParams();

  const existsOnList = myList?.find(
    (show: any) => show.showId === currentMovie?.show.id
  )
    ? true
    : false;

  const profileId = searchParams.get("id");

  console.log(existsOnList);

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const addToMyListHandler = async () => {
    const res = await axios.post("api/addToList", {
      show: currentMovie,
      profileId,
    });

    if (res.status === 200) {
      setMovieAdded(true);
      mutate("/api/fetchMyList");
    }
  };

  const deleteFromMyListHandler = async () => {
    console.log("delete function");
    const res = await axios.post("api/deleteFromMyList", {
      showId: currentMovie?.show.id,
      profileId,
    });

    if (res.status === 200) {
      setMovieAdded(false);
      mutate("/api/fetchMyList");
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-60" onClose={closeModalHandler}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-primary-black  bg-opacity-60 z-30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto z-[90]">
          <div className="flex min-h-full items-start justify-center pt-10 sm:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-full">
                <Dialog.Panel className="w-full mx-auto  xl:max-w-[60%]  max-w-[95%] transform overflow-hidden rounded-md bg-primary-black  text-left align-middle shadow-xl transition-all ">
                  <div className="relative   w-full   overflow-hidden aspect-video pointer-events-none ">
                    <iframe
                      className="w-[300%]  h-[100%]   -ml-[100%] object-cover brightness-75 "
                      src={`https://www.youtube.com/embed/${currentMovie?.videoKey}?autoplay=1&mute=1&playlist=${currentMovie?.videoKey}&loop=1&color=white&controls=0&modestbranding=1&rel=0`}
                    />

                    <button
                      onClick={closeModalHandler}
                      className="absolute top-4 right-3  pointer-events-auto"
                    >
                      <IoCloseCircleSharp className="text-4xl text-primary-black-300" />
                    </button>
                    <h3 className=" absolute bottom-10 left-5  pointer-events-auto text-lg font-bold mb-3">
                      {currentMovie?.show?.title}
                    </h3>
                    <div className="flex gap-2 sm:gap-3 absolute bottom-3.5 left-5  pointer-events-auto">
                      <PlayButton
                        btnTextClassName="text-xs"
                        btnClassName="px-3 py-0.5 "
                        iconClassName="text-xs"
                      />
                      <AddToMyList
                        deleteFromMyList={deleteFromMyListHandler}
                        existsOnList={existsOnList}
                        addToMyList={addToMyListHandler}
                        movieAdded={movieAdded}
                      />

                      <button className="modal_btn">
                        <BsHandThumbsUp className="modal_btn_icon" />
                      </button>
                    </div>
                  </div>

                  <MovieModalContent show={currentMovie?.show} />
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MovieModal;
