/**
 * Três esferas orbitando em círculo, unidas em triângulo —
 * como elétrons de um átomo. Atração (azul), Conversão (laranja),
 * Expansão (verde). Animação 100% CSS.
 */
export function OrbitSpheres({ size = 320 }: { size?: number }) {
  return (
    <div
      className="orbit-system"
      style={{ width: size, height: size }}
      role="img"
      aria-label="Três esferas orbitando: atração, conversão e expansão"
    >
      <div className="orbit-ring" />
      {/* Linhas do triângulo que une as esferas */}
      <svg className="orbit-triangle" viewBox="0 0 100 100" aria-hidden="true">
        <polygon
          points="50,7 87.1,71.5 12.9,71.5"
          fill="none"
          stroke="oklch(1 0 0 / 14%)"
          strokeWidth="0.6"
          strokeDasharray="2 2"
        />
      </svg>
      <div className="orbit-spinner">
        <span className="orbit-sphere" data-sphere="atracao" />
        <span className="orbit-sphere" data-sphere="conversao" />
        <span className="orbit-sphere" data-sphere="expansao" />
      </div>
    </div>
  );
}
