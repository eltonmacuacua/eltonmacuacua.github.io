# Base Technology, S.A. — Cartão digital

Website estático em HTML, CSS e JavaScript, pronto para GitHub Pages. Não requer instalação ou compilação.

## Abrir

Abra `index.html` no navegador. Para ambiente local web: `python -m http.server 8000` e aceda a http://localhost:8000. Clipboard e partilha nativa dependem das permissões e do navegador.

## GitHub e GitHub Pages

1. Crie um repositório no GitHub.
2. Carregue o conteúdo desta pasta na raiz do repositório, incluindo `assets/`.
3. Em Settings → Pages, escolha Deploy from a branch → main → /(root).
4. Guarde e aguarde o endereço apresentado pelo GitHub.

Os caminhos relativos funcionam em subdirectórios. A visibilidade do repositório e a disponibilidade de Pages dependem da sua conta.

## Funcionalidades

- Layout responsivo, identidade verde e logótipo oficial.
- Separadores de serviços, soluções, empresa e contactos.
- SoftNav e referências descritas no portfólio institucional.
- Contacto vCard para guardar no telemóvel.
- Telefone, WhatsApp e email.
- Pedido de orçamento: recolhe nome/empresa, área de interesse e descrição, preparando uma mensagem por WhatsApp ou email. O utilizador conclui o envio nessa aplicação. Não existe submissão a uma base de dados nem confirmação automática de recepção.
- Partilha nativa ou opção de copiar link.
- QR para o exemplo alojado, actualmente privado.
- Navegação dos separadores por teclado e preferência de movimento reduzido.

## Personalização

- `index.html`: textos, links e contactos.
- `style.css`: cores nas variáveis iniciais, layout e efeitos.
- `app.js`: separadores, partilha e encaminhamento de pedidos.
- `base-technology.vcf`: dados do contacto; manter alinhados com a página.
- `assets/base-logo.png`: logótipo extraído da proposta fornecida.
- `assets/cartao-qr.svg`: aponta para https://basety-cartao-digital.lets-play.chatgpt.site. Depois de publicar no GitHub Pages, substitua-o por um QR do novo endereço. A partilha online usa automaticamente o endereço actual da página; em modo de ficheiro local, utiliza o exemplo alojado.

## Morada a confirmar

O website indica Rua da Resistência, n.º 95/R/C. As propostas fornecidas indicam n.º 275/R/C. O cartão e a vCard apresentam apenas Rua da Resistência, Maputo, Moçambique. Actualize os dois ficheiros quando a empresa confirmar o número correcto.

## Referências de conteúdo

- https://basetechnology-mz.com/
- https://basetechnology-mz.com/contacto/
- https://basetechnology-mz.com/portfolio-2/
- https://basetechnology-mz.com/softnav/
- Perfil institucional e logótipo nas propostas fornecidas pelo utilizador.

A menção a entidades segue o portfólio publicado pela empresa; propostas de concursos não são tratadas como adjudicações. Não se incluem propostas confidenciais no pacote. Logótipo e conteúdo corporativo destinam-se à apresentação da Base Technology, S.A.

## Verificação

Verificados os caminhos dos assets, referências dos separadores, IDs únicos, contactos e sintaxe JavaScript. A aparência e os fluxos não foram testados num navegador nesta execução.
