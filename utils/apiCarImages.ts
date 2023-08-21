import { CarProps } from "@/types/types";


export const generateCarImageURL = (car: CarProps, angle?: string) => {
    // key hrjavascript-mastery
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', "fullscreen");
    url.searchParams.append('zoomYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}