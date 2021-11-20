const container = document.querySelector('.webinar-carousel')

const data = [
	[
	{
		n: 4,
		name: 'Nombre Webinar 4',
		expo: 'expositor 4',
		date: '24 Noviembre 2021',
		link: '#',
		state: 'prox'
	},
	{
		n: 3,
		name: 'Nombre Webinar 3',
		expo: 'expositor 3',
		link: '#',
		state: 'pass'
	},
	],
	[
	{
		n: 2,
		name: 'Nombre Webinar 2',
		expo: 'expositor 2',
		link: '#',
		state: 'pass'
	},
	{
		n: 1,
		name: 'Nombre Webinar 1',
		expo: 'expositor 1',
		link: '#',
		state: 'pass'
	},
	]
]
const WebinarCard = ({item}) => {
	return (
		<div className="webinar-cards">
			{item.map((i) => 
				<div key={i.name} className="webinar-card-cont">
					{i.state === 'prox'
						? <a href={i.link} target="_blank">
							<div className="webinar-card webinar-prox">
								<h2 className="prox-text">PROXIMAMENTE</h2>
								<h4 className="prox-date">{i.date}</h4>
							</div>
						  </a>
						:	<a href={i.link} target="_blank">
							<img src={`imgs/webinars/${i.n}.png`} className="webinar-card"/>
							</a>
					}
					<p className="web-card-title">{i.n}. {i.name}</p>
					<p className="web-card-expo">{i.expo}</p>
				</div>
			)}
		</div>
	)
}

const WebinarCarousel = () => {
	const sld = localStorage.getItem("webinar-slide")
	const slideNum = sld ? sld : '0'
	const setSlide = sld => {
		localStorage.setItem("webinar-slide", sld)
		location.reload()
	}
	const nextSlide = n => {
		let num = parseInt(slideNum) + n
		if( num < 0 ){num = data.length - 1}
		if( num == data.length ){num = 0}
		localStorage.setItem("webinar-slide", num.toString())
		location.reload()
	}
	return (
			<div className="carousel-container">
				<div className="carousel-select">  
					<div className="carousel-prev" onClick={()=>nextSlide(-1)}>&#10094;</div>
					{data.map((slide,index) =>
						slideNum === index.toString() 
							? <span key={`dot${index}`} className="dot dotactive" onClick={()=>setSlide(index.toString())}></span>
							: <span key={`dot${index}`} className="dot" onClick={()=>setSlide(index.toString())}></span>
					)}
					<div className="carousel-prev" onClick={()=>nextSlide(1)}>&#10095;</div>
				</div>
				{data.map((slide, index) => 
					slideNum === index.toString() 
						? <WebinarCard  key={`sld${index}`} item={slide}/>
						: null
				)}
			</div>
	);
}

ReactDOM.render(<WebinarCarousel/>, container)

