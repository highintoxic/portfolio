const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-border">
      <div className="brutalist-container">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-black uppercase tracking-tight">
            KURUVPATEL.DEV
          </div>
          
          <div className="hidden md:flex gap-8">
            {[
              { name: 'ABOUT', id: 'about' },
              { name: 'SKILLS', id: 'skills' },
              { name: 'WORK', id: 'projects' },
              { name: 'CONTACT', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-mono uppercase text-sm hover:text-accent transition-colors duration-200 font-bold"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation