import Header from "@/components/Header";
import ArtisticBackground from "@/components/ArtisticBackground";
import godOfLiesCover from "@/assets/god-of-lies-cover.jpg";
import burdenCover from "@/assets/burden-cover.jpg";

interface Comic {
  id: string;
  title: string;
  synopsis: string;
  coverColor: string;
  coverImage?: string;
  characters: string[];
}

const comics: Comic[] = [
  {
    id: "god-of-lies",
    title: "God of Lies",
    synopsis: "When con man Jin-Ho pretends to be a shaman to speak to the gods for a married couple, he inadvertently raises the God of Lies. The only problem? The god won't leave him alone. As Jin-Ho tries to get rid of his divine companion, he discovers that maybe this chaotic deity can actually be helpful.",
    coverColor: "from-red-600 to-orange-500",
    coverImage: godOfLiesCover,
    characters: ["Jin-Ho", "God of Lies", "The Couple"]
  },
  {
    id: "soul-tied",
    title: "Soul Tied",
    synopsis: "In a crowded Seoul bar, ghost Min-Seo watches people pass right through him until businessman Tae-Jun bumps into him and says 'excuse me.' When they find each other, they discover from the Prince of Dreams that they are soul-tied—bound together and unable to be separated. Two opposite personalities must learn to coexist.",
    coverColor: "from-blue-600 to-purple-500",
    characters: ["Min-Seo (Ghost)", "Tae-Jun (Businessman)", "Prince of Dreams"]
  },
  {
    id: "the-burden",
    title: "The Burden",
    synopsis: "When Hiroshi gets a call about his mother who made his childhood unbearable, he says no. But when his sister tells him their mother has dementia and is forgetting everything, he's forced to share his home with the woman he resents. As her memory slips away, he begins to see her not as his tormentor, but as someone smaller, childlike—and discovers the weight they both carry.",
    coverColor: "from-gray-600 to-slate-500",
    coverImage: burdenCover,
    characters: ["Hiroshi", "His Mother", "His Sister"]
  }
];

const Comics = () => {
  return (
    <div className="min-h-screen">
      <ArtisticBackground />
      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Hero section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-8">
            <h1 className="text-6xl font-bold text-gradient mb-8 brushstroke">
              Comics
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Explore stories of Korean and Japanese culture through supernatural encounters, 
              family bonds, and the connections that bind us across worlds.
            </p>
          </div>
        </section>

        {/* Comics grid */}
        <section className="py-20">
          <div className="container mx-auto px-8 space-y-32">
            {comics.map((comic, index) => (
              <div 
                key={comic.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Comic cover */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    {comic.coverImage ? (
                      <div className="relative overflow-hidden rounded-lg shadow-artistic group-hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                        <img 
                          src={comic.coverImage} 
                          alt={`${comic.title} cover`}
                          className="w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-2xl font-bold mb-2">{comic.title}</h3>
                            <div className="space-y-1">
                              {comic.characters.slice(0, 2).map((character, cIndex) => (
                                <div 
                                  key={cIndex}
                                  className="text-xs opacity-80 bg-white/20 rounded-full px-2 py-1 inline-block mr-1"
                                >
                                  {character}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div 
                        className={`w-full h-96 rounded-lg bg-gradient-to-br ${comic.coverColor} flex items-center justify-center text-white shadow-artistic group-hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
                      >
                        <div className="text-center p-8">
                          <h3 className="text-4xl font-bold mb-4">{comic.title}</h3>
                          <div className="space-y-2">
                            {comic.characters.map((character, cIndex) => (
                              <div 
                                key={cIndex}
                                className="text-sm opacity-80 bg-white/20 rounded-full px-3 py-1 inline-block mx-1"
                              >
                                {character}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Character sheets in background */}
                    <div className="absolute -top-4 -right-4 w-20 h-28 bg-paper rounded opacity-60 rotate-12 shadow-lg"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-24 bg-paper rounded opacity-60 -rotate-6 shadow-lg"></div>
                  </div>
                </div>

                {/* Synopsis */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="text-4xl font-bold text-gradient mb-4">
                      {comic.title}
                    </h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-foreground/90">
                    {comic.synopsis}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                      Web Comic
                    </span>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Character development sketches background */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {/* Decorative character sketch elements */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`absolute w-16 h-24 bg-gray-300 rounded float-gentle`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  transform: `rotate(${Math.random() * 40 - 20}deg)`
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Character Development
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Each comic features carefully crafted characters rooted in Korean and Japanese culture, 
              exploring themes of family, spirituality, and human connection through supernatural lens.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Comics;