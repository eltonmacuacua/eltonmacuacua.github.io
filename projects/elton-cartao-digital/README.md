# Elton Macuácua — Cartão de visita digital

Projecto estático em HTML, CSS e JavaScript, com fotografia, apresentação profissional, projectos, contactos, currículo e vCard. Não requer instalação, base de dados ou compilação.

## Abrir localmente

Abra `index.html` no navegador. Para reproduzir funcionalidades de partilha e clipboard em ambiente web, use um servidor local, por exemplo `python -m http.server 8000`, e abra http://localhost:8000. A partilha nativa depende do dispositivo e do navegador; o botão dispõe de alternativa para copiar o link.

## Carregar no GitHub

1. Crie um repositório no GitHub.
2. Extraia este ZIP e abra a pasta `elton-cartao-digital`.
3. Carregue **o conteúdo desta pasta** na raiz do repositório: `index.html`, `style.css`, `app.js`, `assets/`, `elton-macuacua.vcf`, `README.md`, `.gitignore` e `.nojekyll`.
4. Confirme o commit.

Também pode usar Git:

```bash
git init
git add .
git commit -m "Adicionar cartão de visita digital"
git branch -M main
git remote add origin https://github.com/SEU-UTILIZADOR/SEU-REPOSITORIO.git
git push -u origin main
```

Substitua o utilizador e o repositório pelos seus dados.

## Publicar no GitHub Pages

No repositório, vá a **Settings → Pages → Build and deployment**. Seleccione **Deploy from a branch**, escolha **main** e **/(root)** e guarde. O endereço final será apresentado pelo GitHub. A disponibilidade do Pages para repositórios privados depende do plano da conta; escolha a visibilidade que pretende para os seus contactos e currículo.

Todos os caminhos de assets são relativos, permitindo servir o cartão num subdirectório do GitHub Pages.

## Personalizar

- `index.html`: textos, telefone, WhatsApp, email e links.
- `style.css`: cores (variáveis no início), tipografia, espaçamento e efeitos.
- `app.js`: separadores, partilha e mensagens.
- `assets/elton.png`: fotografia.
- `assets/elton-cv.pdf`: currículo.
- `elton-macuacua.vcf`: contacto para guardar; actualize-o sempre que alterar os contactos na página.
- `assets/cartao-qr.svg`: QR actual aponta para o exemplo alojado em https://elton-macuacua-digital.lets-play.chatgpt.site. **Depois de publicar no GitHub Pages, substitua-o por um QR com o novo endereço.** O exemplo original tem acesso privado; copiar o projecto não altera essas permissões.

A partilha online usa automaticamente o endereço da página actual. Ao abrir directamente pelo sistema de ficheiros, usa o endereço do exemplo original, definido em `app.js`.

## Funcionalidades

- Layout responsivo para computador e telemóvel.
- Separadores de expertise, percurso, projectos e contactos, sem recarregar a página.
- Navegação dos separadores por teclado e estados de acessibilidade.
- WhatsApp, telefone, email, currículo e download de contacto.
- Partilha nativa, quando suportada, com alternativa para copiar link.
- Código QR de acesso ao exemplo original.
- Efeitos subtis com respeito pela preferência de reduzir movimento.

## Dados e direitos

Contém os dados profissionais e a fotografia fornecidos por Elton Macuácua. Não inclui credenciais, histórico Git ou configurações do alojamento anterior. O currículo e os dados de contacto ficarão acessíveis a quem tenha acesso ao repositório ou ao website publicado. Os assets pessoais destinam-se à apresentação do seu titular.
