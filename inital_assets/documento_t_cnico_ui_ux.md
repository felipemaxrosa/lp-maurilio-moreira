# Documento Técnico de UI/UX - Plataforma Digital Maurílio Moreira

**Projeto:** Webpage Oficial - Mandato 2025/2028 (Caraguatatuba/SP)
**Plataformas:** Web (Desktop) e Mobile (Smartphone/Tablet)
**Metodologia Design:** Mobile-First, Single Page Application (SPA) Híbrida.

---

## 1. Guias de Estilo (Style Guide)

### 1.1. Paleta de Cores (Cores Semânticas)
*   **Cor Primária (Confiança/Institucional):** Azul Marinho Profundo (`#1E3A8A` ou similar). Usado em cabeçalhos, rodapés e textos de destaque.
*   **Cor Secundária (Esperança/Ação):** Verde Esmeralda (`#10B981`). Usado no botão principal do WhatsApp, ícones de sucesso e selos de "Conquista".
*   **Cor de Fundo Principal:** Branco (`#FFFFFF`) e Cinza Claro (`#F8FAFC`) para alternância entre seções, garantindo descanso visual.
*   **Cor de Fundo Seção Podcast:** Modo Escuro (`#0F172A`) para criar clima de estúdio/cinema e reter a atenção nos vídeos.
*   **Texto Principal:** Cinza Chumbo Escuro (`#334155`) para alta legibilidade (nunca preto puro).

### 1.2. Tipografia (Web Fonts)
*   **Títulos (Headings - H1, H2, H3):** *Inter* ou *Montserrat* (Sem serifa, peso Bold/Black). Transmite modernidade, força e clareza.
*   **Corpo de Texto (Body):** *Roboto* ou *Open Sans* (Sem serifa, peso Regular). Foco em legibilidade em telas pequenas.

### 1.3. Grid e Espaçamento
*   **Desktop:** Grid de 12 colunas, largura máxima do container de `1200px` ou `1440px`. Margens amplas (paddings de `80px` a `120px` entre seções).
*   **Mobile:** Grid flexível de 4 colunas. Paddings laterais fixos de `16px` ou `20px` para evitar que o conteúdo encoste nas bordas da tela.

---

## 2. Arquitetura UI/UX - Estrutura de Páginas

A experiência do usuário será linear e focada em conversão, com a página principal servindo de funil.

### Seção 1: Hero Section (Dobra Inicial)
**Objetivo:** Impacto imediato e conexão emocional.
*   **Desktop:** 
    *   Layout *Split* (dividido). Lado esquerdo: Copy de impacto ("Trabalho, Fé e Raízes Caiçaras...") + CTA (WhatsApp). Lado direito: Foto heroica recortada do vereador em alta resolução com fundo dinâmico de Caraguatatuba.
    *   Menu de navegação fixo (Sticky Header) no topo, transparente até rolar a página.
*   **Mobile:** 
    *   Layout empilhado (Stack). 
    *   Menu recolhido em ícone *Hamburguer*. 
    *   Foto do vereador adaptada para o topo, seguida pela headline e um botão de CTA ocupando 100% da largura da tela (Full-width).

### Seção 2: Biografia ("De Caraguatatuba, para Caraguatatuba")
**Objetivo:** Humanização e prova social (1.586 votos).
*   **Desktop:** Texto formatado em blocos curtos, acompanhado por um carrossel de fotos (Vereador com a família, na Câmara, com a comunidade).
*   **Mobile:** Texto resumido. Carrossel transformado em *Swipe* (deslize horizontal) nativo para que o usuário controle com o polegar.

### Seção 3: Placar do Mandato (Cards Dinâmicos)
**Objetivo:** Prestação de contas visual baseada em "Problema -> Solução".
*   **Desktop:** 
    *   Grid de 3 colunas (Cards lado a lado).
    *   Cards contêm "Selo" (ex: Lei Aprovada), Título, Copy curta e elemento visual (Foto do ofício do DER ou thumbnail de vídeo).
    *   Efeito *Hover*: Ao passar o mouse, o card levanta levemente (sombra projetada) indicando clicabilidade. Vídeos abrem em Lightbox (Pop-up central).
*   **Mobile:** 
    *   Cards empilhados verticalmente (1 coluna).
    *   Nenhum hover necessário; área de clique ampla (Touch Target mínimo de `44x44px`).
    *   Vídeos abrem em tela cheia automaticamente ao dar o play.

### Seção 4: Hub "Maurílio Convida" (Podcast)
**Objetivo:** Retenção, autoridade e aprofundamento de ideias.
*   **Desktop:** 
    *   Fundo *Dark Mode*.
    *   Player grande do YouTube à esquerda (2/3 da tela).
    *   Lista vertical com scroll interno (Playlist) à direita (1/3 da tela) exibindo episódios anteriores.
*   **Mobile:** 
    *   Fundo *Dark Mode*.
    *   Player do YouTube no topo.
    *   Abaixo, carrossel horizontal de *thumbnails* dos próximos episódios.
    *   Botão "Inscrever-se" com cor de contraste absoluto (Vermelho YouTube).

### Seção 5: Gabinete Digital (Formulário + Footer)
**Objetivo:** Captação de leads (WhatsApp/Bairro/Demanda).
*   **Desktop:** 
    *   Formulário estruturado em 2 colunas para os dados menores (Nome/Bairro e Telefone/Categoria) e 1 coluna para a mensagem.
    *   Rodapé com mapa do Google incorporado e links úteis.
*   **Mobile:** 
    *   Todos os campos do formulário com 100% de largura.
    *   Inputs invocando os teclados corretos nativamente (ex: `type="tel"` invoca teclado numérico).
    *   *Bottom Navigation Bar* (Opcional): Uma barra fixa na base do celular com ícones de acesso rápido (Início, WhatsApp, Podcast).

---

## 3. Micro-interações e Feedbacks (UX)

*   **Loading:** Utilizar *Skeleton Loaders* (blocos cinzas piscantes) enquanto imagens ou dados pesados carregam, evitando a sensação de tela travada.
*   **Formulário WhatsApp:**
    *   *Feedback visual:* Ao preencher um campo corretamente, a borda do input fica verde.
    *   *Ação de Envio:* Ao clicar, o botão muda o texto para "Redirecionando..." e um spinner de carregamento aparece por 1 segundo antes de abrir o aplicativo do WhatsApp.
*   **Filtros (Placar de Mandato):** Transições suaves (*Fade-in/Fade-out*) de 300ms ao alternar as abas entre "Asfalto", "Saúde" e "Leis".

---

## 4. Diretrizes de Acessibilidade (A11y)

Para garantir que eleitores de todas as idades (incluindo idosos e deficientes visuais) acessem o conteúdo:

1.  **Contraste:** Garantir a taxa mínima de contraste de 4.5:1 (WCAG AA) entre os textos e os fundos. O texto sobre o fundo azul marinho deve ser branco puro, não cinza claro.
2.  **Tamanhos de Fonte Escaláveis:** Usar unidades relativas (`rem` ou `em` no CSS) para que as fontes cresçam se o usuário tiver configurado letras grandes no celular.
3.  **Leitores de Tela:** Adicionar os atributos `alt` em todas as imagens (ex: `alt="Vereador Maurílio Moreira inspecionando obras no bairro Tabatinga"`).
4.  **Aria-Labels no Podcast:** Elementos de vídeo interativos e iframes do YouTube devem ter tags explicativas.