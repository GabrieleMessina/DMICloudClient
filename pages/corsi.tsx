import * as React from "react";
import "../style/landing.scss";
import Button from '@material-ui/core/Button';
import Link from "next/link";
import {Course, DumCourse} from "../models";
import {Avatar, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {useListStyles} from "../lib/materialUIStyleCustom";
import {ReactNode} from "react";

let courses: Course[] = DumCourse;

function Corsi(){
    function getCourseInfo(course: Course): ReactNode{
        return <span>Ultima modifica: {course.updatedAt}<br/> Admin: {course.creatorId} </span>;
    }

    const CourseListItem = courses.map((course) =>
        <ListItem key={course.id}>
            <ListItemText primary={course.name} secondary={getCourseInfo(course)} />
        </ListItem>
    );

    const listStyle = useListStyles();
    return (
        <div className="corsi">
            <List className={listStyle.root}>
                {CourseListItem}
            </List>
        </div>
    );
}
export default Corsi;