import Header from "@/components/Header";
import ArtisticBackground from "@/components/ArtisticBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import kanjiBoys from "@/assets/kaiju-boys.jpg";
import cultEntrance from "@/assets/cult-entrance.jpg";
import greyTenement from "@/assets/grey-tenement.jpg";
import landDreamSky from "@/assets/land-dream-sky-cover.jpg";
import toFly from "@/assets/to-fly-cover.jpg";
import professorBarnabas from "@/assets/professor-barnabas-cover.jpg";

const Writing = () => {
  const youngAdultBooks = [
    {
      id: "land-dream-sky",
      title: "The Land Is The Dream Of The Sky",
      synopsis: "A blind boy in a machine-ruled town meets a glitchy pilgrim who changes everything he thought he knew. When mysterious attackers destroy their town in a single night, they're cast into the great wasteland to uncover the truth about what was lost and who he really is.",
      image: landDreamSky
    },
    {
      id: "to-fly",
      title: "To Fly",
      synopsis: "Isaac was never meant to be chosen for the secret academy training pilots to fight aliens. The war was already over, and we lost. But when he fails as a pilot, he starts seeing things in the forest that shouldn't exist in an artificial space—and finds his own unique path.",
      image: toFly
    },
    {
      id: "professor-barnabas",
      title: "Professor Barnabas",
      synopsis: "Darwin works in Professor Barnabas's curiosity shop in Victorian London, discovering the hidden world of Undon where historical figures still live. Together they must face their nemesis, the wily European Renard, in snowy Victorian adventures.",
      image: professorBarnabas
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-parchment via-aged-paper to-canvas">
      <Header />
      <ArtisticBackground />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 text-ink-primary font-artistic bg-gradient-to-r from-ink-primary to-artistic-gold bg-clip-text text-transparent">
              Literary Works
            </h1>
            <p className="text-xl text-ink-secondary max-w-2xl mx-auto font-reading leading-relaxed">
              Immersive stories that blend reality with the fantastical, exploring themes of memory, identity, and the spaces between worlds.
            </p>
          </div>

          {/* Main Novel Series */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-center text-ink-primary font-artistic">
              The Parable Trilogy & Beyond
            </h2>
            
            {/* KAIJU - Book One */}
            <div className="relative mb-32 group">
              <div 
                className="absolute inset-0 rounded-3xl transform rotate-1 opacity-30 transition-opacity duration-300 group-hover:opacity-50"
                style={{
                  backgroundImage: `url(${kanjiBoys})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'sepia(40%) contrast(1.2) blur(2px)',
                }}
              />
              
              <Card className="relative bg-canvas/95 backdrop-blur-lg border-2 border-artistic-gold/40 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-artistic-gold/20">
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-4xl font-artistic text-ink-primary mb-2 tracking-wide">
                        KAIJU
                      </CardTitle>
                      <CardDescription className="text-xl text-ink-secondary font-reading">
                        Book One of The Parable Trilogy
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-artistic-gold/30 text-artistic-gold border-artistic-gold/50 px-4 py-2 text-sm font-semibold">
                      Coming Soon
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-3 space-y-6">
                      <p className="text-ink-secondary leading-relaxed font-reading text-lg">
                        Three kids in 1970s Japan discover that no one can remember how they came to live in their hometown. When they try to save a girl at their school, they realize they must venture out to find answers. Meanwhile, a devastating disaster strikes Kyoto, and a police woman investigating mysterious disappearances believes there's a cover-up that goes far beyond her small rural precinct.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-parchment/60 to-aged-paper/60 p-6 rounded-xl border border-artistic-gold/20">
                          <h4 className="font-bold text-ink-primary mb-3 font-artistic">Setting</h4>
                          <p className="text-ink-secondary font-reading">1970s Japan</p>
                        </div>
                        <div className="bg-gradient-to-br from-parchment/60 to-aged-paper/60 p-6 rounded-xl border border-artistic-gold/20">
                          <h4 className="font-bold text-ink-primary mb-3 font-artistic">Themes</h4>
                          <p className="text-ink-secondary font-reading">Memory, Truth, Adventure</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 space-y-6">
                      <div className="polaroid-frame transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-110">
                        <img 
                          src={kanjiBoys} 
                          alt="Three boys in 1970s Japan" 
                          className="w-full h-48 object-cover"
                        />
                        <p className="text-sm text-center mt-3 text-ink-secondary font-reading">Summer of Discovery</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* HOAX */}
            <div className="relative mb-32 group">
              <div 
                className="absolute inset-0 rounded-3xl transform -rotate-1 opacity-30 transition-opacity duration-300 group-hover:opacity-50"
                style={{
                  backgroundImage: `url(${cultEntrance})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'sepia(40%) contrast(1.2) blur(2px)',
                }}
              />
              
              <Card className="relative bg-canvas/95 backdrop-blur-lg border-2 border-artistic-gold/40 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-artistic-gold/20">
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-4xl font-artistic text-ink-primary mb-2 tracking-wide">
                        HOAX
                      </CardTitle>
                      <CardDescription className="text-xl text-ink-secondary font-reading">
                        A Novel by Peter Carlisle
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-artistic-gold/30 text-artistic-gold border-artistic-gold/50 px-4 py-2 text-sm font-semibold">
                      Coming Soon
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-2 space-y-6">
                      <div className="polaroid-frame transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-110">
                        <img 
                          src={cultEntrance} 
                          alt="Cult entrance in Australian outback" 
                          className="w-full h-48 object-cover"
                        />
                        <p className="text-sm text-center mt-3 text-ink-secondary font-reading">The Secret Everywhere</p>
                      </div>
                    </div>
                    
                    <div className="md:col-span-3 space-y-6">
                      <p className="text-ink-secondary leading-relaxed font-reading text-lg">
                        Writer Peter Carlisle's book was a brief success before fading into obscurity. Desperate, he flees to Australia, only to receive a shocking phone call: people have built an actual cult based on his fictional work. Walking into what feels like his own book come to life, Peter must convince them it was all a hoax—but in doing so, he begins to question where his story truly came from.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-parchment/60 to-aged-paper/60 p-6 rounded-xl border border-artistic-gold/20">
                          <h4 className="font-bold text-ink-primary mb-3 font-artistic">Setting</h4>
                          <p className="text-ink-secondary font-reading">Australian Outback</p>
                        </div>
                        <div className="bg-gradient-to-br from-parchment/60 to-aged-paper/60 p-6 rounded-xl border border-artistic-gold/20">
                          <h4 className="font-bold text-ink-primary mb-3 font-artistic">Themes</h4>
                          <p className="text-ink-secondary font-reading">Reality, Purpose, Creation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* THE MARKET */}
            <div className="relative mb-32 group">
              <Card className="relative bg-canvas/95 backdrop-blur-lg border-2 border-artistic-gold/40 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-artistic-gold/20">
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-4xl font-artistic text-ink-primary mb-2 tracking-wide">
                        THE MARKET
                      </CardTitle>
                      <CardDescription className="text-xl text-ink-secondary font-reading">
                        A Corporate Dystopia
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-artistic-gold/30 text-artistic-gold border-artistic-gold/50 px-4 py-2 text-sm font-semibold">
                      Coming Soon
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-ink-secondary leading-relaxed font-reading text-lg">
                    A businessman travels to Laressa, the world's first corporate nation-state. With nothing left in England after his girlfriend leaves him, this incredible opportunity seems too good to be true. But his new company at Vergo Towers possesses bizarre technology that challenges everything he thought he knew about reality.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* LIGHTS */}
            <div className="relative mb-32 group">
              <div 
                className="absolute inset-0 rounded-3xl transform rotate-1 opacity-30 transition-opacity duration-300 group-hover:opacity-50"
                style={{
                  backgroundImage: `url(${greyTenement})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'sepia(40%) contrast(1.2) blur(2px)',
                }}
              />
              
              <Card className="relative bg-canvas/95 backdrop-blur-lg border-2 border-artistic-gold/40 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-artistic-gold/20">
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-4xl font-artistic text-ink-primary mb-2 tracking-wide">
                        LIGHTS
                      </CardTitle>
                      <CardDescription className="text-xl text-ink-secondary font-reading">
                        A Mysterious Awakening
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-artistic-gold/30 text-artistic-gold border-artistic-gold/50 px-4 py-2 text-sm font-semibold">
                      Coming Soon
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-ink-secondary leading-relaxed font-reading text-lg">
                    In the grey tenement blocks of Krasnobor, elderly residents carry out their daily routines mindlessly, as forgotten as their building. But one by one, they begin to wake up and see something different—mysterious lights that change everything they thought they knew about their existence.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* THE SIPHON */}
            <div className="relative mb-32 group">
              <Card className="relative bg-canvas/95 backdrop-blur-lg border-2 border-artistic-gold/40 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-artistic-gold/20">
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-4xl font-artistic text-ink-primary mb-2 tracking-wide">
                        THE SIPHON
                      </CardTitle>
                      <CardDescription className="text-xl text-ink-secondary font-reading">
                        Memory & Reality
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-artistic-gold/30 text-artistic-gold border-artistic-gold/50 px-4 py-2 text-sm font-semibold">
                      Coming Soon
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-ink-secondary leading-relaxed font-reading text-lg">
                    Some things you watched as a child never leave you, even when they shouldn't have existed. When 30-something Elliot Park remembers The Siphons—a strange half-anime children's show—he discovers others who share these impossible memories. The deeper he digs, the more he questions if it was ever just a show.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-20 bg-gradient-to-r from-transparent via-artistic-gold/50 to-transparent h-px" />

          {/* Young Adult Series */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-center text-ink-primary font-artistic">
              Young Adult Series
            </h2>
            
            <div className="bg-gradient-to-br from-canvas/60 to-parchment/40 backdrop-blur-lg rounded-3xl p-12 border-2 border-artistic-gold/30 shadow-2xl">
              <ImageCarousel items={youngAdultBooks} className="mb-8" />
              
              <div className="text-center mt-12">
                <p className="text-ink-secondary font-reading text-lg max-w-2xl mx-auto">
                  Immersive adventures for young adults featuring rich world-building, compelling characters, and themes of discovery, courage, and finding one's true path.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Writing;