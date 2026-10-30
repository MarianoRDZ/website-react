const FormField = ({ id, label, children }) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary uppercase"
    >
      {label}
    </label>
    {children}
  </div>
);

export default FormField;
