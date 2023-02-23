import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { uploadFile } from '@apis/files.api';
import defaultImage from '@assets/images/default-image.png';
import { PhotoCamera, Upload } from '@mui/icons-material';
import { Box, Button, FormHelperText, Typography } from '@mui/material';

const MAX_FILE_SIZE = 5242880;
const checkImageFile = (file) => {
  if (file) {
    if (file.size > MAX_FILE_SIZE) {
      toast.error('Dung lượng file ảnh tối đa 5Mb!');
      return false;
    } else if (file.type.split('/')[0] !== 'image') {
      toast.error('Định dạng file không hợp lệ (image/*)!');
      return false;
    }
    return true;
  }
};

export const CImageUpload = ({ onChange, error, helperText, url }) => {
  //#region Data
  const wrapperRef = useRef();
  const inputRef = useRef();

  const [imageUrl, setImageUrl] = useState();
  //#endregion

  //#region Event
  const onDragEnter = () => {
    wrapperRef.current.classList.add('dragover');
  };

  const onDragLeave = () => {
    wrapperRef.current.classList.remove('dragover');
  };

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const onFileInputChange = async (e) => {
    const file = e.target.files[0];
    const isValid = checkImageFile(file);
    if (isValid) {
      inputRef.current.value = null;

      try {
        const res = await uploadFile(file);

        const url = URL.createObjectURL(file);

        setImageUrl(url);

        onChange(res?.data?.id);
      } catch (error) {
        toast.error(error?.message || 'Upload file không thành công!');
      }
    }
  };

  const onDrop = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    wrapperRef.current.classList.remove('dragover');
    const file = e?.dataTransfer?.files[0];
    const isValid = checkImageFile(file);
    if (isValid) {
      inputRef.current.value = null;

      try {
        const res = await uploadFile(file);

        const url = URL.createObjectURL(file);

        setImageUrl(url);

        onChange(res?.data?.id);
      } catch (error) {
        toast.error(error?.message || 'Upload file không thành công!');
      }
    }
  };

  const onImageError = () => setImageUrl(defaultImage);
  //#endregion

  //#region Render
  return imageUrl || url ? (
    <Box position="relative" display="flex" flexDirection="column">
      <Box>
        <Button
          startIcon={<PhotoCamera />}
          sx={{ mb: 1 }}
          color="info"
          component="label"
        >
          Thay đổi
          <input
            type="file"
            ref={inputRef}
            onChange={onFileInputChange}
            hidden
            accept="image/*"
          />
        </Button>
      </Box>

      <Box maxWidth={{ xs: 330, sm: 400, md: 600, lg: 640, xl: 720 }}>
        <img
          src={imageUrl || url}
          alt=""
          style={{ maxWidth: '100%', height: 'auto' }}
          onError={onImageError}
        />
      </Box>
    </Box>
  ) : (
    <>
      <Box
        className="c-upload"
        margin="auto"
        position="relative"
        width="100%"
        minWidth={250}
        height={150}
        borderRadius={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        component="label"
        sx={{ backgroundColor: '#eeeeee' }}
      >
        <Box
          component="label"
          ref={wrapperRef}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
          className="overlay"
          position="absolute"
          borderRadius="inherit"
          border="3px dashed #a1a0a0"
          borderColor={error ? 'red' : '#a1a0a0'}
          sx={{
            inset: 0,
            backgroundColor: 'transparent',
            cursor: 'pointer',
            '&.dragover': {
              border: '3px dashed #2188FD',
            },
          }}
        >
          {
            <input
              type="file"
              ref={inputRef}
              onChange={onFileInputChange}
              hidden
              accept="image/*"
            />
          }
        </Box>
        <Box textAlign="center" fontWeight={600} p={1.1} sx={{ opacity: 1 }}>
          <Upload sx={{ fontSize: '3rem' }} color="primary" />
          <Typography>
            Chọn file hoặc kéo thả vào đây
            <br /> (Tối đa 5MB)
          </Typography>
        </Box>
      </Box>
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </>
  );
  //#endregion
};
