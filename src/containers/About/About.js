import React from 'react';
import Tejas from "../../assets/images/TejasNanaware.jpg";

const About = () => {
	return (
		<div className="container" style={{marginTop: '2%'}}>
			<div className="row">
				<div className="col-4">
					<img src={Tejas} alt="Tejas Nanaware" className="img-thumbnail" />
				</div>
					<div className="col-8">
						<h1>Tejas Nanaware</h1>
						<div className="row" style={{marginBottom: '0.5%'}}>
							<div className="col-1">
								<a target="_blank" rel="noopener noreferrer" href="https://github.com/Tejas-Nanaware"><i className="fab fa-github"></i></a>
							</div>
							<div className="col-1">
								<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tejasnanaware/"><i className="fab fa-linkedin"></i></a>
							</div>
							<div className="col-1">
								<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TejasNanaware"><i className="fab fa-facebook-square"></i></a>
							</div>
							<div className="col-1">
								<a href="mailto://tejas@ssisindia.com"><i className="fas fa-envelope"></i></a>
							</div>
						</div>
						<div>
							<p className="text-justify">I am a passionate engineer who loves innovative things and a keen learner. I am curious to learn new things and implement them in any manner. Regarding my technical skills, I am a machine learning and a full-stack developer specializing in Python and JavaScript.</p>
							<p className="text-justify">I have created this app especially for my friends giving competitive exams that focus on the English verbal part. This app has about 5000 words. If you feel like contributing to this project, or add words, you can raise an issue on the <a target="_blank" rel="noopener noreferrer" href="https://github.com/SSIS-Group/Vocabulary">GitHub repo</a> or <a href="mailto://tejas@ssisindia.com">send me an email.</a></p>
						</div>
					</div>
				</div>
			</div>
			);
		};
		
export default About;