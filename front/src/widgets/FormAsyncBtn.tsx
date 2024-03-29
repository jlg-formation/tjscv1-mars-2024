import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FormAsyncBtn(props: {
  icon: IconDefinition;
  label: string;
  isSubmitting: boolean;
  disabled: boolean;
}) {
  return (
    <button
      className="btn btn-primary"
      disabled={props.isSubmitting || props.disabled}
    >
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.label}</span>
    </button>
  );
}
