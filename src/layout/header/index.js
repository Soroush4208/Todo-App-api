import { El } from "@/components/shared/El"

export const Header =()=>{
    return El({
        element: 'Header',
        className: 'w-full bg-[#6200ea] flex justify-between p-4',
        children: [
          El({
            element: 'div',
            className: 'flex items-center gap-2',
            children: [
              El({
                element: 'img',
                className: 'cursor-pointer',
                src: './src/assets/svg/Menu Cheesesburger.svg',
                alt: 'icon_menu',
              }),
              El({
                element: 'div',
                className: 'text-white',
                children: 'My To-Do Tasks',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex gap-3',
            children: [
              El({
                element: 'form',
                className: 'relative flex items-center',
                children: [
                  El({
                    element: 'input',
                    className:
                      'rounded-md pl-9 py-1 outline-0 opacity-100 placeholder-opacity-100 bg-[#d5d5ec40]',
                    id: 'search',
                    type: 'text',
                    placeholder: 'Search',
                    onkeyup: 'findElement()',
                  }),
                  El({
                    element: 'img',
                    className: 'absolute p-2 w-10 cursor-pointer',
                    src: './src/assets/svg/Search 2.svg',
                  }),
                ],
              }),
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                src: './src/assets/svg/filter-keyword-svgrepo-com.svg',
                alt: 'filter',
              }),
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                id: 'addData',
                alt: 'addUser',
                src: './src/assets/svg/plus-square-svgrepo-com.svg',
                // eventListener: [{ event: 'click', callback: showMadal }],
              }),
            ],
          }),
        ],
      });
}