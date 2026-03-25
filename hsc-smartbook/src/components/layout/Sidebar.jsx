import { UNIT_META, TOPIC_META } from '../../data/units';
import styles from './Sidebar.module.css';

export default function Sidebar({ activeUnit, activeTopic, onUnitSelect, onTopicSelect, onHome }) {
  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <button className={styles.logoWrap} onClick={onHome}>
        <div className={styles.logoEyebrow}>Maharashtra HSC · Std. XI</div>
        <div className={styles.logoTitle}>CS Smartbook</div>
        <div className={styles.logoSub}>Paper 1 — Software</div>
        <div className={styles.rainbow} />
      </button>

      {/* Units */}
      <nav className={styles.nav}>
        {UNIT_META.map(unit => {
          const isActive = activeUnit === unit.id;
          const topics = TOPIC_META[unit.id] ?? [];

          return (
            <div key={unit.id}>
              <button
                className={`${styles.unitBtn} ${isActive ? styles.unitBtnActive : ''}`}
                style={{ '--uc': unit.hex }}
                onClick={() => onUnitSelect(unit.id)}
              >
                <span className={styles.unitNum}>{unit.num}</span>
                <span className={styles.unitLabel}>{unit.emoji} {unit.label}</span>
              </button>

              {isActive && (
                <div className={styles.topicList}>
                  {topics.map(t => (
                    <button
                      key={t.id}
                      className={`${styles.topicBtn} ${activeTopic === t.id ? styles.topicBtnActive : ''}`}
                      style={{ '--uc': unit.hex }}
                      onClick={() => onTopicSelect(t.id)}
                    >
                      <span className={styles.topicDot} />
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className={styles.footer}>
        5 Units · 20 Simulators · Interactive
      </div>
    </aside>
  );
}