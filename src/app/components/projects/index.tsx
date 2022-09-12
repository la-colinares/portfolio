import React from 'react';
import { ProjectsData } from '../../AppData';
import '../../scss/partial/_projects.scss';

export default function index() {

    return (
        <section>
            <h1 className="title">{ProjectsData.projects}</h1>
        </section>
    )
}
