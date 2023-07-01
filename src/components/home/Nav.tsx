import Image from "next/image";
import Link from "next/link";

import Icon from "public/icon.svg";

export default function Nav() {

    return (
        <div>
            {/*
                使用justify-between可以让子级div左右分布；items-center使元素居中；h设置高度、px设置左右填充
                加入前缀[sm:]用于排除sm的size，使其动作失效
            */}
            <div className="flex justify-between items-center h-24 sm:px-28 px-2">
            {/* 在父级使用flex内部就会修改为[display: flex]，还原成行内元素；gap-x-2使子标签有水平间隙 */}
            <div className="flex items-center gap-x-2">
                {/* 这个svg里面有隐含display: block，会升级成块级元素，所以会独占一行
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="41" height="41" rx="3" fill="#FF4F5A"/>
                <rect x="15.375" y="10.25" width="21.7812" height="5.125" fill="white"/>
                <rect x="15.375" y="19.2188" width="21.7812" height="5.125" fill="white"/>
                <rect x="15.375" y="28.1875" width="21.7812" height="5.125" fill="white"/>
                </svg> */}
                {/* 复制svg代码改成Image引入，更灵活 */}
                <Image src={Icon as string} alt='logo'/>
                {/* span是行内元素，在div中不会独占一行 */}
                <span className="text-accent-red font-bold">Todo Daily</span>
            </div>
            {/* 子级本来就是行内元素可以不用flex，[flex gap-x-2]可以被替换为[space-x-2]，用于水平方向间隔 */}
            <div className="space-x-5">
                <Link href="/" className="text-accent-red">
                login
                </Link>
                <Link href="/">
                Signup
                </Link>
            </div>
            </div>
        </div>
    )
}
