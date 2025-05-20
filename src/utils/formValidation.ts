
export const validateContactForm = (formData: {
  name: string;
  email: string;
  phone: string;
  projectDescription: string;
}) => {
  const errors: {[key: string]: string} = {};
  
  if (!formData.name.trim()) errors.name = "Name is required";
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = "Email is invalid";
  }
  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[\d\s+\-()]{6,20}$/.test(formData.phone.trim())) {
    errors.phone = "Phone number is invalid";
  }
  if (!formData.projectDescription.trim()) {
    errors.projectDescription = "Project description is required";
  }
  
  return errors;
};
