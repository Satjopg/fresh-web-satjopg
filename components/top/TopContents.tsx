export function TopContents() {
  const contentsMenus = [
    { path: "profile", text: "自己紹介はこちら" },
    { path: "skill", text: "スキルについてはこちら" },
  ];
  return (
    <div class="container mx-auto flex flex-wrap py-6">
      <div class="w-full md:w-2/3 flex flex-col items-center px-3">
        <img class="rounded-lg" src="/top.jpg" />
      </div>
      <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
        <div class="w-full bg-white shadow flex flex-col my-4 p-6 rounded-lg">
          <p class="text-xl font-semibold pb-5">About Me</p>
          <p class="pb-2">Web系企業でエンジニアをやらせていただいております</p>
          {contentsMenus.map((menu) => {
            return (
              <a
                class="w-full text-gray-500 font-bold text-sm rounded hover:bg-gray-200 hover:text-gray-700 flex items-center justify-center px-2 py-3 mt-4"
                href={`/${menu.path}`}
              >
                {menu.text}
              </a>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
