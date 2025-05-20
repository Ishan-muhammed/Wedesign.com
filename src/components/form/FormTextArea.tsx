
interface FormTextAreaProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

export const FormTextArea = ({
  label,
  id,
  name,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  rows = 5
}: FormTextAreaProps) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-white/80">
        {label} {required && <span className="text-we-red">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full p-3 bg-white/5 border ${error ? 'border-we-red' : 'border-white/10'} rounded-lg focus:outline-none focus:border-we-blue text-white`}
        placeholder={placeholder}
      />
      {error && <p className="text-we-red text-sm mt-1">{error}</p>}
    </div>
  );
};
