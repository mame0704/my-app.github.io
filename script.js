document.getElementById('topic-btn').addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * topics.length);
  const topic = topics[randomIndex];
  document.getElementById('topic-display').textContent = topic;
});