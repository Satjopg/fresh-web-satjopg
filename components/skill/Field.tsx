import { SkillCard } from "./Card.tsx";

export function SkillField() {
  return (
    <div class="bg-gray-200 rounded-lg p-2 mx-1 my-4 shadow-md">
      <p class="text-xl font-bold pl-2 pt-2 pb-1">Frontend</p>
      <div class="border-b-2 border-green-500"></div>
      <div class="flex flex-wrap items-center justify-around sm:justify-between">
        {[0, 0, 0, 0].map((_) => {
          return <SkillCard />;
        })}
      </div>
    </div>
  );
}
