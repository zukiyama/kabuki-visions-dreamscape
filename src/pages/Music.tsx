import Header from "@/components/Header";
import ArtisticBackground from "@/components/ArtisticBackground";
import musicRoomSketch from "@/assets/music-room-sketch.jpg";
import fallingObjectsAlbum from "@/assets/falling-objects-album.jpg";

const Music = () => {
  return (
    <div className="min-h-screen">
      <ArtisticBackground />
      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Hero section with sketched room */}
        <section className="min-h-screen relative flex items-center justify-center">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${musicRoomSketch})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="container mx-auto px-8 text-center relative z-10">
            <h1 className="text-6xl font-bold text-gradient mb-8 brushstroke">
              Music
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
              Imaginative and exciting music featuring acoustic instruments, 
              wood instruments, and creative compositions that bring stories to life.
            </p>

            {/* Dream guitar visualization */}
            <div className="relative mx-auto w-64 h-96 mb-16">
              <div className="absolute inset-0">
                {/* Guitar body melting like liquid */}
                <div className="w-32 h-48 mx-auto bg-gradient-to-b from-amber-400 to-yellow-500 rounded-full opacity-80 animate-pulse"></div>
                
                {/* Extended bending neck */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-64 bg-gradient-to-t from-amber-600 to-amber-400 rounded-full origin-bottom transform rotate-12 float-gentle"></div>
                
                {/* Musical notes floating */}
                <div className="absolute top-10 right-10 text-2xl text-accent float-gentle">♪</div>
                <div className="absolute top-32 left-8 text-xl text-accent float-gentle" style={{ animationDelay: '1s' }}>♫</div>
                <div className="absolute bottom-20 right-16 text-lg text-accent float-gentle" style={{ animationDelay: '2s' }}>♪</div>
              </div>
            </div>
          </div>
        </section>

        {/* Albums section */}
        <section className="py-20 bg-gradient-to-br from-canvas/90 to-paper/80">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
              Albums
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* First album */}
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-artistic">
                    <img 
                      src={fallingObjectsAlbum} 
                      alt="Objects falling from sky album cover"
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">Now</h3>
                        <p className="text-sm opacity-80">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second album */}
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-artistic">
                    <div className="w-full h-80 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center text-white">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold mb-2">Then</h3>
                        <p className="text-lg opacity-80">Musical memories</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">Then</h3>
                        <p className="text-sm opacity-80">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third album */}
            <div className="mt-16 text-center">
              <div className="group cursor-pointer max-w-md mx-auto">
                <div className="relative overflow-hidden rounded-lg shadow-artistic">
                  <div className="w-full h-80 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center text-white">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-2">Third</h3>
                      <p className="text-lg opacity-80">Future sounds</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Third</h3>
                      <p className="text-sm opacity-80">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instruments showcase */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gradient">
              Acoustic & Wood Instruments
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Acoustic Guitar", icon: "🎸" },
                { name: "Violin", icon: "🎻" },
                { name: "Piano", icon: "🎹" }
              ].map((instrument, index) => (
                <div 
                  key={index}
                  className="bg-card/80 backdrop-blur-sm rounded-lg p-8 shadow-artistic hover:shadow-lg transition-all duration-300 hover:-translate-y-2 float-gentle"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="text-6xl mb-4">{instrument.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {instrument.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Music;