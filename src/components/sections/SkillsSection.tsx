import InteractiveCard from '../InteractiveCard'
import GlitchText from '../GlitchText'

const SkillsSection = () => {
  const skills = [
    { category: 'FRONTEND', items: ['REACT', 'TYPESCRIPT', 'NEXT.JS', 'TAILWIND'] },
    { category: 'BACKEND', items: ['NODE.JS', 'EXPRESS', 'POSTGRESQL', 'MONGODB', 'REDIS', 'TENSORFLOW.JS'] },
    { category: 'TOOLS', items: ['GIT', 'DOCKER', 'AWS', 'DIGITAL OCEAN', 'FIGMA'] },
    // { category: 'MOBILE', items: ['REACT NATIVE', 'EXPO', 'PWA', 'RESPONSIVE'] }
  ]

  return (
    <section id="skills" className="brutalist-section bg-card">
      <div className="brutalist-container">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <GlitchText text="TECHNICAL ARSENAL" />
          </h2>
          <p className="text-xl font-mono text-muted-foreground">
            TOOLS & TECHNOLOGIES I WIELD TO BUILD THE WEB
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.category} className="space-y-4">
              <InteractiveCard 
                className="p-6 bg-background border-accent hover-tilt" 
                
              >
                <h3 className="font-black text-xl mb-4 text-accent">{skill.category}</h3>
                <div className="space-y-3">
                  {skill.items.map((item) => (
                    <div 
                      key={item}
                      className="font-mono text-sm bg-muted p-2 border-l-4 border-accent transition-all duration-300 hover:translate-x-2"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </InteractiveCard>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <InteractiveCard className="p-8 bg-accent text-accent-foreground text-center">
            <h3 className="text-2xl font-black mb-4">ALWAYS LEARNING</h3>
            <p className="font-mono">
              CURRENTLY EXPLORING: AI/ML INTEGRATION, WEB3, AND ADVANCED PERFORMANCE OPTIMIZATION
            </p>
          </InteractiveCard>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection