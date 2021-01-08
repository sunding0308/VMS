export default function MapLoader() {
	return new Promise((resolve, reject) => {
		if (window.AMap) {
		  resolve(window.AMap);
		} else {
			var script = document.createElement('script');
			script.type = "text/javascript";
			script.async = true;
			script.src = "https://webapi.amap.com/maps?v=1.4.15&key=8ce22ab7c77f8699e76a5a446dbed601&callback=initAMap";
			script.onerror = reject;
			document.head.appendChild(script);
		}
		window.initAMap  = () => {
		  resolve(window.AMap);
		};
	});
}