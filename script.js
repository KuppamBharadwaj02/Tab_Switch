function showContent(food) {
    const images = document.querySelectorAll('.image');
    const details = document.querySelectorAll('.details');
    const buttons = document.querySelectorAll('.tab');

    images.forEach(img => img.style.display = 'none');
    details.forEach(detail => detail.style.display = 'none');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(`image-${food}`).style.display = 'block';
    document.getElementById(`details-${food}`).style.display = 'block';
    document.getElementById(`btn-${food}`).classList.add('active');
}
