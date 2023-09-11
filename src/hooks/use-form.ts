import { type ChangeEvent, useState, FormEvent } from "react";

type FormTargetElement =
  | HTMLSelectElement
  | HTMLInputElement
  | HTMLTextAreaElement;

export default function useForm<T>(initialState: T) {
  const [data, setData] = useState<T>(initialState);

  const handleChange = (e: ChangeEvent<FormTargetElement>) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (callback: any) => {
    return (e: FormEvent) => {
      e.preventDefault();
      return callback(data);
    };
  };

  const resetForm = () => {
    setData(initialState);
  };

  return {
    data,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
