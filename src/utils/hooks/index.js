import { useCallback, useEffect } from 'react';

//#region Hook resolver for validation (react-fook-form & yup)
export const useResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {},
          ),
        };
      }
    },
    [validationSchema],
  );
//#endregion

//#region Hook focus error (react-hook-form)
export const useFocusError = (isSubmitting, errors, setFocus) => {
  useEffect(() => {
    if (isSubmitting) return;

    if (Object.keys(errors).length > 0) {
      const firstError = Object.keys(errors)[0];

      setFocus(firstError);
    }
  }, [isSubmitting, errors, setFocus]);
};
//#endregion
