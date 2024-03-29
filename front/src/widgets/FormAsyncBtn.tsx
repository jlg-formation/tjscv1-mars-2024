import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FormAsyncBtn(props: {
  icon: IconDefinition;
  label: string;
  isSubmitting: boolean;
}) {
  return (
    <button className="btn btn-primary" disabled={props.isSubmitting}>
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.label}</span>
    </button>
  );
}
