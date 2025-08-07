// 다크모드 버튼
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-mode');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode')
      ? '☀️ 라이트모드'
      : '🌙 다크모드';
  });

  // 페이드인 애니메이션
  const sections = document.querySelectorAll('.fade-in');
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add('visible');
    }, index * 300);
  });
});
