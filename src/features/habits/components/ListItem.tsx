import { Button } from '@/components';

export const ListItem = ({ title }: { title: string }) => {
  return (
    <article className="p-6 md:pb-10 grid gap-y-4 border-1 border-gray-300 rounded-lg shadow-md bg-white">
      <header className="flex justify-between">
        <div className="flex place-items-center gap-2">
          <h4 className="text-xl font-semibold">{title}</h4>
          <div className="px-2 border border-gray-300 rounded-full text-md text-black font-medium">
            Chip
          </div>
        </div>

        <div className="flex gap-1">
          <Button className="rounded-full size-9">✔</Button>
          <Button className="rounded-full flex items-center justify-center size-9">
            ...
          </Button>
        </div>
      </header>

      <div>
        <div className="mb-1 w-full h-1 bg-gray-200 rounded-full" />

        <div className="flex justify-between">
          <div className="flex gap-1 place-items-center">
            <div className="size-[8px] rounded-full bg-[#18181B]" />
            <span className="text-sm text-gray-500 font-normal">7 days</span>
          </div>

          <div className="flex gap-1 place-items-center">
            <div className="size-[8px] rounded-full bg-[#8B5CF6]" />
            <span className="text-sm text-gray-500 font-normal">14 days</span>
          </div>

          <div className="flex gap-1 place-items-center">
            <div className="size-[8px] rounded-full bg-[#3B82F6]" />
            <span className="text-sm text-gray-500 font-normal">30 days</span>
          </div>
        </div>
      </div>
    </article>
  );
};
