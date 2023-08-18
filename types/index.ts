import {MouseEventHandler} from 'react';
import { SearchManufacturer } from '../components/SearchManufacturer';

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit' 
}

export interface CustomInputProps {
    title: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void; 
}