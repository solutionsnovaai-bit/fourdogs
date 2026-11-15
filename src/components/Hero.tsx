import { Navigation } from 'lucide-react'
import { waLink } from '../lib/whatsapp'
import { linkRota } from '../lib/mapa'
import BrandIcon from './BrandIcon'
import { Pata } from './Icones'

export default function Hero({ pronto }: { pronto: boolean }) {
  return <section id="inicio" className={`hero hero-banho amor-hero ${pronto ? 'is-pronto' : ''}`}>
    <picture className="amor-hero-arte">
      <source media="(max-width: 760px)" srcSet="/amor/hero-logo-mobile.webp" />
      <img data-hero-principal src="/amor/hero-logo-desktop.webp" width={1672} height={941}
        fetchPriority="high" alt="Amor por Patinhas, banho e tosa" />
    </picture>
    <div className="wrap amor-hero-conteudo">
      <div className="hero-cartao">
        <span className="hero-selo"><Pata />Vila Carrão · São Paulo</span>
        <h1>Banho e tosa<br /><span>com carinho.</span></h1>
        <p className="hero-texto">Um dia de cuidado para o seu cão sair limpinho e de visual renovado.</p>
        <div className="hero-acoes">
          <a className="botao botao-whats" href={waLink()} target="_blank" rel="noopener noreferrer"><BrandIcon brand="whatsapp" />Agendar no WhatsApp</a>
          <a className="botao botao-claro" href={linkRota} target="_blank" rel="noopener noreferrer"><Navigation size={18} aria-hidden="true" />Como chegar</a>
        </div>
      </div>
    </div>
  </section>
}
