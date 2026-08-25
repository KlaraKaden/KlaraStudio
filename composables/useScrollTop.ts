import { onMounted, onUnmounted } from 'vue'

interface Options {
  buttonSelector?: string
  footerSelector?: string
  showAfter?: number
}

export default function useScrollTop(options: Options = {}) {
  const { buttonSelector = '#topBtn', footerSelector = '#footer', showAfter = 100 } = options

  let mybutton: HTMLElement | null = null
  let footer: HTMLElement | null = null

  function scrollFunction() {
    if (!mybutton || !footer) return
    const footerRect = footer.getBoundingClientRect()
    const windowHeight = window.innerHeight

    const scrolled = document.documentElement.scrollTop || document.body.scrollTop
    if (scrolled > showAfter) {
      mybutton.style.display = 'block'
    } else {
      mybutton.style.display = 'none'
    }

    if (footerRect.top <= windowHeight) {
      mybutton.style.position = 'absolute'
      mybutton.style.bottom = '40px'
    } else {
      mybutton.style.position = 'fixed'
      mybutton.style.bottom = '40px'
    }
  }

  function topFunction() {
    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }

  onMounted(() => {
    mybutton = document.querySelector(buttonSelector)
    footer = document.querySelector(footerSelector)
    if (mybutton) mybutton.style.display = 'none'
    window.addEventListener('scroll', scrollFunction)
    scrollFunction()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollFunction)
  })

  return { topFunction }
}
