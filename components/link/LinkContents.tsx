type LinkMenu = {
  readonly url: string;
  readonly text: string;
};

export function LinkContents() {
  const linkMenus: LinkMenu[] = [
    { url: "https://github.com/Satjopg", text: "Github" },
    { url: "https://zenn.dev/satjopg", text: "Zenn(メイン)" },
    { url: "https://qiita.com/Satjopg", text: "Qiita(多分更新しない)" },
    { url: "https://www.instagram.com/satjopg/", text: "instagram" },
  ];

  return (
    <div class="container mx-auto">
      <div class="m-2 border-b-1 border-green-500">
        <h1 class="text-2xl font-bold">外部コンテンツ</h1>
      </div>
      <ul class="m-2 min-h-full border-1 rounded-lg bg-gray-100">
        {linkMenus.map((menu) => {
          return (
            <a href={menu.url} target="_blank" rel="noopener noreferrer">
              <li class="py-1 pl-3 my-5 sm:my-3 ml-2 mr-2 sm:mr-0 shadow-xl bg-green-50 sm:w-1/3 rounded-lg text-lg">
                {menu.text}
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
