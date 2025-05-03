const downloadBtn = document.getElementById('download-btn');

if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    window.dataLayer.push({
      event: 'download_click',
      category: 'CTA',
      action: 'click',
      label: 'Baixar App'
    });
    alert('Evento de download registrado!');
  });
}

const featureLinks = document.querySelectorAll('.feature-link');
featureLinks.forEach(link => {
  link.addEventListener('click', () => {
    const feature = link.getAttribute('data-feature');
    window.dataLayer.push({
      event: 'feature_click',
      feature: feature
    });
  });
});