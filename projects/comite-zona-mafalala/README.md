# Comitê de Zona de Mafalala — Website institucional

Protótipo completo desenvolvido em HTML, CSS e JavaScript puro, sem dependências externas.

## Estrutura

- `index.html` — Página inicial
- `sobre.html` — Quem somos e papel do Comité
- `actividades.html` — Áreas de actuação e actividades
- `participar.html` — Participação comunitária e formulário
- `noticias.html` — Área preparada para notícias e comunicados
- `contacto.html` — Contactos e formulário
- `assets/css/style.css` — Sistema visual e responsividade
- `assets/js/main.js` — Menu móvel, acessibilidade, filtros, animações e validação
- `assets/images/` — Logótipo conceptual e visuais locais

## Como visualizar

Abra `index.html` directamente no navegador ou publique a pasta num servidor web.

Para desenvolvimento local, também pode usar, por exemplo:

```bash
python -m http.server 8080
```

Depois abra `http://localhost:8080`.

## Conteúdo a validar/substituir antes da publicação final

1. **Logótipo:** foi criado um símbolo conceptual provisório. Substitua `assets/images/logo.svg` quando o logótipo oficial for fornecido.
2. **Fotografia representativa da zona:** o visual `hero-mafalala.svg` é uma ilustração editorial provisória para evitar utilizar uma fotografia não autorizada. Pode substituir o ficheiro mantendo o mesmo nome, sem alterar o HTML.
3. **Contactos oficiais:** o brief não forneceu telefone, e-mail, morada nem redes sociais. A página de contacto está preparada, mas estes dados devem ser inseridos quando forem confirmados.
4. **Formulários:** funcionam no front-end para demonstração e validação. Para envio real, ligue-os ao endpoint/API escolhido ou a um backend próprio.
5. **Notícias:** o brief não inclui notícias, datas ou comunicados reais. A página foi estruturada para receber estes conteúdos sem inventar informação.

## Decisões de UX

- Navegação simples e responsiva
- Botões de aumento/redução de texto
- Modo de contraste reforçado
- Hierarquia visual clara e linguagem comunitária
- Formulários curtos
- Navegação por teclado e atributos ARIA básicos
- Animações subtis com respeito por `prefers-reduced-motion`


## Actualização bilingue: Português + Xichangana

O website inclui agora um selector de idioma permanente no topo, com as opções **PT** e **Xichangana**.

- O idioma escolhido é guardado no navegador com `localStorage` e mantém-se ao mudar de página.
- Na opção Xichangana, o atributo `lang` do documento passa para `ts-MZ`, ajudando tecnologias de apoio e motores de pesquisa a interpretar correctamente a língua apresentada.
- Títulos, navegação, conteúdos, formulários, placeholders, mensagens de interface e descrições SEO são actualizados dinamicamente.
- A versão portuguesa continua a ser o conteúdo base do HTML e funciona mesmo sem JavaScript.
- A tradução Xichangana está concentrada em `assets/js/i18n.js`, facilitando revisão linguística sem alterar o layout das páginas.

### Revisão linguística recomendada

Por se tratar de conteúdo institucional dirigido à comunidade, recomenda-se uma revisão final da versão Xichangana por um falante nativo/revisor local antes da publicação definitiva, sobretudo para alinhar terminologia comunitária e preferências linguísticas específicas de Mafalala/Maputo.
