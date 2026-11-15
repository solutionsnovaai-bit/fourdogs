export const LOJA = {
  nome: 'Amor por Patinhas',
  descricao: 'Banho e tosa para cães na Vila Carrão, São Paulo.',
  whatsapp: '5511985978564',
  whatsappExibicao: '(11) 98597-8564',
  instagram: 'https://www.instagram.com/amorporpatinhaspet/',
  instagramHandle: '@amorporpatinhaspet',
  endereco: { rua: 'Rua Luís Pinto, 530', bairro: 'Vila Carrão', regiao: 'Zona Leste', cidade: 'São Paulo', uf: 'SP', cep: '03427-000' },
  horario: { texto: 'Consulte os horários pelo WhatsApp', diasTexto: '' },
}

export const ENDERECO_COMPLETO = `${LOJA.endereco.rua} - ${LOJA.endereco.bairro}, ${LOJA.endereco.cidade} - ${LOJA.endereco.uf}, ${LOJA.endereco.cep}`

export const MENSAGENS = {
  padrao: 'Olá! Vim pelo site da Amor por Patinhas e gostaria de agendar banho ou tosa para o meu cão.',
  duvida: 'Olá! Vim pelo site da Amor por Patinhas e tenho uma dúvida.',
}

export const NAV = [
  { id: 'galeria', nome: 'Galeria' },
  { id: 'como-agendar', nome: 'Agendamento' },
  { id: 'onde-estamos', nome: 'Onde estamos' },
  { id: 'duvidas', nome: 'Dúvidas' },
] as const

export const ABERTURA = { texto: 'Preparando o banho…' }
export const FAIXAS = {
  verde: ['Banho e tosa', 'Cuidado com carinho', 'Agende pelo WhatsApp'],
  amarela: ['Amor por Patinhas', 'Vila Carrão', 'Banho e tosa para cães'],
}

export const COMO_AGENDAR = {
  sobretitulo: 'Agendamento',
  titulo: 'Marque o próximo',
  destaque: 'banho do seu cão.',
  passos: [
    { titulo: 'Chame no WhatsApp', texto: 'Conte um pouco sobre o seu cão e diga se procura banho ou tosa.' },
    { titulo: 'Combine um horário', texto: 'Consulte os horários disponíveis e acerte os detalhes com a equipe.' },
    { titulo: 'Traga seu cão', texto: 'No horário combinado, venha à Rua Luís Pinto, 530, na Vila Carrão.' },
  ],
  cta: 'Agendar pelo WhatsApp',
}

export const ONDE = {
  sobretitulo: 'Onde estamos', titulo: 'Pertinho de você,', destaque: 'na Vila Carrão.',
  comoChegar: 'Como chegar', chamar: 'Chamar no WhatsApp',
}

export const DUVIDAS = {
  sobretitulo: 'Dúvidas', titulo: 'Perguntou,', destaque: 'a gente responde.', link: 'Perguntar no WhatsApp',
  itens: [
    { pergunta: 'Como agendo banho ou tosa?', resposta: 'Chame no WhatsApp, diga qual serviço procura e combine o melhor horário com a equipe.' },
    { pergunta: 'Quanto custa o serviço?', resposta: 'Peça um orçamento pelo WhatsApp e conte o porte do seu cão e o serviço desejado.' },
    { pergunta: 'Onde fica a Amor por Patinhas?', resposta: ENDERECO_COMPLETO },
  ],
}

export const CHAMADA = {
  titulo: 'Dia de banho?', destaque: 'Combine com a gente.',
  texto: 'Fale com a equipe para consultar horários de banho e tosa.', cta: 'Agendar pelo WhatsApp',
}

export const RODAPE = { credito: 'Site desenvolvido por Nova AI Solutions' }

export const SEO = {
  titulo: 'Amor por Patinhas | Banho e tosa na Vila Carrão',
  descricao: 'Banho e tosa para cães na Vila Carrão, São Paulo. Agende pelo WhatsApp (11) 98597-8564.',
  compartilharTitulo: 'Amor por Patinhas · Banho e tosa',
  compartilharTexto: 'Banho e tosa para cães na Vila Carrão. Agende pelo WhatsApp.',
  imagemAlt: 'Logo rosa e turquesa da Amor por Patinhas.',
  corTema: '#007c80', corFundo: '#fff8fa',
}
