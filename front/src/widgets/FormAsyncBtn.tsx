import {
  IconDefinition,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
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
      <FontAwesomeIcon
        icon={props.isSubmitting ? faCircleNotch : props.icon}
        spin={props.isSubmitting}
      />
      <span>{props.label}</span>
    </button>
  );
}
