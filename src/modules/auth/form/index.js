import * as yup from 'yup';

export const defaultValues = {
  username: '',
  password: '',
};

export const validationSchema = yup.object({
  username: yup
    .string('Vui lòng nhập username!')
    .required('Vui lòng nhập username!')
    .trim('Username chứa khoảng trắng không hợp lệ!'),
  password: yup
    .string('Vui lòng nhập username!')
    .required('Vui lòng nhập username!')
    .trim('Username chứa khoảng trắng không hợp lệ!'),
});
