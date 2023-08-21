import { MouseEventHandler } from 'react';
import { SearchManufacturer } from '../components/SearchManufacturer';


// Props del Custom Button
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit'
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

// Props del Input
export interface CustomInputProps {
    title: string;
}

// Props del Manufacturador
export interface SearchManufacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}

//Props de la lista de modelos
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number; 
}