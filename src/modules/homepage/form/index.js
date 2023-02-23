import dayjs from 'dayjs';
import * as yup from 'yup';

export const defaultValuesBanner = {
  title: '',
  file_id: '',
  start_date: new Date(),
  end_date: dayjs().add(1, 'day'),
  published: true,
  language_id: 1,
};

export const validationSchemaBanner = yup.object({
  title: yup
    .string('Vui lòng nhập tiêu đề!')
    .required('Vui lòng nhập tiêu đề!')
    .trim('Tiêu đề chứa khoảng trắng không hợp lệ!')
    .strict()
    .max(500, 'Tiêu đề tối đa 500 kí tự!'),
  file_id: yup
    .string('Vui lòng chọn hình ảnh!')
    .required('Vui lòng chọn hình ảnh!'),
  start_date: yup
    .date('Định dạng ngày không hợp lệ!')
    .typeError('Định dạng ngày không hợp lệ!')
    .required('Vui lòng chọn ngày!')
    .test(
      'invalid',
      'Ngày bắt đầu không được sau ngày kết thúc!',
      (value, context) => {
        const { parent } = context;

        if (dayjs(value).isAfter(parent?.end_date)) return false;

        return true;
      },
    ),
  end_date: yup
    .date('Định dạng ngày không hợp lệ!')
    .typeError('Định dạng ngày không hợp lệ!')
    .required('Vui lòng chọn ngày!')
    .test(
      'invalid',
      'Ngày kết thúc không được trước ngày bắt đầu!',
      (value, context) => {
        const { parent } = context;

        if (dayjs(value).isBefore(parent?.start_date)) return false;

        return true;
      },
    ),
  published: yup.boolean('Vui lòng chọn ngày!'),
  language_id: yup.number().required(),
});
