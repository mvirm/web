import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  //barra de progreso que se llena en 5 segundos
  useEffect(() => {
    const duration = 5000; // 5 segundos
    const intervalTime = 50;

    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progressBarContainer">
      <section className="progressBarSectionText">
        <span>WebSite</span>
        <span>{Math.round(progress)}%</span>
      </section>
      <div className="progressBar">
        <div style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
