import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { MediaCardProps } from '../../types/types';
import { NavLink, useParams } from 'react-router-dom';

const ModuleCard: FC<MediaCardProps> = ({ data, linkTitle, courseId }) => {
    const { id } = useParams<{ id: string }>();

    return (
        <Card className="module">
            <CardMedia
                sx={{ height: 140 }}
                image={data.img}
                title={data.title}  
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink to={`/courses/${courseId}/${data.title}`}>
                    {linkTitle}
                </NavLink>
            </CardActions>
        </Card>
    );
};

export default ModuleCard;
