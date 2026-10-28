import confetti from 'canvas-confetti';

export function fireBakeryConfetti() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#FF6B8B', '#FF8DA1', '#FFD1DC', '#FFAAA5', '#FFD3B6', '#D4A5A5', '#FFF0F5', '#FFB7B2']
  };

  function fire(particleRatio, opts) {
    try {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    } catch (e) {
      console.log('Confetti triggered', e);
    }
  }

  // Multiple sweet bursts
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

