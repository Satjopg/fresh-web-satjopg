export function Footer() {
  const nowYear = new Date().getFullYear();
  return (
    <div class="container mx-auto border-t-2 items-center pt-3 pb-20 font-sans text-gray-500">
      <div class="md:flex justify-between">
        <p class="ml-3">
          Copyright©{nowYear}
          <a
            class="font-bold pl-1 pr-1 hover:underline"
            href="https://github.com/Satjopg"
            target="_blank"
          >
            Satjopg
          </a>
          All Rights Reserved.
        </p>
        <a
          class="pl-4 pr-5 hover:underline"
          href="https://github.com/Satjopg/web-satjopg"
          target="_blank"
        >
          Source by GitHub
        </a>
      </div>
    </div>
  );
}
