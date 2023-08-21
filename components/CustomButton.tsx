"use client"
import { CustomButtonProps } from '@/types/types';
import React from 'react'
import Image from "next/image";

export const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon} : CustomButtonProps) => {
  return (
    <>
    <button
    disabled={false}
    type={'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >

        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>

        {rightIcon && (
          <div className='relative w-6 h-6'>
            <Image
            
            src={rightIcon}
            alt="NO ICON"
            fill
            className='object-contain'
            />
          </div>
        )}
        
    </button>
    </>
  )
}
