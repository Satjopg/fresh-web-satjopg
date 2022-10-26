export function SkillCard() {
  return (
    <div class="min-w-[43%] max-w-[43%] sm:min-w-[31%] sm:max-w-[31%] border-1 bg-gray-100 border-black rounded-lg p-3 mt-3 mx-1.5 shadow-sm">
      <p class="font-mono text-lg flex items-center justify-start">
        <svg
          class="h-8 w-8 mr-2 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {"タイトルタイトルタイトルタイトルタイトル"}
      </p>
      <div class="flex flex-col justify-start">
        <span class="mt-2 px-3 mr-auto text-base bg-blue-200 text-blue-800 rounded-full">
          Like
        </span>
      </div>
      <p class="mt-2 ml-1 hidden sm:block">{"詳細"}</p>
    </div>
  );
}
