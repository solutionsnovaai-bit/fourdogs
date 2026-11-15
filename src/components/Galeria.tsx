import CarrosselFotos from './CarrosselFotos'
import { LOJA } from '../loja'
import { Pata } from './Icones'
import { Titulo } from './Reveal'

const FOTOS = [
  ['01', 'Cão de pelo caramelo e escuro com um laço'],
  ['03', 'Cão branco com gravata azul'],
  ['06', 'Cão branco e marrom com laços cor-de-rosa'],
  ['08', 'Cão de pelo claro com gravata colorida'],
  ['09', 'Pug com bandana roxa'],
  ['11', 'Cão de pelo dourado com gravata verde'],
]

export default function Galeria() {
  return <section id="galeria" className="secao amor-galeria">
    <div className="wrap">
      <header className="secao-cabeca">
        <span className="sobretitulo"><Pata />Galeria</span>
        <Titulo linhas={['Quem passou por aqui']} destaque="saiu de visual novo." className="h2" />
      </header>
      <CarrosselFotos>
        {FOTOS.map(([id, alt]) => <li key={id}><img src={`/amor/galeria-recriada/${id}.webp`} width={506} height={506} alt={alt} loading="lazy" decoding="async" /></li>)}
      </CarrosselFotos>
      <p>Retratos recriados a partir das fotos dos cães.</p>
      <a className="link" href={LOJA.instagram} target="_blank" rel="noopener noreferrer">Veja mais no Instagram</a>
    </div>
  </section>
}
