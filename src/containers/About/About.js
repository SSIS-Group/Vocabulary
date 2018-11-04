import React from 'react';
import Tejas from "../../assets/images/TejasNanaware.jpg";

const About = () => {
	return (
		<div class="container" style={{marginTop: '2%'}}>
			<div class="row">
				<div class="col-4">
					<img src={Tejas} alt="Tejas Nanaware" class="img-thumbnail" />
				</div>
					<div class="col-8">
						<h1>Tejas Nanaware</h1>
						<div class="row" style={{marginBottom: '0.5%'}}>
							<div class="col-1">
								<a target="_blank" href="https://github.com/Tejas-Nanaware"><i class="fab fa-github"></i></a>
							</div>
							<div class="col-1">
								<a target="_blank" href="https://www.linkedin.com/in/tejasnanaware/"><i class="fab fa-linkedin"></i></a>
							</div>
							<div class="col-1">
								<a target="_blank" href="https://www.facebook.com/TejasNanaware"><i class="fab fa-facebook-square"></i></a>
							</div>
							<div class="col-1">
								<a href="mailto://tejas@ssisindia.com"><i class="fas fa-envelope"></i></a>
							</div>
						</div>
						<div>
							<p class="text-justify">I am a passionate engineer who loves innovative things and a keen learner. I am curious to learn new things and implement them in any manner. Regarding my technical skills, I am a machine learning and a full-stack developer specializing in Python and JavaScript.</p>
							<p class="text-justify">I have created this app especially for my friends giving competitive exams that focus on the English verbal part. This app has about 5000 words. If you feel like contributing to this project, or add words, you can raise an issue on the <a target="_blank" href="https://github.com/SSIS-Group/Vocabulary">GitHub repo</a> or <a href="mailto://tejas@ssisindia.com">send me an email.</a></p>
						</div>
					</div>
				</div>
			</div>
			);
		};
		
export default About;