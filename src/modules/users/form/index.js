import * as yup from 'yup';

export const defaultValues = {
  username: '',
  password: '',
  active: true,
  permissions: [],
  isCreate: true,
};

export const validationSchema = yup.object({
  username: yup
    .string('Vui lòng nhập username!')
    .required('Vui lòng nhập username!')
    .trim('Username chứa khoảng trắng không hợp lệ!')
    .strict()
    .max(255, 'Username tối đa 255 kí tự!'),
  password: yup.string('Vui lòng nhập password!').when('isCreate', {
    is: true,
    then: () =>
      yup
        .string('Vui lòng nhập password!')
        .trim('Password chứa khoảng trắng không hợp lệ!')
        .strict()
        .max(255, 'Password tối đa 255 kí tự!')
        .required('Vui lòng nhập password!'),
  }),
  permissions: yup
    .array()
    .min(1, 'Chọn phân quyền ít nhất 1 chức năng cho người dùng!'),
  active: yup.boolean(),
  isCreate: yup.boolean(),
});
