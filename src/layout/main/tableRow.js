import { El } from "@/components/shared/El";
import { getOrders } from "@/api/getData";
const orders = await getOrders()
console.log(orders);

export const TableRow = () => {
  
  const data = orders.map((order)=>{
    console.log(order);
    return El({
      element:"tbody",
      children:[
        El({
          element: "tr",
      children: [
        El({
          element: "td",
          className:
            "border-collapse border border-slate-500 py-2 text-start font-semibold pl-2",
          innerText: order.title,
        }),
        El({
          element: "td",
          className: "td",
          children: [
            El({
              element: "span",
              className: "span",
              innerText: order.priority,
              
            }),
          ],
        }),
        El({
          element: "td",
          className: "td",
          children: [
            El({
              element: "span",
              className: "span",
              innerText: order.status,
            }),
          ],
        }),
        El({
          element: "td",
          className: "td",
          children: [
            El({
              element: "span",
              className: "span",
              innerText: order.deadline,
            }),
          ],
        }),
        El({
          element: "td",
          className: "td",
          children: [
            El({
              element: "div",
              className:
                "flex justify-center items-center gap-1 py-1 border border-slate-300 py-2 text-center",
              children: [
                El({
                  element: "img",
                  className: "bg-red-600 cursor-pointer w-8 px-2 py-1 rounded",
                  src: "./src/assets/svg/trash-bin-minimalistic-2-svgrepo-com.svg",
                  elt: "icon trash",
                }),
                El({
                  element: "img",
                  className: "bg-blue-600 cursor-pointer w-8 px-2 py-1 rounded",
                  src: "./src/assets/svg/edit-svgrepo-com.svg",
                  elt: "icon edit",
                }),
                El({
                  element: "img",
                  className: "bg-slate-600 cursor-pointer w-8 px-2 py-1 rounded",
                  src: "./src/assets/svg/eye-svgrepo-com.svg",
                  elt: "icon eye",
                }),
              ],
            }),
          ],
        }),
      ],
      
        })
      ]
    })

  })
  // const changeBgColorPriority =()=>{
  //   if (order.priority === "Low") {
  //     spanPriority.className = "spans bg-slate-400 font-bold";
  //   } else if (item.priority === "Medium") {
  //     spanPriority.className = "spans bg-yellow-400 font-bold";
  //   } else if (item.priority === "High") {
  //     spanPriority.className = "spans bg-red-500 text-white font-bold";
  //   }
  //   return ;
  // }
  console.log(data);
  return El({
    element:"tbody",
    id:"tbody",
    children:[
      ...data
    ]
  })
};
