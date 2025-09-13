'use client';

import { useActionState } from 'react';
import { useEffect } from 'react';
import { actionFunction } from '@/lib/types';
import { toast } from 'react-toastify';

const initialState = {
  message: '',
};
const MAX_IMAGE_BYTES = 1024 * 1024; // 1 MB

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);

  async function guardedAction(formData: FormData) {
    const file = formData.get('image');
    if (file instanceof File && file.size > MAX_IMAGE_BYTES) {
      toast.error('Image must be ≤ 1 MB');
      return;
    }

    return formAction(formData);
  }

  useEffect(() => {
    if (state?.message) {
      toast(state.message);
    }
  }, [state?.message]);
  return <form action={guardedAction}>{children}</form>;
}
export default FormContainer;