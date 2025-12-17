import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({});

  const updateStepData = (stepKey, data) => {
    setFormData((prev) => ({
      ...prev,
      [stepKey]: data,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateStepData }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
