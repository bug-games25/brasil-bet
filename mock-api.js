document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('sports-bets');
  if (!container) return;
  const games = [
    { time: "18:00", teams: "Flamengo vs Palmeiras", odds: "1.90 / 3.20 / 2.50" },
    { time: "20:30", teams: "Corinthians vs Grêmio", odds: "2.10 / 3.00 / 3.10" }
  ];
  container.innerHTML = games.map(g => `<p><strong>${g.time}</strong>: ${g.teams} - Odds: ${g.odds}</p>`).join('');
});