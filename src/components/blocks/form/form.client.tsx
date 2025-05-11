/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';

import type { ComponentProps } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import type { ControllerRenderProps } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { z } from 'zod';

import { submitForm } from '@/components/blocks/form/form.action';
import { RichText } from '@/components/rich-text';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input, InputButton } from '@/components/ui/input';
import { OverflowText } from '@/components/ui/overflow-text';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { IconSpinner } from '@/icons/spinner';
import type {
  PayloadDateBlock,
  PayloadEmailBlock,
  PayloadFormSubmissionsCollection,
  PayloadFormsCollection,
  PayloadPhoneNumberBlock,
  PayloadRadioBlock,
  PayloadSelectBlock,
  PayloadTextBlock,
  PayloadTextareaBlock,
} from '@/payload/payload-types';
import { slugify } from '@/utils/slugify';

type PayloadTextField =
  | PayloadTextBlock
  | PayloadTextareaBlock
  | PayloadEmailBlock
  | PayloadPhoneNumberBlock;

type Field = ControllerRenderProps;

const REQUIRED_MESSAGE = 'Field is required';

function formatDateShort(date?: Date | null) {
  if (!date) {
    return '';
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function TextInputField({ payloadField, field }: { payloadField: PayloadTextField; field: Field }) {
  if (payloadField.blockType === 'textarea') {
    return (
      <FormControl>
        <Textarea {...field} />
      </FormControl>
    );
  }

  const extra = useMemo(() => {
    const e: Partial<ComponentProps<typeof Input>> = {};

    if (payloadField.blockType === 'email') {
      e.type = 'email';
    }

    if (payloadField.blockType === 'phoneNumber') {
      e.type = 'tel';
    }

    return e;
  }, [payloadField.blockType]);

  return (
    <FormControl>
      <Input {...field} {...extra} />
    </FormControl>
  );
}

function SelectField({ payloadField, field }: { payloadField: PayloadSelectBlock; field: Field }) {
  return (
    <Select value={field.value} onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {payloadField.options.map((option) => (
          <SelectItem key={option.id || option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function RadioField({ payloadField, field }: { payloadField: PayloadRadioBlock; field: Field }) {
  return (
    <FormControl>
      <RadioGroup
        value={field.value}
        onValueChange={field.onChange}
        defaultValue={field.value}
        className="flex flex-col justify-start"
      >
        {payloadField.options.map((option) => (
          <FormItem key={option.id || option.value} className="flex flex-row gap-3">
            <FormControl>
              <RadioGroupItem value={option.value} />
            </FormControl>
            <FormLabel className="text-lg font-medium">{option.label}</FormLabel>
          </FormItem>
        ))}
      </RadioGroup>
    </FormControl>
  );
}

function DateFieldValue({ payloadField, field }: { payloadField: PayloadDateBlock; field: Field }) {
  if (payloadField.mode === 'single') {
    return field.value ? formatDateShort(field.value) : null;
  }

  if (payloadField.mode === 'multiple') {
    return field.value?.length ? field.value.map(formatDateShort).join(', ') : null;
  }

  if (field.value.from) {
    const from = formatDateShort(field.value.from);

    if (field.value.to) {
      return (
        <>
          {from} &ndash; {formatDateShort(field.value.to)}
        </>
      );
    }

    return from;
  }

  return null;
}

function DateField({ payloadField, field }: { payloadField: PayloadDateBlock; field: Field }) {
  const dateFieldHasValue = useMemo(() => {
    if (payloadField.mode === 'single') {
      return !!field.value;
    }

    if (payloadField.mode === 'multiple') {
      return !!field.value?.length;
    }

    return !!field.value?.from || !!field.value?.to;
  }, [payloadField, field]);

  const disabled = useCallback(
    (date: Date) => {
      const todaysDate = new Date();

      switch (payloadField.allowedDates) {
        case 'previous':
          return date > todaysDate;
        case 'future':
          return date < todaysDate;
        default:
          return false;
      }
    },
    [payloadField.allowedDates],
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <InputButton
            displayChildren={dateFieldHasValue}
            icon={dateFieldHasValue ? 'calendarCheck' : 'calendar'}
          >
            <OverflowText>
              <DateFieldValue payloadField={payloadField} field={field} />
            </OverflowText>
          </InputButton>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode={payloadField.mode}
          selected={field.value}
          onSelect={field.onChange}
          disabled={disabled}
          numberOfMonths={1}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

function FieldRenderer({
  payloadField,
  field,
}: {
  payloadField: PayloadFormsCollection['fields'][number];
  field: Field;
}) {
  switch (payloadField.blockType) {
    case 'text':
    case 'textarea':
    case 'email':
    case 'phoneNumber':
      return <TextInputField payloadField={payloadField} field={field} />;
    case 'select':
      return <SelectField payloadField={payloadField} field={field} />;
    case 'radio':
      return <RadioField payloadField={payloadField} field={field} />;
    case 'date':
      return <DateField payloadField={payloadField} field={field} />;
    default:
      return null;
  }
}

export function FormClient({
  confirmationMessage,
  fields,
  id,
  submitButtonLabel,
}: PayloadFormsCollection) {
  const processedFields = useMemo(
    () =>
      fields.map((field) =>
        Object.assign(structuredClone(field), {
          name: slugify(field.label),
        }),
      ),
    [fields],
  );

  const [defaultValues] = useState<Record<string, any>>(() => {
    const dv: Record<string, unknown> = {};

    processedFields.forEach((field) => {
      switch (field.blockType) {
        case 'date': {
          switch (field.mode) {
            case 'single':
              dv[field.name] = field.defaultDateValue
                ? new Date(field.defaultDateValue)
                : undefined;
              break;
            case 'multiple':
              dv[field.name] = field.defaultDateValues?.length
                ? field.defaultDateValues.filter((v) => !!v.value).map((v) => new Date(v.value!))
                : [];
              break;
            case 'range':
              dv[field.name] = {
                ...(field.defaultDateFromValue
                  ? { from: new Date(field.defaultDateFromValue) }
                  : {}),
                ...(field.defaultDateToValue ? { to: new Date(field.defaultDateToValue) } : {}),
              };
              break;
          }
          break;
        }
        default: {
          dv[field.name] = field.defaultValue ?? '';
          break;
        }
      }
    });

    return dv;
  });

  const [pending, setPending] = useState(false);

  const formSchema = useMemo(() => {
    const schemaShape: Record<string, z.ZodTypeAny> = {};

    processedFields.forEach((field) => {
      let fieldSchema: z.ZodTypeAny;

      switch (field.blockType) {
        case 'email': {
          const validator = (arg?: string) => (arg ? isEmail(arg) : true);
          const msg = 'Must be a valid email address';

          fieldSchema = field.required
            ? z.string().min(1, { message: REQUIRED_MESSAGE }).refine(validator, { message: msg })
            : z.string().optional().refine(validator, { message: msg });
          break;
        }
        case 'phoneNumber': {
          const validator = (arg?: string) => (arg ? isMobilePhone(arg) : true);
          const msg = 'Must be a valid phone number';

          fieldSchema = field.required
            ? z.string().min(1, { message: REQUIRED_MESSAGE }).refine(validator, { message: msg })
            : z.string().optional().refine(validator, { message: msg });
          break;
        }
        case 'date': {
          switch (field.mode) {
            case 'single':
              fieldSchema = field.required
                ? z.date({ required_error: REQUIRED_MESSAGE })
                : z.date().optional();
              break;
            case 'multiple':
              fieldSchema = field.required
                ? z.date().array().min(1, { message: REQUIRED_MESSAGE })
                : z.date().array().optional();
              break;
            case 'range':
              fieldSchema = z.object({
                from: field.required
                  ? z.date({ required_error: REQUIRED_MESSAGE })
                  : z.date().optional(),
                to: z.date().optional(),
              });
              break;
          }
          break;
        }
        default: {
          fieldSchema = field.required
            ? z.string().min(1, { message: REQUIRED_MESSAGE })
            : z.string().optional();
          break;
        }
      }

      schemaShape[field.name] = fieldSchema;
    });

    return z.object(schemaShape);
  }, [processedFields]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      setPending(true);

      const formatField = (field: (typeof processedFields)[number]) => {
        let valueStr = '';

        if (field.blockType === 'date') {
          switch (field.mode) {
            case 'multiple': {
              valueStr = (values[field.name] as Date[]).map((d) => formatDateShort(d)).join('; ');
              break;
            }
            case 'range': {
              const { from, to } = values[field.name] as { from?: Date; to?: Date };
              valueStr = `${formatDateShort(from)}${to ? ` – ${formatDateShort(to)}` : ''}`.trim();
              break;
            }
            default: {
              valueStr = formatDateShort(values[field.name] as Date);
            }
          }
        } else if (field.blockType === 'select' || field.blockType === 'radio') {
          const selected = field.options.find((o) => o.value === values[field.name]);
          valueStr = selected?.label ?? '';
        } else {
          valueStr = String(values[field.name]);
        }

        return {
          blockType: field.blockType,
          label: field.label,
          value: valueStr,
        };
      };

      const formattedValues: PayloadFormSubmissionsCollection['data'] =
        processedFields.map(formatField);

      try {
        await submitForm(id, formattedValues);

        toast.success(confirmationMessage);
        form.reset();
      } catch (error) {
        console.error('Form submit failed:', error);
        toast.error('Something went wrong. Please try again.');
      } finally {
        setPending(false);
      }
    },
    [form, processedFields, id, confirmationMessage],
  );

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}
        className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {processedFields.map((payloadField) => (
          <FormField
            key={payloadField.id}
            control={form.control}
            name={payloadField.name}
            render={({ field }) => (
              <FormItem data-width={payloadField.width} className="data-[width=full]:sm:col-span-2">
                <FormLabel>
                  {payloadField.label}
                  {!payloadField.required ? ' (optional)' : null}
                </FormLabel>

                <FieldRenderer payloadField={payloadField} field={field} />

                {payloadField.description ? (
                  <RichText
                    data={payloadField.description}
                    overrideClasses={{ paragraph: 'text-base text-pink-900/75' }}
                  />
                ) : null}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          type="submit"
          disabled={pending}
          variant="primary"
          size="lg"
          iconPosition={pending ? 'left' : undefined}
          className="w-full sm:col-span-2 sm:w-fit sm:justify-self-end"
        >
          {submitButtonLabel}
          {pending ? <IconSpinner className="size-6" /> : null}
        </Button>
      </form>
    </Form>
  );
}
