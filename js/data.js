window.onload = function() {
    const data = localStorage.getItem('inputData');
    document.getElementById('data').textContent = data ? data : 'No hay datos disponibles.';
};