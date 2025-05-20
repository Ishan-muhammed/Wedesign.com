
interface FormInputProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export const FormInput = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  placeholder,
  className = ""
}: FormInputProps) => {
  return (
    <div className={`mb-6 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-white/80">
        {label} {required && <span className="text-we-red">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3 bg-white/5 border ${error ? 'border-we-red' : 'border-white/10'} rounded-lg focus:outline-none focus:border-we-blue text-white`}
        placeholder={placeholder}
      />
      {error && <p className="text-we-red text-sm mt-1">{error}</p>}
    </div>
  );
};
