import React, { useEffect, useRef } from 'react';
import './QuantumCircuit.css';

const QuantumCircuit = ({ className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Quantum circuit elements
    const nodes = [];
    const connections = [];
    const particles = [];

    // Initialize nodes
    for (let i = 0; i < 8; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        originalRadius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          connections.push({
            from: i,
            to: j,
            distance: distance,
          });
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.5,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }

    const animate = () => {
      // Fill with a semi-transparent dark background to allow layering
      ctx.fillStyle = 'rgba(10, 22, 40, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      connections.forEach(conn => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];

        if (fromNode && toNode) {
          const dx = fromNode.x - toNode.x;
          const dy = fromNode.y - toNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const alpha = 1 - distance / 100;
            ctx.strokeStyle = `rgba(0, 198, 255, ${alpha * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(fromNode.x, fromNode.y);
            ctx.lineTo(toNode.x, toNode.y);
            ctx.stroke();
          }
        }
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 198, 255, ${particle.opacity})`;
        ctx.fill();
      });

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Add subtle pulsing effect
        const pulse = Math.sin(Date.now() * 0.002) * 0.3 + 1;
        node.radius = node.originalRadius * pulse;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00c6ff';
        ctx.fill();

        // Add glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          node.x, node.y, node.radius,
          node.x, node.y, node.radius * 2
        );
        gradient.addColorStop(0, 'rgba(0, 198, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 198, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`quantum-circuit ${className}`}>
      <canvas ref={canvasRef} className="quantum-canvas" style={{ background: 'transparent' }} />
    </div>
  );
};

export default QuantumCircuit;