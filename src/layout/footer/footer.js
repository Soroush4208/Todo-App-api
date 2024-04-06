import { El } from "@/components/shared/El";

export const Footer = () => {
  return (
    El({
      element: "hr",
      className: "my-2",
    }),
    El({
      element: "div",
      className: "flex items-end justify-end mt-4 gap-4",
      children: [
        El({
          element: "p",
          innerText: "Rows per page : ",
          className: "",
        }),
        El({
          element: "select",
          name: "selectRows",
          className: "outline-none cursor-pointer",
          children: [
            El({
              element: "option",
              innerText: "All",
              className: "",
            }),
            El({
              element: "option",
              innerText: "1-5",
              className: "",
            }),
            El({
              element: "option",
              innerText: "1-10",
              className: "",
            }),
          ],
        }),
        El({
          element: "p",
          innerText: "1-3 of ",
          className: "",
        }),
        El({
          element: "p",
          innerText: "<",
          className: "cursor-pointer",
        }),
        El({
            element: "p",
            innerText: "1",
          }),
        El({
          element: "p",
          innerText: ">",
          className: "cursor-pointer",
        }),
      ],
    })
  );
};
