import './para.scss';

class Paragraph{
	paraClass = 'para';
	render(){
		const p = document.createElement('p');
		p.classList.add(this.paraClass);
		p.innerHTML = "This is an example to try webpack module";

		const body = document.querySelector('body');
		body.appendChild(p);
	}
}

export default Paragraph;