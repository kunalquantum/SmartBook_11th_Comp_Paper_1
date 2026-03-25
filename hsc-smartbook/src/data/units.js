import { TOPIC_META } from '../../data/units';
import styles from './UnitPage.module.css';

// Feature simulators – Unit 1
import BaseConverter from './unit1-numbers/BaseConverter';
import BinaryArithmetic from './unit1-numbers/BinaryArithmetic';
import ComplementArithmetic from './unit1-numbers/ComplementArithmetic';
import CodingSystems from './unit1-numbers/CodingSystems';
// Unit 2
import DevCycle from './unit2-program/DevCycle';
import AlgorithmFlowchart from './unit2-program/AlgorithmFlowchart';
import LinearSearch from './unit2-program/LinearSearch';
import BubbleSort from './unit2-program/BubbleSort';
// Unit 3
import DataTypes from './unit3-cpp/DataTypes';
import Operators from './unit3-cpp/Operators';
import ControlFlow from './unit3-cpp/ControlFlow';
import Pointers from './unit3-cpp/Pointers';
// Unit 4
import VBIde from './unit4-vb/VBIde';
import VBVariables from './unit4-vb/VBVariables';
import VBEvents from './unit4-vb/VBEvents';
import VBLoops from './unit4-vb/VBLoops';
// Unit 5
import NetworkTypes from './unit5-networking/NetworkTypes';
import NetworkTopology from './unit5-networking/NetworkTopology';
import Protocols from './unit5-networking/Protocols';
import InternetApps from './unit5-networking/InternetApps';

const SIMULATORS = {
  // Unit 1
  converter: BaseConverter,
  arithmetic: BinaryArithmetic,
  complement: ComplementArithmetic,
  coding: CodingSystems,
  // Unit 2
  devcycle: DevCycle,
  flowchart: AlgorithmFlowchart,
  linearsearch: LinearSearch,
  bubblesort: BubbleSort,
  // Unit 3
  datatypes: DataTypes,
  operators: Operators,
  controlflow: ControlFlow,
  pointers: Pointers,
  // Unit 4
  ide: VBIde,
  variables: VBVariables,
  events: VBEvents,
  loops: VBLoops,
  // Unit 5
  nettypes: NetworkTypes,
  topology: NetworkTopology,
  protocols: Protocols,
  internetapps: InternetApps,
};

export default function UnitPage({ unitMeta, activeTopic, onTopicSelect }) {
  const topics = TOPIC_META[unitMeta.id] ?? [];
  const currentId = activeTopic ?? topics[0]?.id;
  const Sim = SIMULATORS[currentId];

  return (
    <div className={styles.page}>
      {/* Unit header */}
      <div className={styles.header} style={{ '--uc': unitMeta.hex }}>
        <p className={styles.unitNum}>Unit {unitMeta.num}</p>
        <h2 className={styles.unitTitle}>{unitMeta.emoji} {unitMeta.label}</h2>
        <p className={styles.unitDesc}>{unitMeta.desc}</p>

        {/* Topic tab bar */}
        <div className={styles.tabBar}>
          {topics.map(t => (
            <button
              key={t.id}
              className={`${styles.tab} ${currentId === t.id ? styles.tabActive : ''}`}
              style={{ '--uc': unitMeta.hex }}
              onClick={() => onTopicSelect(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Simulator area */}
      <div className={styles.body}>
        {Sim ? (
          <Sim color={unitMeta.hex} />
        ) : (
          <p style={{ color: 'var(--text2)' }}>Simulator not found for "{currentId}"</p>
        )}
      </div>
    </div>
  );
}