import { El } from "@/components/shared/El";
import { TableRow } from "./tableRow";

export const TableTask = () => {
  return El({
    element: "div",
    className: "w-full",
    children: [
      El({
        element: "table",
        className: "w-full border-collapse border border-slate-500",
        children: [
          El({
            element: "thead",
            children: [
              El({
                element: "tr",
                children: [
                  El({
                    element: "th",
                    className: "th text-start pl-2",
                    innerText: "Task Name",
                  }),
                  El({
                    element: "th",
                    className: "th",
                    innerText: "Priority",
                  }),
                  El({
                    element: "th",
                    className: "th",
                    innerText: "Status",
                  }),
                  El({
                    element: "th",
                    className: "th",
                    innerText: "Deadline",
                  }),
                  El({
                    element: "th",
                    className: "th",
                    innerText: "Actions",
                  }),
                ],
              }),
            ],
          }),
          TableRow(),
        ],
      }),
    ],
  });
};
