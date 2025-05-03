# FinBuddy Landing Page 

Landing page fictícia para um aplicativo de finanças pessoais, com foco em instrumentação de dados, envio de eventos via `dataLayer`, integração com o **Google Tag Manager (GTM)** e exportação para o **Google Analytics 4 (GA4)**.

---

## Visão geral

Este projeto simula um ambiente de mensuração de comportamento do usuário, com rastreamento de interações em tempo real. Abrange desde o tageamento básico até o envio de eventos customizados ao GA4 com parâmetros personalizados.

---

##  Funcionalidades implementadas

- **Evento de clique** no botão “Baixar App” via `dataLayer`
- Criação e disparo do **evento customizado** `page_exit` ao sair de páginas
- Envio de **parâmetros personalizados** como `page` e `time_spent`
- Criação de **variáveis da camada de dados** no GTM
- Integração real com **container do GTM**
- Exportação de eventos para **Google Analytics 4 (GA4)**
- Visualização em **tempo real** dos eventos enviados
- Validação via **Preview Mode** do GTM

---

## Tecnologias e ferramentas utilizadas

- **HTML5**, **CSS3**, **JavaScript**
- **Google Tag Manager**
- **Google Analytics 4**
- **Live Server (VSCode)**
- `dataLayer.push()` como mecanismo de envio de dados

---

## Funcionamento

![finbuddysite](https://github.com/user-attachments/assets/47866cd1-6789-4f64-bcc3-661ffe51405e)
WebSite em execução

![GoogleTagManager](https://github.com/user-attachments/assets/3eeff611-d732-4724-9419-805421bba797)
Captura de eventos pelo GTM

![Googleanalytics1](https://github.com/user-attachments/assets/23e16259-329e-43cb-a9ba-2871ef85ecc4)
Exportação dos dados para o Google Analytics GA4




---

## 🚀 Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/YvesBrenno/FinBuddy.git
   ```

2. Abra a pasta no VSCode
3. Instale e ative a extensão **Live Server**
4. Clique com o botão direito em `index.html` > **Open with Live Server**
5. Acesse `http://localhost:5500`
6. Vá até o [Google Tag Manager](https://tagmanager.google.com/), clique em **Visualizar** e cole a URL do seu Live Server
7. Interaja com os botões da landing page e observe os eventos sendo registrados no GTM e no GA4

---

## 🧪 Eventos disponíveis

| Evento         | Gatilho                       | Parâmetros enviados       |
|----------------|-------------------------------|---------------------------|
| `download_click` | Clique no botão “Baixar App” | `category`, `action`, `label` |
| `page_exit`      | Ao sair de uma página        | `page`, `time_spent`      |

---

## 📌 Observações

- Nenhum dado pessoal ou identificável é coletado
- Projeto fictício com fins educacionais e demonstração técnica
- Arquitetura compatível com A/B testing, CRO, funis e mais
- A propriedade GA4 e o container GTM são usados exclusivamente para fins de teste e demonstração. Nenhum dado pessoal é coletado.”

---

