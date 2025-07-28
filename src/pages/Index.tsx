import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ArtisticBackground from "@/components/ArtisticBackground";
import { BookOpen, Music, Palette } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ArtisticBackground />
      <Header />
      
      <main className="relative z-10">
        {/* Hero section */}
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-8 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-7xl font-bold text-gradient mb-8 brushstroke">
                Kabuki Yamakawa
              </h1>
              
              <p className="text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Welcome to a world of imaginative storytelling, musical creativity, 
                and artistic expression spanning books, comics, and music.
              </p>
              
              {/* Navigation cards */}
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <Link 
                  to="/writing"
                  className="group bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-artistic hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
                >
                  <BookOpen className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">Writing</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Discover the Parable Trilogy, young adult adventures, and stories 
                    that explore the boundaries between reality and imagination.
                  </p>
                </Link>
                
                <Link 
                  to="/music"
                  className="group bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-artistic hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
                >
                  <Music className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">Music</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Imaginative compositions featuring acoustic instruments that bring 
                    stories to life through sound and melody.
                  </p>
                </Link>
                
                <Link 
                  to="/comics"
                  className="group bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-artistic hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
                >
                  <Palette className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">Comics</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Visual storytelling rooted in Korean and Japanese culture, 
                    exploring supernatural encounters and human connections.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* About section */}
        <section className="py-20 bg-gradient-to-br from-canvas/60 to-paper/40">
          <div className="container mx-auto px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gradient mb-8">
                About the Creator
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Kabuki Yamakawa is a multi-disciplinary artist creating immersive worlds 
                through literature, music, and visual storytelling. Drawing inspiration 
                from Asian culture and contemporary themes, each work explores the 
                intersection of tradition and modernity, reality and imagination.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
