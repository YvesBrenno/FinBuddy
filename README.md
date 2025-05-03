# FinBuddy Landing Page 

Landing page fictícia para um aplicativo de finanças pessoais. Este projeto simula um ambiente com foco em estruturação de eventos de conversão, uso do `dataLayer` e integração com o Google Tag Manager (GTM).

---

## Visão geral

- Layout responsivo com HTML, CSS e JavaScript
- Evento de clique no botão “Baixar App” enviado ao `dataLayer`
- Integração com container real do GTM
- Teste e validação de eventos usando o modo Preview do Google Tag Manager

---

##  Tecnologias e ferramentas utilizadas

- **HTML5**, **CSS3**, **JavaScript**
- **Google Tag Manager** para instrumentação de eventos
- **Live Server Extension** (VSCode) para rodar o projeto localmente
- **dataLayer** como mecanismo de disparo de eventos personalizados

---

##  Funcionalidades

- Simulação de evento de conversão via `dataLayer`:

  ```js
  window.dataLayer.push({
    event: 'download_click',
    category: 'CTA',
    action: 'click',
    label: 'Baixar App'
  });
  ```

- Captura do evento no painel do GTM (Preview Mode)
  
![image](https://github.com/user-attachments/assets/3994cc84-9ee0-4346-b2ee-0661ce6ec030)


##  Como executar localmente

1. Faça o download do repositório ou clone com:

   ```bash
   git clone https://github.com/YvesBrenno/FinBuddy.git
   ```

2. Abra a pasta no VSCode
3. Instale a extensão **Live Server**
4. Clique com o botão direito em `index.html` → **Open with Live Server**
5. Acesse `http://localhost:5500` (ou porta equivalente)
6. No [Google Tag Manager](https://tagmanager.google.com/), no canto superior direito, clique em **Visualizar** e cole a URL local
7. Clique em “Baixar App” e veja o evento `download_click` sendo registrado

---

## 🔍 Notas técnicas

- O GTM utilizado está conectado a um container configurado para testes locais
- Nenhuma coleta de dados reais ou pessoais é feita neste projeto
- A estrutura permite extensão para A/B testing, rastreamento de formulários ou integração com Analytics

---
