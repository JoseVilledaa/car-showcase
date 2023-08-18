"use client"
import { CustomButtonProps } from '@/types';
import React from 'react'
import Image from "next/image";

export const CustomButton = ({title, containerStyles, handleClick, btnType} : CustomButtonProps) => {
  return (
    <>
    <button
    disabled={false}
    type={'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >

        <span className={`flex-1`}>
            {title}
        </span>
        
    </button>
    </>
  )
}
