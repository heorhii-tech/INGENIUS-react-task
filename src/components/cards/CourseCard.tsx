import { FC } from 'react';
import { CoursePropsType } from '../../types/types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const CourseCard: FC<CoursePropsType> = ({ course }) => {
    return (
        <Card className="course" sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={course.img}
                title={course.title}  
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {course.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: "auto" }}>
                <NavLink to={`/courses/${course.id}`}>
                    <Typography variant="button" sx={{ textDecoration: 'none' }}>
                        Learn More
                    </Typography>
                </NavLink>
            </CardActions>
        </Card>
    );
}

export default CourseCard;
