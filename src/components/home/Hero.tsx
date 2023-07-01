import Image from "next/image";

export default function Hero() {
    return (
        <div className="">
            {/* text-center让文字在block内居中；w-[]设置宽度，超出就换行；my是上下外边距、px是左右内边距 */}
            <p className="text-3xl font-bold text-center w-[400px] m-auto my-10 px-1.5">Organizing your day activity with Todo Daily</p>
            {/*  */}
            <div className="relative">
                {/* absolute使用绝对定位，固定在父级顶部位置；再用[left-0 right-0 text-center]配合居中(?[top-0]) */}
                <div className="absolute left-0 right-0 text-center">
                    {/* py是上下内边距；rounged是圆形边框；hover:opacity设置元素透明度 */}
                    <button className="text-white bg-primary py-2 px-4 rounded-lg hover:opacity-70">Get started</button>
                </div>
                {/* 这里src的路径不用指定public目录，是会自动去找图片？ */}
                <Image src="/hero.png" alt="hero" width="1363" height="909" className="w-full"></Image>
            </div>
        </div>
    )
}