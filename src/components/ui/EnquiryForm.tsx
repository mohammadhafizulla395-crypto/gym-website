import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Button } from './Button';
import { sendToWhatsApp } from '../../utils/whatsapp';

interface EnquiryFormProps {
  section: string;
  fields: {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    options?: { value: string; label: string }[];
  }[];
  defaultValues?: Record<string, string>;
  onSuccess?: () => void;
}

export function EnquiryForm({ section, fields, defaultValues = {}, onSuccess }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const schema = z.object(
    Object.fromEntries(
      fields.map((field) => [
        field.name,
        field.required
          ? z.string().min(1, `${field.label} is required`)
          : z.string().optional(),
      ])
    )
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: { [x: string]: string | undefined }) => {
    setIsSubmitting(true);
    
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    const cleanData: Record<string, string> = {};
    for (const [key, value] of Object.entries(data)) {
      if (value) cleanData[key] = value;
    }
    
    sendToWhatsApp(section, cleanData);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      reset();
      onSuccess?.();
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Opening WhatsApp!</h3>
        <p className="text-gray-400">Your enquiry is being sent via WhatsApp.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          {field.type === 'textarea' ? (
            <Textarea
              label={field.label}
              placeholder={`Enter your ${field.label.toLowerCase()}`}
              rows={3}
              error={errors[field.name]?.message as string}
              {...register(field.name)}
            />
          ) : field.options ? (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {field.label}
              </label>
              <select
                className="w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                {...register(field.name)}
              >
                <option value="">Select {field.label.toLowerCase()}</option>
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors[field.name] && (
                <p className="mt-1 text-sm text-red-500">{errors[field.name]?.message as string}</p>
              )}
            </div>
          ) : (
            <Input
              label={field.label}
              type={field.type || 'text'}
              placeholder={`Enter your ${field.label.toLowerCase()}`}
              error={errors[field.name]?.message as string}
              {...register(field.name)}
            />
          )}
        </div>
      ))}

      <Button type="submit" variant="whatsapp" fullWidth disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send size={18} />
            Send via WhatsApp
          </span>
        )}
      </Button>
    </form>
  );
}
