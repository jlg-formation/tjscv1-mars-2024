import {
  IconDefinition,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function AsynBtn(props: {
  title: string;
  icon: IconDefinition;
  onAction: () => Promise<void>;
  onError: (errorMsg: string) => void;
  hidden?: boolean;
}) {
  const [isDoing, setIsDoing] = useState(false);

  const handleAction = async () => {
    try {
      props.onError('');
      console.log('start action');
      setIsDoing(true);
      await props.onAction();
      console.log('end action with success');
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Erreur Technique';
      props.onError(msg);
    } finally {
      setIsDoing(false);
    }
  };

  return (
    <button
      className="btn"
      onClick={handleAction}
      title={props.title}
      disabled={isDoing}
      hidden={props.hidden}
    >
      <FontAwesomeIcon
        icon={isDoing ? faCircleNotch : props.icon}
        spin={isDoing}
      />
    </button>
  );
}
