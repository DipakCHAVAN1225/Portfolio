import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-scene">
        <div className="cube-loader">
          <div className="cube-top" />
          <div className="cube-wrapper">
            <span style={{ "--i": 0 }} className="cube-span" />
            <span style={{ "--i": 1 }} className="cube-span" />
            <span style={{ "--i": 2 }} className="cube-span" />
            <span style={{ "--i": 3 }} className="cube-span" />
          </div>
        </div>

        {/* Shadow beneath cube */}
        <div className="cube-shadow" />

        {/* Loading text */}
        <p className="loader-text">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;

  .loader-scene {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  /* ── CUBE ── */
  .cube-loader {
    position: relative;
    width: 90px;
    height: 90px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: rotateCube 3s linear infinite;
  }

  @keyframes rotateCube {
    0%   { transform: rotateX(-30deg) rotateY(0deg);    }
    100% { transform: rotateX(-30deg) rotateY(360deg);  }
  }

  .cube-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  /* 4 sides — brand blue gradient */
  .cube-span {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(90deg * var(--i))) translateZ(45px);
    background: linear-gradient(
      to bottom,
      #0b0c1a        0%,
      #0d2a40       10%,
      #0e3f5e       20%,
      #0f5480       30%,
      #1270a8       40%,
      #1a8cce       55%,
      #2CB0ED       70%,
      #5dcaf5       85%,
      #9de3fc      100%
    );
    border: 1px solid rgba(44, 176, 237, 0.25);
  }

  /* Top face */
  .cube-top {
    position: absolute;
    width: 90px;
    height: 90px;
    background: #2CB0ED;
    transform: rotateX(90deg) translateZ(45px);
    transform-style: preserve-3d;
    /* slight inner shine */
    background: radial-gradient(circle at 35% 35%, #9de3fc, #2CB0ED 55%, #0f5480);
  }

  /* Glow shadow beneath */
  .cube-top::before {
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    background: rgba(44, 176, 237, 0.35);
    transform: translateZ(-96px);
    filter: blur(18px);
    box-shadow:
      0 0 20px rgba(44, 176, 237, 0.5),
      0 0 40px rgba(44, 176, 237, 0.3),
      0 0 60px rgba(44, 176, 237, 0.15);
    border-radius: 4px;
  }

  /* ── GROUND SHADOW ── */
  .cube-shadow {
    width: 80px;
    height: 14px;
    background: radial-gradient(ellipse, rgba(44, 176, 237, 0.25) 0%, transparent 75%);
    border-radius: 50%;
    animation: shadowPulse 3s linear infinite;
    margin-top: -12px;
  }

  @keyframes shadowPulse {
    0%,  100% { transform: scaleX(1);    opacity: 0.5; }
    50%        { transform: scaleX(0.7); opacity: 0.25; }
  }

  /* ── LOADING TEXT ── */
  .loader-text {
    display: flex;
    gap: 1px;
    font-family: "Orbitron", "Courier New", monospace;
    font-size: clamp(12px, 2vw, 16px);
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #2CB0ED;
  }

  .loader-text span {
    display: inline-block;
    animation: letterBounce 1.4s ease-in-out infinite;
  }

  /* Stagger each letter */
  .loader-text span:nth-child(1)  { animation-delay: 0.00s; }
  .loader-text span:nth-child(2)  { animation-delay: 0.07s; }
  .loader-text span:nth-child(3)  { animation-delay: 0.14s; }
  .loader-text span:nth-child(4)  { animation-delay: 0.21s; }
  .loader-text span:nth-child(5)  { animation-delay: 0.28s; }
  .loader-text span:nth-child(6)  { animation-delay: 0.35s; }
  .loader-text span:nth-child(7)  { animation-delay: 0.42s; }
  .loader-text span:nth-child(8)  { animation-delay: 0.56s; }
  .loader-text span:nth-child(9)  { animation-delay: 0.63s; }
  .loader-text span:nth-child(10) { animation-delay: 0.70s; }

  @keyframes letterBounce {
    0%, 60%, 100% { transform: translateY(0);    color: #2CB0ED; }
    30%            { transform: translateY(-10px); color: #9de3fc; }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 480px) {
    .cube-loader { width: 70px; height: 70px; }
    .cube-top    { width: 70px; height: 70px; }
    .cube-span   { transform: rotateY(calc(90deg * var(--i))) translateZ(35px); }
    .cube-top    { transform: rotateX(90deg) translateZ(35px); }
    .cube-top::before { width: 70px; height: 70px; transform: translateZ(-76px); }
    .loader-text { font-size: 11px; letter-spacing: 2px; }
  }

  @media (max-width: 250px) {
    .cube-loader { width: 44px; height: 44px; }
    .cube-top    { width: 44px; height: 44px; }
    .cube-span   { transform: rotateY(calc(90deg * var(--i))) translateZ(22px); }
    .cube-top    { transform: rotateX(90deg) translateZ(22px); }
    .cube-top::before { width: 44px; height: 44px; transform: translateZ(-48px); }
    .loader-text { font-size: 8px; letter-spacing: 1px; gap: 0; }
    .loader-scene { gap: 18px; }
  }
`;

export default Loader;