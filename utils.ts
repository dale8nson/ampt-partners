const variants = {
  initial: {
    y:"20vh",
    opacity: 0
  },
  whileInView: {
    y:0,
    opacity:1
  }
}

export const scrollProps = {
  variants:variants,
  initial:"initial",
  whileInView:"whileInView",
  transition: {
    duration: 0.5, 
    ease:'easeOut'
  }
}