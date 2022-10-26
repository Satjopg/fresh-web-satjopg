export function Header() {
  const menuName = ["profile", "skill", "link"];
  return (
    <div class="container mx-auto flex flex-wrap pb-0.5 border-b-2">
      <div class="flex w-full md:w-1/2 md:justify-start justify-center items-center font-extrabold">
        <a href="/">
          <span class="text-2xl pl-2">Satjopg</span>
        </a>
      </div>
      <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
        <div class="flex justify-between flex-1 md:flex-none items-center">
          <ul class="flex justify-between flex-1 md:flex-none items-center">
            {menuName.map((name) => {
              return (
                <li class="mr-3">
                  <a
                    class="inline-block py-2 px-4 rounded-lg text-gray-500 font-medium hover:bg-gray-200 hover:text-gray-700"
                    href={`/${name}`}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
