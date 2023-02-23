import { useParams } from 'react-router-dom';
import { getUserById } from '@apis/users.api';
import { MForm } from '@modules/users/components';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const UpdateUserPage = () => {
  //#region Data
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ['user-detail', id],
    queryFn: () => getUserById(id),
  });
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Box>
      <MForm data={data?.data} />
    </Box>
  );
  //#endregion
};

export default UpdateUserPage;
