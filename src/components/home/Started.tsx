import Image from "next/image";

const Started = () => {
  return (
    // 使用[sm:flex-row]让大部分布局横着排列，排除sm最小size另用[flex-col]竖着排列
    <div className="mb-2 flex flex-col gap-x-4 px-2 sm:mb-28 sm:mt-20 sm:flex-row sm:px-28">
      <div>
        <Image
          src="/started.png"
          alt="started"
          width="586"
          height="370"
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-y-8 pt-10">
        <p className="text-center text-3xl font-bold sm:text-left">
          Achieve your target and won your life
        </p>
        <div className="text-center sm:text-left">
          <button className="rounded-lg bg-primary px-4 py-2 text-white hover:opacity-70">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Started;
