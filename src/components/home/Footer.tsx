import Image from "next/image";

import Icon from "public/icon.svg";

export const Footer = () => {
  return (
    // border-t是在顶部添加分割线；然后border-指定颜色
    <div className="justify-between border-t border-primary pt-4 sm:mx-28 sm:flex">
      {/* 左边 */}
      <div className="flex flex-col items-center gap-y-6">
        {/* 左上 */}
        <div className="flex items-center gap-x-3">
          <Image src={Icon as string} alt="logo" />
          <div>
            <p>Lets change your habit</p>
            <p>join with million people</p>
          </div>
        </div>
        {/* 左下 */}
        <div>
          <p>DK Tech Company</p>
          <p className="font-light">Uma Street, Lost City, Aincard</p>
        </div>
      </div>
      {/* 右边 */}
      <div className="mt-4 flex justify-center gap-x-20 sm:mt-0">
        <div className="flex flex-col gap-y-4">
          <div className="text-xl text-primary">Features</div>
          <div className="flex flex-col gap-y-1">
            <div>Lorem</div>
            <div>Ipsum</div>
            <div>Sit</div>
            <div>Dolor</div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="text-xl text-primary">Pricing</div>
          <div className="flex flex-col gap-y-1">
            <div>Lorem</div>
            <div>Ipsum</div>
            <div>Sit</div>
            <div>Dolor</div>
          </div>
        </div>
      </div>
    </div>
  );
};
