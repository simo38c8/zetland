// GET date

function Footer() {
  return (
    <footer className="mt-5 bg-[#EBE9E2] py-12 pb-24 text-center lg:mt-24 lg:pb-12">
      <div className="container flex flex-wrap items-center justify-center gap-8">
        <p className="text-sm">
          © {new Date().getFullYear()} The Example Times • Simon Christiansen - Frontend Developer
          • Code test
        </p>
        <div className="grid grid-cols-3 gap-8 text-3xl">
          <a className="rounded-full bg-primary p-3 text-white" href="#">
            <TwitterIcon className="h-8 w-8" />
            <span className="sr-only">Twitter</span>
          </a>
          <a className="rounded-full bg-primary p-3 text-white" href="#">
            <InstagramIcon className="h-8 w-8" />
            <span className="sr-only">Instagram</span>
          </a>
          <a className="rounded-full bg-primary p-3 text-white" href="#">
            <FacebookIcon className="h-8 w-8" />
            <span className="sr-only">Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  )

  function FacebookIcon({ className }: { className: string }) {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }

  function InstagramIcon({ className }: { className: string }) {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }

  function TwitterIcon({ className }: { className: string }) {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }
}

export default Footer
