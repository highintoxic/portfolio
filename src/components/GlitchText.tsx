import { useState, useEffect } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  trigger?: boolean
}

const GlitchText = ({ text, className = '', trigger = false }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`'

  useEffect(() => {
    if (trigger) {
      setIsGlitching(true)
      let iterations = 0
      const maxIterations = 10

      const glitchInterval = setInterval(() => {
        setDisplayText(() => 
          text
            .split('')
            .map((char, index) => {
              if (index < iterations || char === ' ') return char
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            })
            .join('')
        )

        iterations += 1

        if (iterations > maxIterations) {
          clearInterval(glitchInterval)
          setDisplayText(text)
          setIsGlitching(false)
        }
      }, 50)

      return () => clearInterval(glitchInterval)
    }
  }, [trigger, text])

  return (
    <span 
      className={`${className} ${isGlitching ? 'text-glitch' : ''}`}
      data-text={text}
    >
      {displayText}
    </span>
  )
}

export default GlitchText