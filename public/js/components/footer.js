import routes from "../data/routes.js";

export default function footer() {
  const el = document.querySelector("footer #footer");
  if (!el) {
    return;
  }
  el.className += " grid grid-cols-4 gap-5 text-xs";

  const selectedRoutes = routes.slice(0, -1);

  for (const route of selectedRoutes) {
    const div = document.createElement("div");
    const header = document.createElement("h6");
    header.className = "font-bold uppercase";
    header.innerHTML = route.label;

    const ul = document.createElement("ul");
    ul.className = "mt-2 grid gap-1 text-[0.7rem]"

    for (const childRoute of route.children) {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = childRoute.to;
      a.innerHTML = childRoute.label;
      a.className = "hover:underline";

      li.appendChild(a);
      ul.appendChild(li);
    }

    div.appendChild(header);
    div.appendChild(ul);
    el.appendChild(div);
  }

}