import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ArtisticBackground from "@/components/ArtisticBackground";
import kaijuBoys from "@/assets/kaiju-boys.jpg";
import cultEntrance from "@/assets/cult-entrance.jpg";
import greyTenement from "@/assets/grey-tenement.jpg";

interface Book {
  id: string;
  title: string;
  author?: string;
  series?: string;
  synopsis: string;
  image: string;
  polaroids: Array<{
    image: string;
    caption: string;
    rotation: number;
  }>;
}

const books: Book[] = [
  {
    id: "kaiju",
    title: "KAIJU",
    series: "Book One of The Parable Trilogy",
    synopsis: "Three kids in 1970s Japan discover no one remembers how they came to live in their hometown. To save a girl at their school, Kenji and his friends must uncover the truth. Meanwhile, in Kyoto, a massive disaster strikes, and policewoman Onvels investigates mysterious disappearances that lead to a cover-up reaching far beyond her precinct.",
    image: kaijuBoys,
    polaroids: [
      { image: kaijuBoys, caption: "The three boys begin their journey", rotation: -3 },
      { image: kaijuBoys, caption: "Kyoto in chaos", rotation: 2 },
      { image: kaijuBoys, caption: "Secrets emerge", rotation: -1 }
    ]
  },
  {
    id: "hoax",
    title: "Hoax",
    author: "A Novel by Peter Carlisle",
    synopsis: "Writer Peter Carlisle's brief success turned to despair, driving him to Australia. At his lowest point, he receives a shocking call: people have built a real cult based on his fictional book. Walking into his own creation, he's astonished to find they've made his hoax real. Determined to reveal the truth, he begins to question where his book truly came from.",
    image: cultEntrance,
    polaroids: [
      { image: cultEntrance, caption: "The Secret Everywhere", rotation: 1 },
      { image: cultEntrance, caption: "Peter arrives", rotation: -2 },
      { image: cultEntrance, caption: "Truth or fiction?", rotation: 3 }
    ]
  },
  {
    id: "lights",
    title: "Lights",
    synopsis: "In the grey tenement block of Berezovka, residents carry out their daily routines mindlessly, forgotten like their building. But one day, they start to wake up one by one, each beginning to see something different—lights beneath the surface of their monotonous existence.",
    image: greyTenement,
    polaroids: [
      { image: greyTenement, caption: "The forgotten block", rotation: -2 },
      { image: greyTenement, caption: "Awakening begins", rotation: 1 },
      { image: greyTenement, caption: "Something stirs", rotation: -1 }
    ]
  },
  {
    id: "siphon",
    title: "The Siphon",
    synopsis: "Some things you watched as a child never leave you, even when they shouldn't have existed. When 30-something Elliot Park remembers The Siphons—a strange half-anime children's show—he discovers others who share these impossible memories. The deeper he digs, the more he questions if it was ever just a show.",
    image: greyTenement, // Will be replaced with appropriate image
    polaroids: [
      { image: greyTenement, caption: "Childhood memories", rotation: 2 },
      { image: greyTenement, caption: "The Siphons", rotation: -1 },
      { image: greyTenement, caption: "Glass eyes watching", rotation: 1 }
    ]
  }
];

const youngAdultBooks = [
  {
    title: "The Land is the Dream of the Sky",
    series: "Book One of The Waste Trilogy",
    synopsis: "In a walled town ruled by machines, a blind boy is the only living person until glitchy pilgrim Frjtze arrives, changing everything he thought he knew.",
    color: "from-sky-400 to-blue-600"
  },
  {
    title: "To Fly",
    synopsis: "The war was already over and we lost. Isaac never meant to be chosen for the secret academy training child pilots to fight aliens with technology adults can't master.",
    color: "from-purple-400 to-indigo-600"
  },
  {
    title: "Professor Barnabas",
    synopsis: "Darwin works in a Victorian curiosity shop run by Professor Barnabas, discovering the world of Undon where historical figures still live and nemesis Renard awaits.",
    color: "from-amber-400 to-orange-600"
  }
];

const Writing = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(section);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <ArtisticBackground />
      <Header />
      
      <main className="relative z-10">
        {/* Books sections */}
        {books.map((book, index) => (
          <section 
            key={book.id}
            className="min-h-screen relative flex items-center justify-center p-8"
            style={{
              background: index % 2 === 0 
                ? 'linear-gradient(135deg, hsl(var(--canvas) / 0.9), hsl(var(--paper) / 0.8))'
                : 'linear-gradient(135deg, hsl(var(--paper) / 0.8), hsl(var(--canvas) / 0.9))'
            }}
          >
            <div className="container mx-auto layered-3d">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-2">
                    <h2 className="text-5xl font-bold text-gradient">{book.title}</h2>
                    {book.series && (
                      <p className="text-lg text-muted-foreground">{book.series}</p>
                    )}
                    {book.author && (
                      <p className="text-lg text-muted-foreground">{book.author}</p>
                    )}
                  </div>
                  
                  <p className="text-lg leading-relaxed text-foreground/90">
                    {book.synopsis}
                  </p>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Main image */}
                  <div className="relative">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-96 object-cover rounded-lg shadow-artistic"
                    />
                  </div>

                  {/* Scattered polaroids */}
                  <div className="absolute -top-10 -right-10 space-y-4">
                    {book.polaroids.map((polaroid, pIndex) => (
                      <div 
                        key={pIndex}
                        className="polaroid w-32 hover:scale-105 transition-transform duration-300"
                        style={{ 
                          transform: `rotate(${polaroid.rotation}deg)`,
                          marginTop: pIndex * -20 
                        }}
                      >
                        <img 
                          src={polaroid.image} 
                          alt={polaroid.caption}
                          className="w-full h-20 object-cover"
                        />
                        <p className="text-xs mt-2 text-center text-foreground/70">
                          {polaroid.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Young Adult Books Slideshow */}
        <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/10">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
              Young Adult Series
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {youngAdultBooks.map((book, index) => (
                <div 
                  key={index}
                  className="group bg-card rounded-lg p-6 shadow-artistic hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div 
                    className={`w-full h-48 rounded-lg bg-gradient-to-br ${book.color} mb-4 flex items-center justify-center text-white font-bold text-lg text-center p-4`}
                  >
                    {book.title}
                  </div>
                  
                  {book.series && (
                    <p className="text-sm text-muted-foreground mb-2">{book.series}</p>
                  )}
                  
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {book.synopsis}
                  </p>
                  
                  <div className="mt-4 text-center">
                    <span className="text-xs text-accent font-semibold">Coming Soon</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Writing;