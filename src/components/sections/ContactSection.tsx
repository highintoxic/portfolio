import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="brutalist-section bg-card">
      <div className="brutalist-container">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">LET'S BUILD SOMETHING</h2>
          <p className="text-xl font-mono text-muted-foreground">
            READY TO COLLABORATE? DROP ME A LINE.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="brutalist-block p-3 bg-accent text-accent-foreground">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-black text-lg">EMAIL</div>
                  <div className="font-mono text-muted-foreground">kuruv.pateldr@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="brutalist-block p-3 bg-accent text-accent-foreground">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-black text-lg">PHONE</div>
                  <div className="font-mono text-muted-foreground">+91 9427810784</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="brutalist-block p-3 bg-accent text-accent-foreground">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-black text-lg">LOCATION</div>
                  <div className="font-mono text-muted-foreground">INDIA / REMOTE</div>
                </div>
              </div>
            </div>

            <div className="brutalist-block p-6 bg-background">
              <h3 className="font-black text-xl mb-4 text-accent">AVAILABILITY</h3>
              <p className="font-mono">
                CURRENTLY ACCEPTING NEW PROJECTS AND COLLABORATIONS. 
                RESPONSE TIME: 24-48 HOURS.
              </p>
            </div>
          </div>

          <div className="brutalist-block p-8 bg-background">
            <form className="space-y-6">
              <div>
                <label className="font-black text-sm uppercase mb-2 block">NAME</label>
                <Input 
                  placeholder="YOUR NAME"
                  className="bg-muted border-2 border-border font-mono"
                />
              </div>

              <div>
                <label className="font-black text-sm uppercase mb-2 block">EMAIL</label>
                <Input 
                  type="email"
                  placeholder="YOUR@EMAIL.COM"
                  className="bg-muted border-2 border-border font-mono"
                />
              </div>

              <div>
                <label className="font-black text-sm uppercase mb-2 block">PROJECT TYPE</label>
                <Input 
                  placeholder="WEB APP / API / CONSULTATION"
                  className="bg-muted border-2 border-border font-mono"
                />
              </div>

              <div>
                <label className="font-black text-sm uppercase mb-2 block">MESSAGE</label>
                <Textarea 
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                  className="bg-muted border-2 border-border font-mono min-h-32"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                variant="brutal"
                className="w-full"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection