

import { useState } from 'react'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import footerImg from "../../assets/icons/Vector.png"


const footerLinkGroups = [
  { links: ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'] },
  { links: ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'] },
  { links: ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'] },
]

export function ByteSpaceMark() {
  return (
    <span aria-hidden="true" className="relative block h-6 w-6 shrink-0">
      <span className="absolute left-0 top-0 h-6 w-3.5 rounded-bl-[9px] rounded-tl-[9px] rounded-tr-[9px] bg-[#c8ff00]" />
      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-br-[9px] rounded-tl-[9px] rounded-tr-[9px] bg-[#c8ff00]" />
    </span>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <footer className="border-t border-[#dedede] bg-white text-[#252525]">
      <div className="mx-auto flex  flex-col px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21 py-8 md:py-12 lg:py-15">
        <div className="grid gap-6 lg:grid-cols-[minmax(360px,1.45fr)_minmax(0,1.75fr)] lg:gap-16">
          <div>
            <a href="#" className="inline-flex items-center gap-2" aria-label="ByteSpace home">
              <img src={footerImg} alt="logo" />
              <span className="text-[18px] font-extrabold">ByteSpace</span>
            </a>
            <p className="mt-4 max-w-[370px] text-[10px] leading-[1.55] text-[#444] sm:text-sm">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex max-w-[373px] flex-col gap-3 min-[400px]:flex-row min-[400px]:items-center ">
              <label htmlFor="newsletter-email" className="sr-only ">Enter your email</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => { setEmail(event.target.value); setSubmitted(false) }}
                placeholder="Enter your email"
                required
                className="h-[39px] min-w-0 flex-1 rounded-full border border-[#d9d9d9] px-[17px] text-[11px] md:text-sm outline-none transition placeholder:text-[#555] focus:border-[#a9d900] focus:ring-2 focus:ring-[#c8ff00]/30"
              />
              <button type="submit" className="group inline-flex h-[35px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#c8ff00] px-[18px] text-[12px] font-medium transition hover:bg-[#b6ed00] focus:outline-none focus:ring-2 focus:ring-[#9bbd00] focus:ring-offset-2">
                {submitted ? <><FiCheck aria-hidden="true" /> Subscribed</> : <>Search <FiArrowRight aria-hidden="true" className="hidden transition-transform group-hover:translate-x-0.5" /></>}
              </button>
            </form>
            
            <p className="mt-5 max-w-[375px] text-[9px] md:text-sm  text-[#555]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-3 lg:pt-0">
            {footerLinkGroups.map((group) => (
              <ul key={group.links[0]} className="space-y-4">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[10px] text-[#414141] transition-colors hover:text-[#9abd00] focus:outline-none focus:underline sm:text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-[#dedede] pt-5 ">

          <div className="flex flex-col gap-4 text-[9px] text-[#555] sm:flex-row sm:items-center sm:justify-between sm:text-[10px] md:text-sm">
            <p>© 2023 ByteSpace. All rights reserved.</p>
            <nav aria-label="Legal navigation" className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#" className="hover:text-[#9abd00]">Privacy Policy</a>
              <a href="#" className="hover:text-[#9abd00]">Terms of Service</a>
              <a href="#" className="hover:text-[#9abd00]">Cookies Settings</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
