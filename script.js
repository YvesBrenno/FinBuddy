// Seleciona o botão de download
const downloadBtn = document.getElementById('download-btn');

// Função que simula o envio de evento ao GTM/Analytics
function trackDownload() {
  window.dataLayer.push({
    event: 'download_click',
    category: 'CTA',
    action: 'click',
    label: 'Baixar App'
  });
  alert('Evento de download registrado!'); // Simulação visual
}

// Adiciona o listener no clique
downloadBtn.addEventListener('click', trackDownload);