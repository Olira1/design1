export default function Footer() {
  const footerColumns = [
    {
      title: 'For Business',
      links: ['Ventilation', 'Design', 'Air conditioning', 'Installation'],
    },
    {
      title: 'For House',
      links: ['Ventilation', 'Air conditioning', 'Installation'],
    },
    {
      title: 'For Flat',
      links: ['Ventilation', 'Design', 'Air conditioning', 'Installation'],
    },
    {
      title: 'Info',
      links: ['About us', 'Works', 'Contacts'],
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-[#ececee] pb-8 pt-10 md:pt-14">
      <div className="relative h-[220px] overflow-visible md:h-[300px]">
        {/* <h2 className="absolute inset-x-0 bottom-[-3.1rem] z-10 select-none text-center text-[clamp(9rem,36vw,25rem)] font-black uppercase leading-[0.78] tracking-[0.02em] text-transparent [background:linear-gradient(180deg,#ffffff_0%,#dadce0_22%,#8c9098_52%,#34373e_76%,#050607_100%)] bg-clip-text md:bottom-[-4.6rem]">
          FDTC
        </h2> */}
      </div>

      <div className="relative z-0 -mt-24 w-full rounded-t-[3rem] bg-[#040506] px-4 pb-10 pt-32 md:-mt-32 md:rounded-t-[4rem] md:px-6 md:pb-12 md:pt-40">
        <div className="mx-auto w-full max-w-[1250px]">
          <div className="grid gap-6 rounded-2xl bg-[#2f3646] p-6 text-white md:grid-cols-[1.25fr_0.65fr] md:items-stretch md:p-0">
            <div className="md:p-8">
              <h3 className="text-3xl font-medium leading-tight md:text-4xl">Do you need help?</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65 md:text-[15px]">
                We will provide detailed information about our services, types of
                work, and top projects. We will calculate the cost and prepare a
                commercial proposal.
              </p>
            </div>
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#3a4357] px-5 py-6 text-lg font-medium text-white transition hover:brightness-110 md:rounded-r-2xl md:rounded-l-none md:px-8"
            >
              Get consultation
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 text-white/65 md:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  {column.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm transition hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
