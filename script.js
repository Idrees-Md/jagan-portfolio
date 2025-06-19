function scrollSlider(direction) {
  console.log('Button clicked, direction:', direction);
  const slider = document.getElementById('reels-slider');
  const scrollAmount = direction * 220;
  slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
