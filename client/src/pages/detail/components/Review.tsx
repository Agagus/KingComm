import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { ContainerRatings } from './style';
import moment from 'moment';
import 'moment/locale/es';

export const Review = ({ ratings }: { ratings: Array<any> }) => {
  const formato = 'DD MMM YYYY';

  return (
    <div>
      <h1>Opiniones del producto</h1>
      {/* FALTA COMPONENTE DE PROMEDIOS  */}
      <ContainerRatings>
        {ratings?.map((rating) => (
          <div key={rating.id} className="one__rating">
            <p className="date__rating">{moment(rating.createdAt.split('T')[0]).format(formato)}</p>
            <Box>
              <Rating
                size="large"
                name="read-only"
                value={rating.score}
                readOnly
              />
            </Box>
            <p className="commentary__rating">{rating.commentary}</p>
          </div>
        ))}
      </ContainerRatings>
    </div>
  );
};
// "id": 1,
// "score": 1,
// "commentary": "primer cometario jejejeje",
// "createdAt": "2023-01-04T22:44:20.521Z",
// "updatedAt": "2023-01-04T22:44:20.521Z",
// "productId": 1
