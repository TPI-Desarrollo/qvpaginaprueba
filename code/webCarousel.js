const container = document.querySelector('.webinar-carousel')

const data = [
	[
	{
		n: 2,
		name: 'Crea una propuesta de valor desde el cliente y encuentra recursos para financiarla.',
		expo: 'Competir en el mercado requiere de múltiples aspectos fundamentales relacionados con la orientación al cliente y la planificación detallada de la idea de negocio.',
		date: '2021-1',
		link: {
			dos: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756480',
			cuatro: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756497'
		},
		state: 'pass'
	},
	{
		n: 1,
		name: 'Contexto de innovación y economía circular',
		expo: 'Conoce el la posición de Colombia en el panorama internacional de la Ciencia, Tecnología e Innovación',
		date: '2021-1',
		link: {
			dos: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756468',
			cuatro: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756485'
		},
		state: 'pass'
	}
	],
]
const WebinarCard = ({item, group}) => {
	return (
		<div className="webinar-cards">
			{item.map((i) => 
				<div key={i.name} className="webinar-card-cont">
					{i.state === 'prox'
						? <a href={i.link[group]} target="_blank">
							<div className="webinar-card webinar-prox">
								<h2 className="prox-text">PROXIMAMENTE</h2>
								<h4 className="prox-date">{i.date}</h4>
							</div>
						  </a>
						:	<a href={i.link[group]} target="_blank">
							<img src={`imgs/webinars/${i.n}.jpg`} className="webinar-card"/>
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
	const setSlide = sldn => {
		localStorage.setItem("webinar-slide", sldn)
		location.reload()
	}
	const nextSlide = n => {
		let num = parseInt(slideNum) + n
		if( num < 0 ){num = data.length - 1}
		if( num == data.length ){num = 0}
		localStorage.setItem("webinar-slide", num.toString())
		location.reload()
	}

	const gr = localStorage.getItem("data-grupo-sel")
	const group = gr ? gr : 'dos'
	const setGroup = grp => {
		localStorage.setItem("data-grupo-sel", grp)
		location.reload()
	}

	return (
			<div className="carousel-container">
			<div className="grp-sel-cont">
				{group === 'dos'
					? <div className="grupo-sel grp-selected">
							Horario 2 - 4 pm
						</div>
					: <div className="grupo-sel" onClick={() => setGroup('dos')}>
							Horario 2 - 4 pm
						</div>
				}
				{group === 'cuatro'
					? <div className="grupo-sel grp-selected">
							Horario 4 - 6 pm
						</div>
					: <div className="grupo-sel" onClick={() => setGroup('cuatro')}>
							Horario 4 - 6 pm
						</div>
				}
			</div>
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
						? <WebinarCard  
								key={`sld${index}`} 
								item={slide}
								group={group}
							/>
						: null
				)}
			</div>
	);
}

ReactDOM.render(<WebinarCarousel/>, container)

