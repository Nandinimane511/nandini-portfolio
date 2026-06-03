import React, { useMemo } from 'react';

const ParticlesBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.3 + 0.1,
      color: ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'][Math.floor(Math.random() * 4)]
    }));
  }, []);

  return (
    <div className="particles-bg">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
