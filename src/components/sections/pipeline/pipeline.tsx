import { pipelineContent } from "@/content/home";

// as etapas acendem em sequência e a última fica "ao vivo"
const STEP = 1.4;
// depois da entrada, um pulso percorre as etapas em loop (ver .line::after)

export function Pipeline() {
  const { label, stages } = pipelineContent;

  return (
    <section className="pipeline" aria-label="Etapas de entrega">
      <div className="shell">
        <p className="pipeline-label mono">{label}</p>

        <div className="pipeline-flow">
          {stages.map((stage, index) => {
            const isLast = index === stages.length - 1;
            const delay = 0.2 + index * STEP;

            return (
              <div key={stage} style={{ display: "contents" }}>
                <div
                  className={isLast ? "stage stage-live" : "stage"}
                  style={{ "--delay": `${delay}s` } as React.CSSProperties}
                >
                  {isLast ? (
                    <span className="live" aria-hidden="true" />
                  ) : (
                    <span className="check" aria-hidden="true">
                      ✓
                    </span>
                  )}
                  {stage}
                </div>

                {!isLast && (
                  <div
                    className={`line line-${index}`}
                    aria-hidden="true"
                  >
                    <div
                      className="line-fill"
                      style={
                        { "--delay": `${delay + 0.4}s` } as React.CSSProperties
                      }
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
