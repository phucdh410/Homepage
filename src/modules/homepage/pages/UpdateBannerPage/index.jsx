import { useParams, useSearchParams } from 'react-router-dom';
import { getBannerById } from '@apis/banners.api';
import { MBannerForm } from '@modules/homepage/components';
import { useQuery } from '@tanstack/react-query';

const UpdateBannerPage = () => {
  //#region Data
  const { id } = useParams();
  const [params] = useSearchParams();

  const language_id = params.get('language_id');

  const { data } = useQuery({
    queryKey: ['banner-detail', id, language_id],
    queryFn: () => getBannerById(id, language_id),
  });
  //#endregion

  //#region Event

  //#endregion

  //#region Render
  return (
    <div>
      <MBannerForm data={data?.data} language_id={language_id} />
    </div>
  );
  //#endregion
};

export default UpdateBannerPage;
