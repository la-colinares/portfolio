import React from 'react'
import { SkillsData } from '../../AppData';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function index(){

    const skillItem = (title: string, level: string) => {
        return (
            <div className="skills-data">
                <FontAwesomeIcon className="skills-icon" icon={faCircleCheck} />
                <div>
                    <h3 className="skills-name">{title}</h3>
                    <span className="skills-level">{level}</span>
                </div>
            </div>
        )
    }

    return (
        <section className="container">
            <h1 className="title">{SkillsData.skills_title}</h1>
            <div className="skills-content">
                <h3 className="skills-title">Android Development</h3>
                <div className="skills-body grid">
                    <div className="skills-area">
                        {/* <h3 className="skills-title">Android Development</h3> */}
                        <div className="skills-box">
                            <div className="skills-group">
                                {skillItem("Kotlin", "Advanced")}
                                {skillItem("SQLite", "Advanced")}
                                {skillItem("KodeIn", "Intermediate")}
                                {skillItem("Jetpack Compose", "Intermediate")}
                            </div>

                            <div className="skills-group">
                                {skillItem("Java", "Advanced")}
                                {skillItem("Room Database", "Advanced")}
                                {skillItem("Retrofit", "Advanced")}
                                {skillItem("Groupie", "Advanced")}
                            </div>
                        </div>
                    </div>

                    <div className="skills-area">
                        <div className="skills-box">
                            <div className="skills-group">
                                {skillItem("Android Studio", "Advanced")}
                                {skillItem("Koin", "Advanced")}
                                {skillItem("Glide", "Advanced")}
                            </div>

                            <div className="skills-group">
                                {skillItem("Android SDK", "Advanced")}
                                {skillItem("Dagger Hilt", "Advanced")}
                                {skillItem("Coil", "Advanced")}
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="skills-title">Frontend/Backend Development</h3>
                <div className="skills-body grid">
                    <div className="skills-area">
                        <div className="skills-box">
                            <div className="skills-group">
                                {skillItem("HTML", "Advanced")}
                                {skillItem("JavaScript", "Intermediate")}
                                {skillItem("GraphQL", "Basic")}
                                
                            </div>

                            <div className="skills-group">
                                {skillItem("CSS", "Advanced")}
                                {skillItem("TypeScript", "Basic")}
                                {skillItem("PHP/Laravel", "Basic")}
                                
                            </div>
                        </div>
                    </div>

                    <div className="skills-area">
                        <div className="skills-box">
                            <div className="skills-group">
                                {skillItem("SASS/SCSS", "Intermediate")}
                                {skillItem("React", "Intermediate")}
                            </div>

                            <div className="skills-group">
                                {skillItem("Bootstrap", "Intermediate")}
                                {skillItem("React-Query", "Basic")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}