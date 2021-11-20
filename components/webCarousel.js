var container = document.querySelector('.webinar-carousel');

var data = [[{
	n: 4,
	name: 'Nombre Webinar 4',
	expo: 'expositor 4',
	date: '24 Noviembre 2021',
	link: '#',
	state: 'prox'
}, {
	n: 3,
	name: 'Nombre Webinar 3',
	expo: 'expositor 3',
	link: '#',
	state: 'pass'
}], [{
	n: 2,
	name: 'Nombre Webinar 2',
	expo: 'expositor 2',
	link: '#',
	state: 'pass'
}, {
	n: 1,
	name: 'Nombre Webinar 1',
	expo: 'expositor 1',
	link: '#',
	state: 'pass'
}]];
var WebinarCard = function WebinarCard(_ref) {
	var item = _ref.item;

	return React.createElement(
		'div',
		{ className: 'webinar-cards' },
		item.map(function (i) {
			return React.createElement(
				'div',
				{ key: i.name, className: 'webinar-card-cont' },
				i.state === 'prox' ? React.createElement(
					'a',
					{ href: i.link, target: '_blank' },
					React.createElement(
						'div',
						{ className: 'webinar-card webinar-prox' },
						React.createElement(
							'h2',
							{ className: 'prox-text' },
							'PROXIMAMENTE'
						),
						React.createElement(
							'h4',
							{ className: 'prox-date' },
							i.date
						)
					)
				) : React.createElement(
					'a',
					{ href: i.link, target: '_blank' },
					React.createElement('img', { src: 'imgs/webinars/' + i.n + '.png', className: 'webinar-card' })
				),
				React.createElement(
					'p',
					{ className: 'web-card-title' },
					i.n,
					'. ',
					i.name
				),
				React.createElement(
					'p',
					{ className: 'web-card-expo' },
					i.expo
				)
			);
		})
	);
};

var WebinarCarousel = function WebinarCarousel() {
	var sld = localStorage.getItem("webinar-slide");
	var slideNum = sld ? sld : '0';
	var setSlide = function setSlide(sld) {
		localStorage.setItem("webinar-slide", sld);
		location.reload();
	};
	var nextSlide = function nextSlide(n) {
		var num = parseInt(slideNum) + n;
		if (num < 0) {
			num = data.length - 1;
		}
		if (num == data.length) {
			num = 0;
		}
		localStorage.setItem("webinar-slide", num.toString());
		location.reload();
	};
	return React.createElement(
		'div',
		{ className: 'carousel-container' },
		React.createElement(
			'div',
			{ className: 'carousel-select' },
			React.createElement(
				'div',
				{ className: 'carousel-prev', onClick: function onClick() {
						return nextSlide(-1);
					} },
				'\u276E'
			),
			data.map(function (slide, index) {
				return slideNum === index.toString() ? React.createElement('span', { key: 'dot' + index, className: 'dot dotactive', onClick: function onClick() {
						return setSlide(index.toString());
					} }) : React.createElement('span', { key: 'dot' + index, className: 'dot', onClick: function onClick() {
						return setSlide(index.toString());
					} });
			}),
			React.createElement(
				'div',
				{ className: 'carousel-prev', onClick: function onClick() {
						return nextSlide(1);
					} },
				'\u276F'
			)
		),
		data.map(function (slide, index) {
			return slideNum === index.toString() ? React.createElement(WebinarCard, { key: 'sld' + index, item: slide }) : null;
		})
	);
};

ReactDOM.render(React.createElement(WebinarCarousel, null), container);