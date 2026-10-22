import { ChevronDown } from 'lucide-react';

const fieldClass = (invalid, extra = '') =>
  `w-full px-4 py-3 rounded-lg bg-canvas border text-sm text-ink placeholder-ink-muted focus:border-brand outline-none transition-colors ${
    invalid ? 'border-danger' : 'border-line'
  } ${extra}`;

const sharedAria = (error, errorId) => ({
  'aria-invalid': Boolean(error),
  'aria-describedby': error ? errorId : undefined,
});

export function Field({ id, label, error, errorId, children, className = 'space-y-1.5' }) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-wider text-brand"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p id={errorId} role="alert" className="text-xs text-danger font-medium">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextInput({ name, error, errorId, className = '', ...props }) {
  return (
    <input
      id={name}
      name={name}
      className={fieldClass(Boolean(error), className)}
      {...sharedAria(error, errorId)}
      {...props}
    />
  );
}

export function Select({ name, error, errorId, options, className = '', ...props }) {
  return (
    <div className="relative">
      <select
        id={name}
        name={name}
        className={fieldClass(Boolean(error), `appearance-none pr-10 ${className}`)}
        {...sharedAria(error, errorId)}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="w-4 h-4 text-brand absolute right-3 top-3.5 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}

export function Textarea({ name, error, errorId, className = '', ...props }) {
  return (
    <textarea
      id={name}
      name={name}
      className={fieldClass(Boolean(error), `resize-none ${className}`)}
      {...sharedAria(error, errorId)}
      {...props}
    />
  );
}
