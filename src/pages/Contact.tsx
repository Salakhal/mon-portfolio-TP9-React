import { useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // 1. On récupère les données du formulaire
    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    
    // 2. On ajoute ta clé (en format objet)
    object.access_key = "eebbde9a-ed73-45de-b4e9-c54e00e417f4";

    // 3. On transforme le tout en JSON (C'est ÇA qui règle l'erreur 400)
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      console.log("Réponse serveur :", result); // Pour voir ce qui se passe dans la console

      if (response.ok && result.success) {
        setStatus("success");
        e.currentTarget.reset(); // On vide le formulaire
        
        // On remet le bouton à la normale après 3 secondes
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        console.error("Message d'erreur Web3Forms :", result.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setStatus("error");
    }
  };

  return (
    <section className="grid min-h-[70vh] grid-cols-1 items-center gap-16 lg:grid-cols-2">
      {/* Côté Gauche : Informations */}
      <div className="flex flex-col justify-center space-y-8">
        <h2 className="text-5xl font-extrabold tracking-tight text-zinc-950 md:text-6xl">
          Prêt à <span className="text-blue-600">collaborer</span> ?
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-zinc-500">
          Je suis actuellement à l'écoute de nouvelles opportunités. Que vous ayez une question, une offre ou un projet en tête, n'hésitez pas à m'écrire.
        </p>
        
        <div className="mt-8 space-y-6">
          <div className="flex items-center gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-950">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">Email</p>
              <a href="mailto:lakhalsalma18@gmail.com" className="text-xl font-bold text-zinc-950 transition-colors hover:text-blue-600">
                lakhalsalma18@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-950">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">Localisation</p>
              <p className="text-xl font-bold text-zinc-950">
                Marrakech, Maroc <span className="text-zinc-400">(Remote)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Côté Droit : Formulaire */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-2xl shadow-zinc-200/50 sm:p-10">
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-zinc-950">Nom complet</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-950 transition-all placeholder:text-zinc-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/10" 
              placeholder="John Doe" 
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-zinc-950">Adresse email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-950 transition-all placeholder:text-zinc-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/10" 
              placeholder="john@example.com" 
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold text-zinc-950">Message</label>
            <textarea 
              id="message" 
              name="message"
              required
              rows={4} 
              className="w-full resize-none rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-950 transition-all placeholder:text-zinc-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/10" 
              placeholder="Parlez-moi de votre projet..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === "loading" || status === "success"}
            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "idle" && (
              <>Envoyer le message <Send size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></>
            )}
            {status === "loading" && (
              <>Envoi en cours... <Loader2 size={18} className="animate-spin" /></>
            )}
            {status === "success" && (
              <>Message envoyé ! <CheckCircle size={18} /></>
            )}
            {status === "error" && (
              <>Erreur. Réessayez.</>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}