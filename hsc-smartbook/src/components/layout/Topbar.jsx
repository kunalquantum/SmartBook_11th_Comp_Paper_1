import { UNIT_META } from '../../data/units';
import styles from './Topbar.module.css';

export default function Topbar({ activeUnitMeta, activeTopicMeta, onHome }) {
  return (
    <header className={styles.topbar}>
      <div className={styles.breadcrumb}>
        <button className={styles.homeBtn} onClick={onHome}>Smartbook</button>
        {activeUnitMeta && (
          <>
            <span className={styles.sep}>/</span>
            <span style={{ color: activeUnitMeta.hex }}>{activeUnitMeta.label}</span>
          </>
        )}
        {activeTopicMeta && (
          <>
            <span className={styles.sep}>/</span>
            <span className={styles.topicCrumb}>{activeTopicMeta.label}</span>
          </>
        )}
      </div>

      {/* Unit indicator dots */}
      <div className={styles.dots}>
        {UNIT_META.map(u => (
          <div
            key={u.id}
            className={styles.dot}
            style={{ background: activeUnitMeta?.id === u.id ? u.hex : 'var(--border)' }}
            title={u.label}
          />
        ))}
      </div>
    </header>
  );
}