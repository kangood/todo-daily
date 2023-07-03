export const NavVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    // type=spring表示设为弹簧效果，stiffness设置弹性的量
    transition: {
      type: 'spring',
      stiffness: 200,
    }
  },
}

export const FooterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      // delay表示延迟秒数执行
      delay: 0.3
    }
  },
}